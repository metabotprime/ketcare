import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_URL } from '@/lib/utils';

type SEOHeadProps = {
  title: string;
  description: string;
  /** Path with leading slash, e.g. '/our-story/'. Used to build canonical URL. */
  path: string;
  /** Path or absolute URL for OG/Twitter card image. */
  ogImage?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
};

/**
 * Single source of truth for per-page meta tags. JSON-LD schema is rendered
 * separately via the schema components in components/schema/* — never through
 * Helmet (Helmet's head-dedup logic collapses multiple LD+JSON tags into one).
 */
export function SEOHead({
  title,
  description,
  path,
  ogImage,
  type = 'website',
  noindex = false,
}: SEOHeadProps) {
  const isHome = path === '/';
  const fullTitle = isHome ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  // Always provide a description fallback. Empty descriptions cause schema
  // validators to reject the doc and OG previews to look broken.
  const desc = description?.trim() || title;

  const imageUrl = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${SITE_URL}${ogImage}`
    : `${SITE_URL}/og-default.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
