import Redis from 'ioredis';

/**
 * Redis client (lazy singleton) for Vercel's Redis marketplace integration.
 *
 * Connects via REDIS_URL (TCP). Returns null if env var isn't set so callers
 * can handle the unconfigured case gracefully.
 *
 * Env var (auto-injected when you connect Redis from Vercel Marketplace):
 *   REDIS_URL  e.g. rediss://default:<password>@<host>:<port>
 *
 * Note: in Vercel serverless, connections persist across warm invocations.
 * On a cold start a new connection is created. We use lazyConnect so the
 * import is cheap and connection only happens on first command.
 */

let _client: Redis | null | undefined;

export function getRedis(): Redis | null {
  if (_client !== undefined) return _client;

  const url = process.env.REDIS_URL;
  if (!url) {
    _client = null;
    return null;
  }

  _client = new Redis(url, {
    lazyConnect: true,
    // For serverless: cap retries so a flaky connection doesn't pile up.
    maxRetriesPerRequest: 2,
    // Don't crash the process on connection error — log and let caller decide.
    enableReadyCheck: false,
  });

  _client.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.error('[redis] connection error', err.message);
  });

  return _client;
}
