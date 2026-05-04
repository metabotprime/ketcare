import type { GetStaticProps } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { INFORMED_CONSENT } from '@/lib/legal-content';

export default function InformedConsentPage() {
  return (
    <LegalPage
      title="Informed Consent | Ketcare"
      description="Informed consent for at-home ketamine treatment through Ketcare-affiliated medical practices."
      path="/informed-consent/"
      heading="Client Informed Consent to Treatment"
      lastUpdated="May 2026"
      draft
      content={INFORMED_CONSENT}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
