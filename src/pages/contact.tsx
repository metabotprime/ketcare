import type { GetStaticProps } from 'next';
import { Mail, MessageCircle, AlertTriangle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact | Ketcare"
        description="Get in touch with Ketcare. Questions about treatment, our approach, or whether Ketcare is right for you — we respond personally."
        path="/contact/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ]}
      />

      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Contact</p>
          <h1 className="section-display max-w-4xl">
            Talk to us. <em>We&apos;re listening.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            Questions about treatment, our approach, or whether Ketcare is
            right for you. We respond personally — usually within one
            business day.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-6">
              <Mail
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                Email us
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                General questions, partnership inquiries, media requests.
              </p>
              <p className="mt-4">
                <a
                  href="mailto:hello@ketcare.com"
                  className="font-medium text-primary hover:underline"
                >
                  hello@ketcare.com
                </a>
              </p>
            </article>

            <article className="rounded-lg border border-border bg-card p-6">
              <MessageCircle
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                Live chat
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Real-time questions during business hours.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Click the chat icon in the bottom right.
              </p>
            </article>
          </div>

          <aside className="mt-12 flex gap-4 rounded-lg border border-destructive/30 bg-destructive/5 p-6">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-semibold text-foreground">In a crisis?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ketcare is not an emergency service. If you or someone you
                know is in crisis, call or text{' '}
                <strong className="text-foreground">988</strong> (US Suicide
                &amp; Crisis Lifeline) or go to your nearest emergency room.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
