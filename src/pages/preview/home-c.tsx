import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { Button } from '@/components/ui/Button';
import { CONDITIONS } from '@/lib/conditions';
import { TESTIMONIALS } from '@/lib/testimonials';

/**
 * PREVIEW C — Editorial / research-led.
 * Hero stat + research credentials + all 12 treatment areas + protocol
 * explainer + 3-testimonial strip + CTA.
 * Best for: building authority and credibility for a serious-care positioning.
 */
export default function HomeCPreview() {
  const featuredQuotes = TESTIMONIALS.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Preview C — Editorial | Ketcare"
        description="Editorial / research-led homepage variation"
        path="/preview/home-c/"
        noindex
      />
      <OrganizationSchema />

      {/* Hero */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Pre-launch</p>
          <h1 className="section-display max-w-5xl">
            Some patients respond in <em>hours.</em> Not weeks.
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            Ketamine therapy works through a different mechanism than
            traditional antidepressants — and on a faster timescale. Ketcare
            delivers it at home, under licensed clinical supervision, with the
            integration support that makes change last.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" variant="accent" asChild>
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/research/">See the research</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research credentials strip */}
      <section className="border-y border-border bg-secondary/50 py-12">
        <div className="container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold tracking-tight">25+ years</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                of clinical research on ketamine for depression, starting with
                Berman et al. (2000)
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight">
                Hours, not weeks
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                to onset of antidepressant effect, vs. 4–8 weeks for
                traditional SSRIs
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight">FDA-approved</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                for treatment-resistant depression (esketamine) since 2019,
                validating the mechanism
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All 12 treatment areas */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">Treatment areas</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The 12 areas{' '}
              <em className="font-serif font-normal italic">we treat.</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {CONDITIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/why-ketcare/${c.slug}/`}
                className="group flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 transition hover:border-primary hover:shadow-sm"
              >
                <span className="font-medium tracking-tight">{c.name}</span>
                <ArrowRight
                  className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The protocol — 3 steps */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">The protocol</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How treatment works.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step 01
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Intake
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A clinical conversation to confirm fit, review your history,
                and design a protocol around your goals. About an hour.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step 02
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Sessions
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Structured at-home sessions with a licensed clinician available
                throughout. Calm environment. Clear protocol.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step 03
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Integration
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The work between sessions. Where insight becomes change. Never
                optional, never an afterthought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">Reviews</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Stories from{' '}
              <em className="font-serif font-normal italic">our patients.</em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredQuotes.map((t) => (
              <article
                key={t.id}
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
                <blockquote className="line-clamp-5 font-serif italic leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 text-xs text-muted-foreground">
                  {t.firstName} {t.initial} · age {t.age} ·{' '}
                  {t.condition.replace(/-/g, ' ')}
                </footer>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/reviews/"
              className="text-sm font-medium text-primary hover:underline"
            >
              Read all 20 patient reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Ready to begin? <em>Join the waitlist.</em>
          </h2>
          <p className="section-subhead mt-6">
            We&apos;ll notify you the moment Ketcare opens for new patients.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="accent" asChild>
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 3600,
});
