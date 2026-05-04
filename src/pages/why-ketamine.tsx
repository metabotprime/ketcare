import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

export default function WhyKetaminePage() {
  return (
    <>
      <SEOHead
        title="Why Ketamine | The Science Behind Modern Mental Health Care"
        description="The science behind ketamine therapy — how it works, why it's different from traditional antidepressants, and what the research actually shows."
        path="/why-ketamine/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Why Ketamine', path: '/why-ketamine/' },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Why ketamine</p>
          <h1 className="section-display max-w-4xl">
            Harness the potential <em>of ketamine.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            For some, ketamine is the first treatment that actually works.
            Here&apos;s what the science shows, what the research has
            established, and where the questions still are.
          </p>
        </div>
      </section>

      {/* The science */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How it works.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ketamine is an NMDA receptor antagonist that acts on the
              glutamate system — the brain&apos;s most abundant
              neurotransmitter system, and the one most directly involved in
              learning, memory, and synaptic plasticity. Standard
              antidepressants act on serotonin and take weeks to show
              effect. Ketamine works on a faster timescale and through a
              different mechanism.
            </p>
            <p>
              At sub-anesthetic doses, ketamine appears to enhance
              neuroplasticity — the brain&apos;s ability to form new
              connections. This creates what researchers call a
              &ldquo;plasticity window,&rdquo; a period of heightened
              capacity for change. Pair that with structured therapeutic
              support and you have the conditions for the kind of shift that
              traditional approaches alone don&apos;t reliably produce.
            </p>
            <p>
              Ketamine&apos;s antidepressant effects can appear within hours
              and peak 24-48 hours after administration. Effects from a
              single dose can last days to weeks. A series of sessions —
              the Ketcare protocol — extends that window into months.
            </p>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why it&apos;s different from traditional antidepressants.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              SSRIs and similar medications work — for many people. But
              they take 4-8 weeks to reach full effect, and roughly a third
              of patients with major depression don&apos;t respond
              adequately to first-line treatments. For that group,
              treatment-resistant depression is a real diagnosis with
              real consequences.
            </p>
            <p>
              Ketamine acts faster, works through a different mechanism, and
              has been shown to help where standard treatments
              haven&apos;t. That doesn&apos;t make it a universal answer.
              It makes it an important option for people who haven&apos;t
              found one yet.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What the research shows.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ketamine&apos;s antidepressant effects were first
              documented in clinical research in 2000 (Berman et al.) and
              have been replicated extensively since. Esketamine — a
              ketamine derivative — received FDA approval in 2019 for
              treatment-resistant depression under the brand Spravato.
            </p>
            <p>
              For at-home ketamine, the literature continues to develop.
              Compounded ketamine (the form prescribed for at-home use under
              FDCA Section 503A) is not FDA-approved for mental health
              indications, which is something we disclose transparently.
              What it is: a treatment with growing real-world evidence,
              prescribed under licensed clinical supervision, and increasingly
              accessible through telehealth models like Ketcare.
            </p>
            <p>
              Visit our{' '}
              <Link
                href="/research/"
                className="text-primary hover:underline"
              >
                research page
              </Link>{' '}
              for the specific studies that informed our protocol.
            </p>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Risks and considerations.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ketamine isn&apos;t for everyone. People with certain
              cardiovascular conditions, active psychotic symptoms, untreated
              hypertension, or specific substance use histories may not be
              candidates. Pregnancy is an exclusion. Our intake screens
              carefully for these factors — see our{' '}
              <Link
                href="/informed-consent/"
                className="text-primary hover:underline"
              >
                informed consent
              </Link>{' '}
              for the full eligibility criteria.
            </p>
            <p>
              At-home administration carries specific considerations: there&apos;s
              no on-site monitoring during sedation or dissociation, which is why
              clinician supervision throughout the session is structural to our
              protocol — not optional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Ready to learn more? <em>Join the waitlist.</em>
          </h2>
          <p className="section-subhead mt-6">
            We&apos;ll send launch updates and information about how to
            qualify for treatment when enrollment opens.
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
