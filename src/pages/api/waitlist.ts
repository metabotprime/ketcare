import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { VALID_STATE_CODES } from '@/lib/states';

/**
 * POST /api/waitlist
 *
 * Body: { email: string, state: string (2-char), condition?: string }
 *
 * - Validates input
 * - Sends confirmation email to user via Resend
 * - Sends notification email to admin
 * - Always console.logs the submission (so it shows in Vercel logs as a
 *   backup if Resend fails or isn't configured)
 *
 * Required env vars:
 *   RESEND_API_KEY            — get from https://resend.com/api-keys
 *
 * Optional env vars (with sensible defaults):
 *   WAITLIST_FROM_EMAIL       — default: onboarding@resend.dev (Resend's
 *                                test sender, works without domain verification)
 *   WAITLIST_ADMIN_EMAIL      — default: hello@ketcare.com
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmissionBody = {
  email?: string;
  state?: string;
  condition?: string;
};

type ApiResponse =
  | { success: true; message: string }
  | { success: false; error: string };

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

  const submission = {
    email: email.trim().toLowerCase(),
    state: state.toUpperCase(),
    condition: condition?.trim() || null,
    timestamp: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
  };

  // Always log — backup in case Resend isn't configured yet.
  // eslint-disable-next-line no-console
  console.log('[waitlist] new submission', submission);

  // Try to send via Resend if API key is configured. If not, return success
  // anyway — submission is captured in logs and admin can backfill later.
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const fromEmail = process.env.WAITLIST_FROM_EMAIL || 'onboarding@resend.dev';
      const adminEmail = process.env.WAITLIST_ADMIN_EMAIL || 'hello@ketcare.com';

      // Confirmation to the user
      await resend.emails.send({
        from: `Ketcare <${fromEmail}>`,
        to: submission.email,
        subject: "You're on the Ketcare waitlist",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #261d2a; line-height: 1.6; max-width: 540px;">
            <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 16px;">You're on the list.</h1>
            <p>Thanks for joining the Ketcare waitlist. We'll notify you the moment enrollment opens in <strong>${submission.state}</strong>.</p>
            ${submission.condition ? `<p>Noted you're focused on: <strong>${submission.condition}</strong>.</p>` : ''}
            <p>While you wait, you may want to read our <a href="https://ketcare.com/why-ketamine/" style="color: #6e1fa8;">overview of how ketamine therapy works</a> or browse <a href="https://ketcare.com/research/" style="color: #6e1fa8;">the research behind our protocol</a>.</p>
            <p style="color: #6b6770; font-size: 13px; margin-top: 32px;">If you didn't sign up for this, you can ignore this email — you won't hear from us again unless you confirm.</p>
            <p style="color: #6b6770; font-size: 13px;">— The Ketcare team</p>
          </div>
        `.trim(),
      });

      // Notification to admin
      await resend.emails.send({
        from: `Ketcare Waitlist <${fromEmail}>`,
        to: adminEmail,
        subject: `[Waitlist] ${submission.email} (${submission.state})`,
        html: `
          <div style="font-family: -apple-system, sans-serif; line-height: 1.5;">
            <h2>New waitlist signup</h2>
            <ul>
              <li><strong>Email:</strong> ${submission.email}</li>
              <li><strong>State:</strong> ${submission.state}</li>
              <li><strong>Condition focus:</strong> ${submission.condition || '(none)'}</li>
              <li><strong>Time:</strong> ${submission.timestamp}</li>
            </ul>
          </div>
        `.trim(),
      });
    } catch (err) {
      // Don't break the user experience if email fails — submission is in logs
      // eslint-disable-next-line no-console
      console.error('[waitlist] resend error', err);
    }
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      '[waitlist] RESEND_API_KEY not set — submission logged but no email sent. ' +
        'Add the env var in Vercel → Settings → Environment Variables.'
    );
  }

  return res.status(200).json({
    success: true,
    message: "You're on the list. Check your email for confirmation.",
  });
}
