import { SITE_URL, SITE_NAME } from '@/lib/utils';

type ReviewItem = {
  authorName: string;
  body: string;
  rating: number;
  /** ISO 8601 date */
  date: string;
};

type ReviewSchemaProps = {
  reviews: ReviewItem[];
};

/**
 * Aggregate rating + individual reviews tied to the MedicalOrganization.
 * Renders inline JSON-LD (not via Helmet) per the brief — Helmet's head-dedup
 * collapses multiple LD+JSON tags into one.
 */
export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const ratingValue =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Number(ratingValue.toFixed(1)),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.authorName },
      reviewBody: r.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: r.date,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
