import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

export default function OurStoryPage() {
  return (
    <>
      <SEOHead
        title="Our Story | Ketcare"
        description="Why we built Ketcare — a calmer, better-supported path to at-home ketamine therapy for depression, anxiety, PTSD, and more."
        path="/our-story/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Our Story', path: '/our-story/' },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Our story</p>
          <h1 className="section-display max-w-4xl">
            Mental health care, <em>redesigned for the way change happens.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            We built Ketcare because the choice between under-supported
            telehealth and hyper-clinical IV clinics wasn&apos;t the choice it
            should be.
          </p>
        </div>
      </section>

      {/* Why we built it */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why we built it.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              When we started looking at the at-home ketamine landscape, we
              saw two broad models. On one side: stripped-down telehealth
              that ships you a prescription and hopes you figure out the rest.
              On the other: traditional IV clinics that require travel,
              clinical settings, and rigid protocols.
            </p>
            <p>
              Both miss what the research actually says — that the
              <em> environment around the medicine </em> shapes outcomes as
              much as the medicine itself. Calm settings, clinician
              presence, and structured integration aren&apos;t nice-to-haves.
              They&apos;re what makes ketamine therapy work.
            </p>
            <p>
              Ketcare was built around that finding. At-home convenience.
              Clinical supervision throughout. Real integration support
              between sessions. Designed for adults who want serious care
              that respects their lives.
            </p>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What makes Ketcare different.
          </h2>
          <ul className="mt-10 space-y-6">
            <li>
              <h3 className="text-xl font-semibold tracking-tight">
                Rigorous intake.
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                We turn people away when ketamine isn&apos;t the right next
                step. Being honest about fit is part of how we deliver
                outcomes our patients trust.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold tracking-tight">
                Clinician presence.
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                A licensed clinician is available throughout each session.
                Not a chatbot. Not a recorded protocol. A human paying
                attention.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold tracking-tight">
                Integration that holds.
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                The work between sessions is where insight becomes change.
                Ketcare&apos;s integration program is built into every
                protocol — never an afterthought, never an upsell.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold tracking-tight">
                Outcomes we measure.
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                We track depression, anxiety, and quality-of-life scores
                across treatment, and we publish what we learn. The work has
                to keep working.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* The team — placeholder */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The team.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ketcare is built by a team of licensed psychiatric clinicians,
            integration specialists, operators, and engineers. Profiles and
            credentials publish at launch.
          </p>
          {/* TODO: replace with real team grid + photos when available */}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Want in early? <em>Join the waitlist.</em>
          </h2>
          <p className="section-subhead mt-6">
            We&apos;re opening enrollment carefully. Waitlist members get
            launch notice and early-access pricing.
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
