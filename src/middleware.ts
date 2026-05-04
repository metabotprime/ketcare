import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Block parasitic SEO scrapers and basic web-vuln scanners at the edge.
 *
 * AI search bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
 * are NOT blocked here — those are explicitly allowed via robots.txt because
 * we want to be cited in AI-generated answers.
 *
 * Defensive try/catch ensures any future error here doesn't take down the
 * whole site with a 500 MIDDLEWARE_INVOCATION_FAILED.
 */
const BLOCKED_PATTERN =
  /AhrefsBot|SemrushBot|MJ12bot|DotBot|DataForSeoBot|BLEXBot|MegaIndex|Mauibot|PetalBot|ZmEu|masscan|nmap|sqlmap|nikto/i;

export function middleware(request: NextRequest) {
  try {
    const ua = request.headers.get('user-agent');
    if (ua && BLOCKED_PATTERN.test(ua)) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  } catch {
    // Never let an unexpected error in middleware crash the request.
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match everything except Next internals, the API, and a few static files.
    '/((?!_next|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|image-sitemap\\.xml|llms\\.txt|llms-full\\.txt).*)',
  ],
};
