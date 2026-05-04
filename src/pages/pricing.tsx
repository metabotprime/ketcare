import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

const LAUNCH_INCLUDES = [
  'Full program pricing — sessions, intake, integration, all included',
  'Superbill availability for out-of-network insurance reimbursement',
  'HSA / FSA eligibility',
  'Payment terms and financing options',
  'Transparent refund policy',
];

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing | Ketcare"
        description="Pricing for Ketcare's at-home ketamine therapy. Pre-launch — complete plan details revealed when enrollment opens."
        path="/pricing/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing/' },
        ]}
      />

      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Pricing</p>
          <h1 className="section-display max-w-4xl">
            Real care. <em>Honestly priced.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            We&apos;re finalizing pricing ahead of launch. Join the waitlist
            to receive complete plan details and early-access pricing the
            moment we open.
          </p>
          <div className="mt-10">
            <Button size="lg" variant="accent" asChild>
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What we&apos;ll publish at launch
          </h2>
          <ul className="mt-10 space-y-4">
            {LAUNCH_INCLUDES.map((item) => (
              <li key={item} className="flex gap-3">
                <Check
                  className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-lg leading-relaxed text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-base leading-relaxed text-muted-foreground">
            We&apos;re committed to transparent, no-surprise pricing. No
            upsell pressure. No hidden fees. The price you see is the price
            you pay.
          </p>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
