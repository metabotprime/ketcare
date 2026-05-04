import type { GetStaticProps } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { PRIVACY_POLICY } from '@/lib/legal-content';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy | Ketcare"
      description="Ketcare's privacy policy — how we collect, use, and protect your personal information."
      path="/privacy-policy/"
      heading="Privacy Policy"
      lastUpdated="May 2026"
      draft
      content={PRIVACY_POLICY}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
