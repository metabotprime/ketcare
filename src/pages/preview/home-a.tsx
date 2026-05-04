import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { Button } from '@/components/ui/Button';

/**
 * PREVIEW A — Minimalist.
 * Pre-launch waitlist focus. One headline, one CTA, one trust strip. Done.
 * Best for: getting out of the way and capturing emails.
 */
export default function HomeAPreview() {
  return (
    <>
      <SEOHead
        title="Preview A — Minimalist | Ketcare"
        description="Minimalist waitlist-focused homepage variation"
        path="/preview/home-a/"
        noindex
      />
      <OrganizationSchema />

      {/* Hero */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Coming soon</p>
          <h1 className="section-display max-w-4xl">
            At-home ketamine therapy for{' '}
            <em>depression and mental wellness.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            A calmer path to mental health care, delivered through licensed
            clinicians. Join the waitlist for launch updates and early-access
            opportunities.
          </p>

          <div id="waitlist" className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg" variant="accent" asChild>
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              No spam. Launch updates only.
            </span>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/50 py-12">
        <div className="container max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Built on a foundation of clinical research
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span>Licensed clinicians</span>
            <span aria-hidden="true">•</span>
            <span>Evidence-based protocols</span>
            <span aria-hidden="true">•</span>
            <span>Structured integration support</span>
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
