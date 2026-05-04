import { SITE_NAME, SITE_URL } from '@/lib/utils';

type BlogPostingSchemaProps = {
  headline: string;
  description: string;
  /** Relative path or absolute URL */
  url: string;
  /** Relative path or absolute URL */
  image: string;
  /** ISO 8601 */
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
};

export function BlogPostingSchema(props: BlogPostingSchemaProps) {
  const fullUrl = props.url.startsWith('http')
    ? props.url
    : `${SITE_URL}${props.url}`;
  const imageUrl = props.image.startsWith('http')
    ? props.image
    : `${SITE_URL}${props.image}`;

  // Description fallback — empty excerpts must use headline or schema
  // validators reject the document.
  const desc = props.description?.trim() || props.headline;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.headline,
    description: desc,
    image: imageUrl,
    url: fullUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': fullUrl },
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    author: {
      '@type': props.authorName ? 'Person' : 'Organization',
      name: props.authorName || SITE_NAME,
      url: props.authorUrl || SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
