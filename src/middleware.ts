import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Block parasitic SEO scrapers and basic web-vuln scanners at the edge.
 * Returns 403 before the request hits any rendering — saves CPU and prevents
 * data scraping for competitive intelligence tools we get nothing from.
 *
 * AI search bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) are
 * NOT blocked here — those are explicitly allowed via robots.txt because we
 * want to be cited in AI-generated answers.
 */
const BLOCKED_USER_AGENTS = [
  // Parasitic SEO scrapers
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'DataForSeoBot',
  'BLEXBot',
  'MegaIndex',
  'Mauibot',
  'PetalBot',
  // Vuln scanners / hostile probes
  'ZmEu',
  'masscan',
  'nmap',
  'sqlmap',
  'nikto',
];

const blockedRegex = new RegExp(
  BLOCKED_USER_AGENTS.map((bot) => bot.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
  'i'
);

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  if (blockedRegex.test(userAgent)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all paths EXCEPT internal Next assets and the API.
    // Don't waste CPU running middleware on static chunks.
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|image-sitemap.xml|llms.txt|llms-full.txt).*)',
  ],
};
