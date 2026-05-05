import { Redis } from '@upstash/redis';

/**
 * Upstash Redis client (lazy singleton).
 *
 * Returns null if the env vars haven't been wired yet — callers should
 * handle the null case so the site doesn't break before storage is
 * connected.
 *
 * Env vars (auto-injected when you connect Upstash from Vercel Marketplace):
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 */
let _client: Redis | null | undefined;

export function getRedis(): Redis | null {
  if (_client !== undefined) return _client;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    _client = null;
    return null;
  }

  _client = new Redis({ url, token });
  return _client;
}
