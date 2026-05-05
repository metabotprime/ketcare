import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import type { LegalContent } from '@/lib/legal-content';

type LegalPageProps = {
  title: string;
  description: string;
  path: string;
  /** Display title used in the H1 and breadcrumb */
  heading: string;
  /** Display string, e.g. "May 2026" */
  lastUpdated: string;
  /** Show banner that content is still under counsel review. */
  draft?: boolean;
  /** Mixed content: paragraph strings, { heading } blocks, or { bullets } blocks. */
  content: LegalContent[];
};

/**
 * Shared layout for all legal pages: privacy, terms, informed consent, and
 * consumer health data privacy. Renders mixed content (paragraphs, headings,
 * bullet lists) under the Tailwind Typography plugin so the document feels
 * like a real long-form policy rather than a wall of text.
 */
export function LegalPage({
  title,
  description,
  path,
  heading,
  lastUpdated,
  draft = false,
  content,
}: LegalPageProps) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: heading, path },
        ]}
      />

      {/* Header */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <p className="section-eyebrow mb-4">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {heading}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          {draft && (
            <p className="mt-6 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
              <strong>Draft.</strong> This document is being finalized with
              our legal counsel. The text below reflects our current
              operating model, but final wording may change before launch.
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-foreground prose-li:text-foreground">
            {content.map((item, i) => {
              if (typeof item === 'string') {
                return <p key={i}>{item}</p>;
              }
              if ('heading' in item) {
                return <h2 key={i}>{item.heading}</h2>;
              }
              if ('bullets' in item) {
                return (
                  <ul key={i}>
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </article>

          <aside className="mt-16 rounded-lg border border-border bg-secondary p-6 text-sm">
            <p className="font-medium">Need to reach us about this?</p>
            <p className="mt-2 text-muted-foreground">
              Email{' '}
              <a
                href="mailto:care@ketcare.com"
                className="text-primary hover:underline"
              >
                care@ketcare.com
              </a>{' '}
              or visit{' '}
              <Link
                href="/contact/"
                className="text-primary hover:underline"
              >
                our contact page
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
