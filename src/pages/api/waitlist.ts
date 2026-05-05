import type { NextApiRequest, NextApiResponse } from 'next';
import { kv } from '@vercel/kv';
import { VALID_STATE_CODES } from '@/lib/states';

/**
 * POST /api/waitlist/
 *
 * Body: { email: string, state: string (2-char), condition?: string }
 *
 * Storage strategy:
 *   - Primary: Vercel KV (Redis-backed). Submissions are LPUSH'd to a
 *     "waitlist" list and per-email keys are set so duplicates are visible.
 *   - Fallback: every submission is also console.log'd, so Vercel function
 *     logs serve as a backup if KV isn't yet configured.
 *
 * Required Vercel env vars (auto-injected when you connect a KV store):
 *   KV_REST_API_URL
 *   KV_REST_API_TOKEN
 *   KV_REST_API_READ_ONLY_TOKEN
 *   KV_URL
 *
 * To enable: Vercel dashboard → Storage → Create Database → KV → connect
 * to the ketcare project. Vercel auto-injects all four env vars on the
 * next deploy.
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

  // Always log — backup that survives even if KV isn't configured yet.
  // eslint-disable-next-line no-console
  console.log('[waitlist] new submission', submission);

  // Try to persist to Vercel KV. If KV env vars aren't set the SDK will
  // throw — we catch and fall back to log-only so the user experience
  // never breaks.
  try {
    // Append to the chronologically-ordered list
    await kv.lpush(WAITLIST_KEY, JSON.stringify(submission));
    // And set a per-email key so we can spot duplicates / look up by email
    await kv.set(`${EMAIL_KEY_PREFIX}${submission.email}`, submission);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      '[waitlist] KV write failed (likely missing env vars). ' +
        'Connect a KV store in Vercel dashboard → Storage → Create Database → KV.',
      err
    );
  }

  return res.status(200).json({
    success: true,
    message: "You're on the list. We'll be in touch when enrollment opens.",
  });
}
