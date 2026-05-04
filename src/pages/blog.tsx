import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

export default function BlogIndex() {
  return (
    <>
      <SEOHead
        title="Blog | Ketcare"
        description="Evidence-grounded writing on at-home ketamine therapy, mental wellness, and what real change actually requires."
        path="/blog/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
        ]}
      />

      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Blog</p>
          <h1 className="section-display max-w-4xl">
            Articles. <em>Research. Practice.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            Evidence-grounded writing on at-home ketamine therapy, mental
            wellness, and what real change actually requires.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Articles publish at launch.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We&apos;re writing carefully. The first batch covers protocol
            design, integration practice, and the science behind at-home
            ketamine therapy. Join the waitlist to be notified the day we
            publish.
          </p>
          <div className="mt-10 flex justify-center">
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
