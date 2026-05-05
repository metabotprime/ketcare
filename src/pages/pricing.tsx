import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

/**
 * Replicates live ketcare.com/pricing/:
 *   - "Transformations that won't cost a fortune" hero
 *   - Tablet vs Injectable treatments
 *   - 24/7 patient portal
 *   - 4.7/5 rating with 200+ reviews
 *   - Pricing FAQs (cost is same regardless of medication, insurance,
 *     HSA/FSA acceptance)
 *   - Insurance highlights: Save with insurance, Use HSA/FSA, No hidden fees
 */

const PRICING_HIGHLIGHTS = [
  {
    title: 'Save using insurance',
    body: 'Ketcare does not accept insurance directly, but after your first virtual visit we provide a superbill — an itemized invoice — you can submit to your insurer for potential out-of-network reimbursement.',
  },
  {
    title: 'Use your HSA/FSA',
    body: 'Some Ketcare treatment services may qualify as eligible expenses. Try using your HSA or FSA card during checkout. If your card isn’t accepted, contact us about reimbursement options.',
  },
  {
    title: 'No hidden fees',
    body: 'The price you see is the price you pay. No surprise add-ons, no upsell pressure. Sessions, intake, integration coaching, clinician support — all included.',
  },
];

const FAQS = [
  {
    q: 'Are tablets and injectables priced differently?',
    a: 'No. The cost of Ketcare treatment is the same regardless of medication type — whether you receive Ketcare Tablets (sublingual) or Ketcare Nasal (intranasal).',
  },
  {
    q: 'Does Ketcare accept insurance?',
    a: 'Ketcare does not accept insurance at this time. However, some clients are able to get reimbursed by their insurance provider. After your first virtual visit, we can provide you with a superbill (an itemized invoice) that you can submit. If you would like to check with your insurer about possible out-of-network benefits before treatment, we encourage you to do so.',
  },
  {
    q: 'Can I use my HSA or FSA?',
    a: 'As some Ketcare treatment services could be considered qualified expenses, it may be possible to utilize HSAs or FSAs to pay for treatment. To determine if these services are covered, try and utilize these cards during the checkout process. If you’re unable to make a payment with your HSA or FSA card, contact us to discuss alternative reimbursement.',
  },
];

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Ketamine Therapy Pricing | Ketcare"
        description="Affordable, transparent pricing for at-home ketamine therapy. Save with insurance reimbursement, HSA/FSA, and no hidden fees."
        path="/pricing/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing/' },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Pricing</p>
          <h1 className="section-display max-w-4xl">
            Transformations that{' '}
            <em>won&apos;t cost a fortune.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            We offer Tablet and Injectable treatments to enable meaningful
            therapeutic experiences — at a price designed to be sustainable
            for the long term.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-foreground">
              4.7/5 with 200+ reviews
            </p>
          </div>
        </div>
      </section>

      {/* Two product offerings */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">Treatment options</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Two routes,{' '}
              <em className="font-serif font-normal italic">same price.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Sublingual
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Ketcare Tablets
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Sublingual ketamine treatment dissolved under the tongue.
                Discreet, precisely dosed, and prescribed under licensed
                clinical supervision.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Intranasal
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Ketcare Nasal
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Intranasal ketamine treatment for faster onset. Same
                clinical supervision and integration support, different
                delivery method.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Comprehensive program */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            More than a prescription.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ketcare comprehensive, science-backed programs are designed to
            amplify and sustain your healing. Ongoing clinical care,
            coaching, content, and community make all the difference.
          </p>

          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold tracking-tight">
              24/7 patient portal
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Whether you need quick answers or ongoing support, our 24/7
              patient portal provides a seamless way to communicate with
              your doctor and support team. This dedicated platform ensures
              you have a reliable and welcoming space to address your needs
              at any time, day or night.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing highlights */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">How to save</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Save through reimbursements with these insurers and many more.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRICING_HIGHLIGHTS.map((h) => (
              <article
                key={h.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <Check
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {h.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {h.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">FAQs</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Frequently asked questions.
            </h2>
          </div>
          <dl className="space-y-6">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-lg border border-border bg-card p-6"
              >
                <dt className="text-lg font-semibold tracking-tight">
                  {faq.q}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Ready to begin? <em>Join the waitlist.</em>
          </h2>
          <p className="section-subhead mt-6">
            We&apos;ll notify you the moment Ketcare opens for new patients.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="accent" asChild>
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
