import type { NextApiRequest, NextApiResponse } from 'next';
import { getRedis } from '@/lib/redis';
import { VALID_STATE_CODES } from '@/lib/states';

/**
 * POST /api/waitlist/
 *
 * Body: { email: string, state: string (2-char), condition?: string }
 *
 * Storage strategy:
 *   - Primary: Upstash Redis (connected via Vercel Marketplace).
 *     Submissions are LPUSH'd to a "waitlist" list and per-email keys
 *     are set so duplicates are visible.
 *   - Fallback: every submission is also console.log'd, so Vercel
 *     function logs serve as a backup if Redis isn't yet configured.
 *
 * To enable persistence: Vercel dashboard → Storage → Upstash → connect
 * to the ketcare project. Vercel auto-injects:
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WAITLIST_KEY = 'waitlist';
const EMAIL_KEY_PREFIX = 'waitlist:email:';

type SubmissionBody = {
  email?: string;
  state?: string;
  condition?: string;
};

type ApiResponse =
  | { success: true; message: string }
  | { success: false; error: string };

type Submission = {
  email: string;
  state: string;
  condition: string | null;
  timestamp: string;
  ip: string | null;
  userAgent: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { email, state, condition } = req.body as SubmissionBody;

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email address.',
    });
  }
  if (!state || !VALID_STATE_CODES.has(state.toUpperCase())) {
    return res.status(400).json({
      success: false,
      error: 'Please select your state — Ketcare is US-only.',
    });
  }

  const submission: Submission = {
    email: email.trim().toLowerCase(),
    state: state.toUpperCase(),
    condition: condition?.trim() || null,
    timestamp: new Date().toISOString(),
    ip:
      (typeof req.headers['x-forwarded-for'] === 'string'
        ? req.headers['x-forwarded-for'].split(',')[0].trim()
        : null) || req.socket.remoteAddress || null,
    userAgent: typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : null,
  };

  // Always log — backup that survives even if Redis isn't configured yet.
  // eslint-disable-next-line no-console
  console.log('[waitlist] new submission', submission);

  // Persist to Upstash Redis if configured. Failures are logged but never
  // surface to the user — submission is still in function logs as backup.
  const redis = getRedis();
  if (redis) {
    try {
      const payload = JSON.stringify(submission);
      await redis.lpush(WAITLIST_KEY, payload);
      await redis.set(`${EMAIL_KEY_PREFIX}${submission.email}`, payload);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[waitlist] redis write failed', err);
    }
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      '[waitlist] REDIS_URL not set — submission logged only. ' +
        'Connect Redis from Vercel dashboard → Storage.'
    );
  }

  return res.status(200).json({
    success: true,
    message: "You're on the list. We'll be in touch when enrollment opens.",
  });
}
