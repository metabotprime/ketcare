import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

/**
 * Content ported from live ketcare.com/our-story/. Section structure
 * matches the live site (We're here to help you heal / Our mission is
 * transformation / The Ketcare Team / Supported by research / Experienced
 * and professional team).
 */

export default function OurStoryPage() {
  return (
    <>
      <SEOHead
        title="Our Story | Ketcare"
        description="We are clinicians, technologists, patients, and researchers working together to expand access to evidence-based mental health care, beginning with guided ketamine therapy for anxiety and depression."
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
            We&rsquo;re here to <em>help you heal.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-3xl">
            We are clinicians, technologists, patients, and researchers
            working together to expand access to evidence-based mental
            health care, beginning with guided ketamine therapy for anxiety
            and depression.
          </p>
        </div>
      </section>

      {/* Our mission is transformation */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our mission is transformation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We believe mental health care should meet patients where they
            are — at home, with the support they need, and at a price they
            can sustain. Ketcare combines licensed clinical supervision,
            evidence-based protocols, and structured integration to make
            real, lasting change possible.
          </p>
        </div>
      </section>

      {/* Stat callout */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl text-center">
          <p className="text-6xl font-semibold tracking-tight text-primary md:text-7xl">
            89%
          </p>
          <p className="mt-4 text-xl leading-relaxed text-foreground md:text-2xl">
            of clients reported improvement in their anxiety and depression
            symptoms after 4 sessions
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            From the largest ketamine therapy study to date.
          </p>
        </div>
      </section>

      {/* The Ketcare Team */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="max-w-2xl">
            <p className="section-eyebrow mb-3">The team</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The Ketcare Team.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ketcare is built by a team of licensed psychiatric clinicians,
              integration specialists, operators, and engineers. Profiles
              and credentials publish at launch.
            </p>
          </div>

          {/* TODO: replace with real team grid + photos when assets arrive */}
          <div className="mt-12 rounded-lg border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">
              Team photos and bios will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Are you the next Caregiver? */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Are you the next Caregiver?{' '}
            <em>Discover more about our team.</em>
          </h2>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link
                href="/contact/"
                className="rounded-full border-primary/40 px-8 text-primary"
              >
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Supported by research */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Supported by research.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ketcare&rsquo;s protocols are built on 25+ years of clinical
            research on ketamine for depression and anxiety, starting with
            Berman et al. (2000). Visit our research page to see the
            specific studies that informed how we treat.
          </p>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link
                href="/research/"
                className="rounded-full border-primary/40 px-6 text-primary"
              >
                See the research →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experienced and professional team */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Experienced and professional team.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every Ketcare session is supervised by a licensed clinician.
            Integration coaches are trained in life coaching and
            psychedelic-medicine best practices. We turn people away when
            ketamine isn&rsquo;t the right next step — being honest about
            fit is part of how we deliver outcomes our patients trust.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Want in early? <em>Join the waitlist.</em>
          </h2>
          <p className="section-subhead mt-6">
            We&rsquo;re opening enrollment carefully. Waitlist members get
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
