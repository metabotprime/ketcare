import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { ItemListSchema } from '@/components/schema/ItemListSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';
import { CONDITIONS } from '@/lib/conditions';

/**
 * Hub page (/why-ketcare/). Replicates the live ketcare.com page structure:
 * - "Beyond medicine. A supportive community..." hero
 * - "The Ketcare Difference" comparison chart vs talk therapy / SSRIs / IV
 * - "Your dedicated team" — clinicians + integration
 * - Social Media Communities + 24/7 Patient Portal callouts
 * - Community testimonials
 * - Treatment areas grid linking to all 12 condition pages
 */

const COMPARISON_DATA = [
  { label: 'Talk Therapy', percent: 30, baseline: true },
  { label: 'SSRI Antidepressants', percent: 40, baseline: true },
  { label: 'Ketamine Clinics (IV)', percent: 50, baseline: true },
  { label: 'Ketcare', percent: 70, baseline: false },
];

const KETCARE_DIFFERENCE = [
  {
    label: '30% greater than research on talk therapy',
  },
  {
    label: '20% greater than research on SSRI antidepressants',
  },
  {
    label: '33% greater than research on IV ketamine',
  },
];

const COMMUNITY_TESTIMONIALS = [
  {
    quote:
      'I discovered immense joy listening to others in the Ketcare Integration Circles. I experienced a genuine feeling of connection and kindness.',
  },
  {
    quote:
      'The Ketcare Community enhances an already amazing program. I’m taking full advantage of all the available resources to maximize this experience, and it’s truly proving to be worth it.',
  },
];

export default function WhyKetcareHub() {
  return (
    <>
      <SEOHead
        title="Why Ketcare | Beyond Medicine. A Complete Care Network."
        description="A supportive community and complete care network that transforms lives. Ketcare delivers ketamine therapy at home with clinical supervision and community support."
        path="/why-ketcare/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Why Ketcare', path: '/why-ketcare/' },
        ]}
      />
      <ItemListSchema
        name="Treatment Areas"
        items={CONDITIONS.map((c) => ({
          name: c.name,
          url: `/why-ketcare/${c.slug}/`,
        }))}
      />

      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Why Ketcare</p>
          <h1 className="section-display max-w-4xl">
            Beyond medicine. <em>A supportive community and complete care network that transforms lives.</em>
          </h1>
          <div className="mt-10">
            <Button size="lg" variant="accent" asChild>
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Ketcare Difference — comparison chart */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">The Ketcare Difference</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Percentage of patients with{' '}
              <em className="font-serif font-normal italic">&gt;50% decrease</em> in
              depression symptoms.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              In a landmark peer-reviewed study of ketamine therapy, Ketcare
              delivered significant improvements in anxiety and depression.
              The study results were reported as:
            </p>
          </div>

          {/* Comparison bar chart */}
          <div className="space-y-4">
            {COMPARISON_DATA.map((d) => (
              <div key={d.label}>
                <div className="mb-1 flex items-baseline justify-between">
                  <span
                    className={
                      d.baseline
                        ? 'text-sm font-medium text-muted-foreground'
                        : 'text-sm font-bold text-primary'
                    }
                  >
                    {d.label}
                  </span>
                  <span
                    className={
                      d.baseline
                        ? 'text-sm font-medium text-muted-foreground'
                        : 'text-base font-bold text-primary'
                    }
                  >
                    {d.percent}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div
                    className={
                      d.baseline ? 'h-full bg-muted-foreground/40' : 'h-full bg-primary'
                    }
                    style={{ width: `${d.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Difference callouts */}
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {KETCARE_DIFFERENCE.map((d) => (
              <li
                key={d.label}
                className="rounded-lg border border-border bg-card p-5 text-center"
              >
                <p className="text-base font-medium text-foreground">
                  {d.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Your dedicated team */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">Your dedicated team</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              From delivery to every session, our team is here for you at every step.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                In collaboration with leading experts
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our program was created by pioneers in psychiatry,
                neuroscience, and psychedelic medicine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Clinicians who go further
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our providers contribute medical expertise and genuine
                compassion to their care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Continuous treatment
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Your clinician closely tracks your progress, is available
                for video check-ins during your program, and adjusts your
                care plan as necessary to ensure growth and healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community / Patient Portal */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                Social Media Communities
              </h3>
              <p className="mt-2 text-base text-primary">
                Connect and grow together.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Join a fresh movement for mental wellness. Be part of a
                supportive community uplifting one another to heal and
                thrive. With Ketcare, home-based therapy never feels lonely.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                24/7 Patient Portal
              </h3>
              <p className="mt-2 text-base text-primary">
                Always in touch with your care team.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Access your protocol, communicate with your clinician, and
                track your progress through a secure portal designed around
                your care.
              </p>
            </article>
          </div>

          {/* Community testimonials */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {COMMUNITY_TESTIMONIALS.map((t) => (
              <article
                key={t.quote}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-3 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="font-serif italic leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment areas grid */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">Treatment areas</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What we treat.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/why-ketcare/${c.slug}/`}
                className="group rounded-lg border border-border bg-card p-6 transition hover:border-primary hover:shadow-md"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                  {c.metaDescription}
                </p>
                <p className="mt-4 text-sm font-medium text-primary group-hover:underline">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 86400,
  };
};
