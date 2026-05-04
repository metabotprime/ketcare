import { SITE_NAME, SITE_URL } from '@/lib/utils';

/**
 * MedicalOrganization schema for ketcare. Use on every page (typically via
 * the layout shell) to anchor the entity graph.
 */
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    description:
      'At-home ketamine therapy for depression, anxiety, PTSD, and mental wellness — delivered through licensed clinicians via telehealth.',
    medicalSpecialty: ['Psychiatry', 'MentalHealth'],
    sameAs: [
      // Add social profiles as they come online
      'https://www.facebook.com/profile.php?id=61580836671748',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
