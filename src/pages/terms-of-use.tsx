import type { GetStaticProps } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { TERMS_OF_USE } from '@/lib/legal-content';

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use | Ketcare"
      description="The terms governing your use of the Ketcare website and services."
      path="/terms-of-use/"
      heading="Terms of Use"
      lastUpdated="May 2026"
      draft
      content={TERMS_OF_USE}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
