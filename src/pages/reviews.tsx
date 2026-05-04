import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { ReviewSchema } from '@/components/schema/ReviewSchema';
import { Button } from '@/components/ui/Button';
import { TESTIMONIALS } from '@/lib/testimonials';

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
        title="Patient Reviews | Ketcare"
        description="Real stories from Ketcare patients — depression, anxiety, PTSD, burnout, and more. See how at-home ketamine therapy has helped people like you."
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
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Reviews</p>
          <h1 className="section-display max-w-4xl">
            Our guiding star. <em>The people we serve.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            What our patients say in their own words. Real stories from real
            people, navigating real conditions — depression, anxiety, PTSD,
            burnout, and more.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding">
        <div className="container">
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
                  <span className="sr-only">{t.rating} out of 5 stars</span>
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

      {/* Closing CTA */}
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
