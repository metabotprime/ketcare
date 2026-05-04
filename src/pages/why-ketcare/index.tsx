import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { ItemListSchema } from '@/components/schema/ItemListSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';
import { CONDITIONS } from '@/lib/conditions';

export default function WhyKetcareHub() {
  return (
    <>
      <SEOHead
        title="Treatment Areas: Anxiety, Depression, PTSD & More"
        description="Ketcare offers at-home ketamine therapy for depression, anxiety, PTSD, burnout, grief, and more — under licensed clinical supervision."
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
            Beyond medicine. <em>A complete care network.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            We support patients through anxiety, depression, PTSD, and more —
            combining licensed clinicians, structured protocols, and a calmer
            environment for healing.
          </p>
          <div className="mt-10">
            <Button size="lg" variant="accent" asChild>
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Treatment grid */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">Treatment areas</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What we treat.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/why-ketcare/${c.slug}/`}
                className="group rounded-lg border border-border bg-card p-6 transition hover:border-primary hover:shadow-md"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {c.description}
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
