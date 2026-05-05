import type { NextApiRequest, NextApiResponse } from 'next';
import { kv } from '@vercel/kv';

/**
 * GET /api/admin/waitlist/?token=<ADMIN_TOKEN>&format=json|csv
 *
 * Returns all waitlist submissions. Header form also supported:
 *   Authorization: Bearer <ADMIN_TOKEN>
 *
 * Required env var:
 *   ADMIN_TOKEN — set this to a long random string (e.g.
 *                 `openssl rand -hex 32`) in Vercel project settings.
 */

const WAITLIST_KEY = 'waitlist';

type Submission = {
  email: string;
  state: string;
  condition: string | null;
  timestamp: string;
  ip: string | null;
  userAgent: string | null;
};

function parseToken(req: NextApiRequest): string | null {
  const header = req.headers.authorization;
  if (header?.startsWith('Bearer ')) return header.slice(7).trim();
  if (typeof req.query.token === 'string') return req.query.token;
  return null;
}

function toCsv(rows: Submission[]): string {
  const headers = ['timestamp', 'email', 'state', 'condition', 'ip', 'userAgent'];
  const escape = (v: unknown) => {
    if (v === null || v === undefined) return '';
    const s = String(v).replace(/"/g, '""');
    return /[",\n]/.test(s) ? `"${s}"` : s;
  };
  const body = rows
    .map((r) =>
      headers.map((h) => escape((r as unknown as Record<string, unknown>)[h])).join(',')
    )
    .join('\n');
  return headers.join(',') + '\n' + body + '\n';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken) {
    return res
      .status(503)
      .json({ error: 'ADMIN_TOKEN not configured. Set it in Vercel env vars.' });
  }

  const provided = parseToken(req);
  if (!provided || provided !== adminToken) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  let rows: Submission[] = [];
  try {
    const raw = (await kv.lrange(WAITLIST_KEY, 0, -1)) as (string | Submission)[];
    rows = raw.map((entry) => (typeof entry === 'string' ? JSON.parse(entry) : entry));
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Could not read from KV. Is the database connected?', detail: String(err) });
  }

  const format = (req.query.format as string) || 'json';
  if (format === 'csv') {
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="waitlist-${new Date().toISOString().split('T')[0]}.csv"`
    );
    return res.status(200).send(toCsv(rows));
  }

  return res.status(200).json({ count: rows.length, submissions: rows });
}
