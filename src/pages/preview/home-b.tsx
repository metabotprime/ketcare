import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { Button } from '@/components/ui/Button';
import { CONDITIONS } from '@/lib/conditions';
import { TESTIMONIALS } from '@/lib/testimonials';

/**
 * PREVIEW B — Substantive teaser.
 * Hero + treatment cards + why-Ketcare features + featured testimonial + CTA.
 * Best for: telling the brand story while still pre-launch.
 */
const FEATURED_SLUGS = [
  'depression',
  'anxiety',
  'ptsd',
  'burnout',
  'grief',
  'habit-change',
];

export default function HomeBPreview() {
  const featured = FEATURED_SLUGS.map((slug) =>
    CONDITIONS.find((c) => c.slug === slug)
  ).filter(
    (c): c is NonNullable<typeof c> => c !== undefined
  );

  const featuredTestimonial = TESTIMONIALS.find((t) => t.id === 'andrew-d');

  return (
    <>
      <SEOHead
        title="Preview B — Substantive | Ketcare"
        description="Substantive teaser homepage variation"
        path="/preview/home-b/"
        noindex
      />
      <OrganizationSchema />

      {/* Hero */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Coming soon</p>
          <h1 className="section-display max-w-4xl">
            At-home ketamine therapy.{' '}
            <em>Designed for the way change happens.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            Licensed clinicians, structured protocols, and integration
            support — built around real lives. Join the waitlist for launch
            updates and early-access pricing.
          </p>
          <div className="mt-10">
            <Button size="lg" variant="accent" asChild>
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What we treat */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">What we treat</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Care for what&apos;s <em className="font-serif font-normal italic">actually keeping you stuck.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <Link
                key={c.slug}
                href={`/why-ketcare/${c.slug}/`}
                className="group rounded-lg border border-border bg-card p-5 transition hover:border-primary"
              >
                <h3 className="font-semibold tracking-tight">{c.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/why-ketcare/"
              className="text-sm font-medium text-primary hover:underline"
            >
              See all 12 treatment areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ketcare */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">Why Ketcare</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Real care.{' '}
              <em className="font-serif font-normal italic">
                Not just a prescription.
              </em>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Rigorous intake.
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We turn people away when ketamine isn&apos;t the right next
                step. Honesty about fit is how we deliver outcomes our
                patients trust.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Clinician presence.
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A licensed clinician is available throughout each session.
                Not a chatbot. Not a recorded protocol. A human paying
                attention.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Integration that holds.
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The work between sessions is where insight becomes change.
                Built in. Never an upsell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      {featuredTestimonial && (
        <section className="section-padding bg-secondary">
          <div className="container max-w-3xl text-center">
            <p className="section-eyebrow mb-4">A patient story</p>
            <blockquote className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 text-sm text-muted-foreground">
              {featuredTestimonial.firstName} {featuredTestimonial.initial}{' '}
              · age {featuredTestimonial.age} · depression
            </footer>
            <div className="mt-8">
              <Link
                href="/reviews/"
                className="text-sm font-medium text-primary hover:underline"
              >
                Read more patient stories →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
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
