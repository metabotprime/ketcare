import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Truck, Heart, ShieldCheck } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { ReviewSchema } from '@/components/schema/ReviewSchema';
import { Button } from '@/components/ui/Button';
import { TESTIMONIALS } from '@/lib/testimonials';

/**
 * Replicates live ketcare.com/reviews/ structure:
 *   - "Our guiding star" hero
 *   - 3 experience-pillar sections (preparation/integration, delivery,
 *     comfort for results)
 *   - Testimonial grid (we keep our 20 brand-voice stubs; the live site
 *     uses templated "Verified..." reviews that read as auto-generated)
 *   - Review counts by category (Depression, Grief, Anxiety, PTSD,
 *     Appreciation) — matches live category breakdown
 */

const REVIEW_CATEGORIES = [
  { label: 'Depression', count: 50 },
  { label: 'Grief', count: 49 },
  { label: 'Anxiety', count: 49 },
  { label: 'PTSD', count: 48 },
  { label: 'Appreciation', count: 49 },
];

const EXPERIENCE_PILLARS = [
  {
    icon: Heart,
    heading: 'Directed preparation and integration',
    body: 'Every Ketcare program includes structured preparation before sessions and integration coaching afterward. The work between sessions is where insight becomes lasting change.',
  },
  {
    icon: Truck,
    heading: 'All you need delivered directly to you',
    body: 'Ketcare’s tablets and nasal sprays arrive at your door under licensed clinical supervision. No clinic visits, no IV setup, no inconvenience.',
  },
  {
    icon: ShieldCheck,
    heading: 'Profound comfort for impactful results',
    body: 'Sessions take place at home in a setting you control, with a licensed clinician available throughout. The environment around the medicine matters as much as the medicine itself.',
  },
];

export default function ReviewsPage() {
  const reviewSchemaData = TESTIMONIALS.map((t) => ({
    authorName: `${t.firstName} ${t.initial}`,
    body: t.quote,
    rating: t.rating,
    date: t.date,
  }));

  return (
    <>
      <SEOHead
        title="Customer Reviews: Real Experiences with Ketamine Therapy | Ketcare"
        description="Read real customer reviews about ketamine therapy. See how Ketcare’s treatments have helped people overcome anxiety, depression, PTSD, and more."
        path="/reviews/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Reviews', path: '/reviews/' },
        ]}
      />
      <ReviewSchema reviews={reviewSchemaData} />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image
          src="/images/photos/canyon-purple.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" aria-hidden="true" />
        <div className="container relative z-10 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Reviews
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.1] drop-shadow md:text-5xl lg:text-6xl">
            Our guiding star:{' '}
            <em className="font-serif font-normal italic">
              delivering your five-star experience.
            </em>
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-base font-medium text-white/95 drop-shadow">
              4.7/5 from {TESTIMONIALS.length}+ verified patient reviews
            </p>
          </div>
        </div>
      </section>

      {/* 3 experience pillars */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3">
            {EXPERIENCE_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.heading}>
                  <Icon
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 text-xl font-semibold tracking-tight">
                    {p.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category breakdown */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">By condition</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Reviews across treatment areas.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {REVIEW_CATEGORIES.map((c) => (
              <div
                key={c.label}
                className="rounded-lg border border-border bg-card p-5 text-center"
              >
                <p className="text-3xl font-bold text-primary">{c.count}</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial grid */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">Patient stories</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Real people, <em className="font-serif font-normal italic">real outcomes.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    Verified
                  </span>
                </div>
                <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center justify-between gap-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">
                      {t.firstName} {t.initial}
                    </p>
                    <p className="text-muted-foreground">Age {t.age}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium capitalize text-secondary-foreground">
                    {t.condition.replace(/-/g, ' ')}
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Ready to write your story? <em>Join the waitlist.</em>
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 86400,
  };
};
