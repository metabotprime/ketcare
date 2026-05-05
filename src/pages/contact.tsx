import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, AlertTriangle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';

/**
 * Replicates live ketcare.com/contact-us/ structure:
 *   - "Contact Us" hero
 *   - Contact Information / Phone / Email sections
 *   - Crisis disclaimer
 *
 * The new path is /contact/ (renamed from /contact-us/ on live site;
 * a redirect is in next.config.mjs).
 */

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Ketcare | Get in Touch for Support and Inquiries"
        description="Reach out to Ketcare for any questions or support. Find our contact information, including phone and email, to connect with our team."
        path="/contact/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-secondary">
        <div className="container max-w-6xl">
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
            <div>
              <p className="section-eyebrow mb-4">Contact</p>
              <h1 className="section-display max-w-xl">
                Contact <em>us.</em>
              </h1>
              <p className="section-subhead mt-6 max-w-xl">
                Questions about treatment, our approach, or whether Ketcare
                is right for you. We respond personally — usually within
                one business day.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/photos/telehealth-doctor.jpg"
                alt="A clinician on a virtual visit"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <p className="section-eyebrow mb-3">Contact Information</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How to reach us.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-6">
              <Phone
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Phone
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Speak with our team directly during business hours.
              </p>
              <p className="mt-4">
                <a
                  href="tel:+1-800-000-0000"
                  className="font-medium text-primary hover:underline"
                >
                  1-800-000-0000
                </a>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                (Replace with real phone at launch)
              </p>
            </article>

            <article className="rounded-lg border border-border bg-card p-6">
              <Mail
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Email
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For general questions, partnership inquiries, or media.
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
          </div>

          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <MessageCircle
              className="h-6 w-6 text-primary"
              aria-hidden="true"
            />
            <h3 className="mt-4 text-xl font-semibold tracking-tight">
              Live chat
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Click the chat icon in the bottom right corner of any page to
              start a real-time conversation during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Crisis disclaimer */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <aside className="flex gap-4 rounded-lg border border-destructive/30 bg-destructive/5 p-6">
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
