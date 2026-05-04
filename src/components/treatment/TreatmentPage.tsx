import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';
import type { Condition } from '@/lib/conditions';

type TreatmentPageProps = {
  condition: Condition;
};

export function TreatmentPage({ condition }: TreatmentPageProps) {
  const path = `/why-ketcare/${condition.slug}/`;

  return (
    <>
      <SEOHead
        title={condition.title}
        description={condition.description}
        path={path}
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Why Ketcare', path: '/why-ketcare/' },
          { name: condition.name, path },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">{condition.hero.eyebrow}</p>
          <h1
            className="section-display max-w-4xl"
            dangerouslySetInnerHTML={{ __html: condition.hero.headline }}
          />
          <p className="section-subhead mt-6 max-w-2xl">
            {condition.hero.subhead}
          </p>
          <div className="mt-10">
            <Button size="lg" variant="accent" asChild>
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Body sections */}
      {condition.sections.map((section, i) => (
        <section
          key={i}
          className={`section-padding ${i % 2 === 1 ? 'bg-secondary' : ''}`}
        >
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {section.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </div>
        </section>
      ))}

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
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
