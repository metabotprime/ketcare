import type { GetStaticProps } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { HEALTH_DATA_PRIVACY } from '@/lib/legal-content';

export default function ConsumerHealthDataPrivacyPage() {
  return (
    <LegalPage
      title="Consumer Health Data Privacy Policy | Ketcare"
      description="How Ketcare processes Consumer Health Data under U.S. state privacy laws."
      path="/consumer-health-data-privacy-policy/"
      heading="Consumer Health Data Privacy Policy"
      lastUpdated="May 2026"
      draft
      content={HEALTH_DATA_PRIVACY}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
