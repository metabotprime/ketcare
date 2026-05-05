import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Plus } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { FAQSchema } from '@/components/schema/FAQSchema';
import { Button } from '@/components/ui/Button';

/**
 * Treatments / Pricing page.
 *
 * Replaces the previous pricing page with the live ketcare.com treatments
 * design: two product cards (Nasal Spray + Lozenges), "What's included"
 * 5-item list, insurance logo grid, CTA + rating, and FAQs.
 */

const PRODUCTS = [
  {
    name: 'Nasal Spray',
    description: 'Intranasal ketamine therapy',
    price: '$600',
    priceDetail: 'for the 6-session program',
    href: '/#waitlist',
    image: '/images/product/nasal-spray.png',
  },
  {
    name: 'Lozenges',
    description: 'Sublingual ketamine therapy',
    price: '$600',
    priceDetail: 'for the 6-session program',
    href: '/#waitlist',
    image: '/images/product/lozenges-pack.png',
  },
];

const INCLUDED = [
  {
    image: '/images/photos/eyemask-session.jpg',
    title: '6 Ketcare sessions',
    body: 'Inclusive of medicine doses and available programs to support your transformation.',
  },
  {
    image: '/images/photos/telehealth-doctor.jpg',
    title: 'Clinician consults',
    body: "We'll ensure you're making progress and adjust your care plan if needed.",
  },
  {
    image: '/images/photos/woman-palms-peaceful.jpg',
    title: 'Personalized care',
    body: 'We offer Tablet and Injectable treatments to enable meaningful therapeutic experiences.',
  },
  {
    image: '/images/photos/woman-couch-phone.jpg',
    title: '24/7 Patient Portal — always in touch with your care team',
    body: 'Whether you need quick answers or ongoing support, our 24/7 patient portal provides a seamless way to communicate with your doctor and support team. This dedicated platform ensures you have a reliable and welcoming space to address your needs at any time, day or night.',
  },
  {
    image: '/images/photos/hikers-mountain.jpg',
    title: 'Your Personal Session Guide (Optional)',
    body: 'Not essential, but perfect if you want that extra layer of support — for a modest additional fee, our expert guides become your dedicated companions, offering tailored prep for every session, seamless integration into your routine, and ongoing encouragement to help you shine with confidence.',
  },
];

const INSURANCE_LOGOS = [
  'Anthem',
  'Aetna',
  'United Healthcare',
  'Cigna',
  'Kaiser Permanente',
  'Elevance Health',
];

const FAQS = [
  {
    q: 'Is there a price difference between Nasal and Tablets?',
    a: "No. Both Ketcare Nasal Spray (intranasal) and Ketcare Lozenges (sublingual) are $600 for the complete 6-session program — same clinical supervision, same integration support, same price.",
  },
  {
    q: 'Is Ketcare covered by insurance?',
    a: 'Ketcare does not accept insurance directly at this time. However, after your first virtual visit, we provide a superbill (an itemized invoice) you can submit to your insurer for potential out-of-network reimbursement. Many of our clients have successfully been reimbursed by insurers including Anthem, Aetna, United Healthcare, Cigna, Kaiser Permanente, and Elevance Health.',
  },
  {
    q: 'Does my HSA/FSA cover Ketcare treatment?',
    a: 'As some Ketcare treatment services may be considered qualified expenses, it is often possible to use HSA or FSA funds. Try using your card during checkout. If your card is not accepted, contact us about alternative reimbursement options.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Ketamine is unique among mental health treatments in that effects can appear within hours and often peak 24 to 48 hours after a session. Many clients notice meaningful improvement within the first few sessions of the 6-session program, with sustained progress over the course of a complete program.',
  },
  {
    q: 'Is it required for my sessions to be administered with a peer monitor?',
    a: 'Yes. For your safety, every Ketcare session requires a peer treatment monitor to be physically present with you during administration. This is a non-negotiable part of our protocol and is in line with FDA-recommended at-home treatment guidelines.',
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <SEOHead
        title="Ketcare Treatments | At-Home Ketamine Therapy"
        description="Compare Ketcare's Nasal Spray and Lozenge ketamine treatments. See what's included, insurance reimbursement options, and answers to common questions."
        path="/pricing/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Treatments', path: '/pricing/' },
        ]}
      />
      <FAQSchema items={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Treatment options — two product cards */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-between gap-4">
            <p className="section-eyebrow">Treatments</p>
            <Link
              href="/compare/"
              className="text-sm font-medium text-primary hover:underline"
            >
              Compare Ketcare to other providers →
            </Link>
          </div>
          <h1 className="section-display mt-4 max-w-4xl">
            Choose your <em>treatment.</em>
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <article
                key={p.name}
                className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a1645] via-[#5a2785] to-[#1a0a30] p-6 text-white"
              >
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-xs text-white/70">{p.description}</p>
                <p className="mt-4 text-3xl font-bold text-white">{p.price}</p>
                <p className="text-xs text-white/70">{p.priceDetail}</p>

                <div className="absolute inset-x-0 bottom-16 top-28 flex items-center justify-center">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                  <Link
                    href={p.href}
                    className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-black/80"
                  >
                    Get Started
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included? */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            What&apos;s included?
          </h2>

          <ul className="mt-12 space-y-8">
            {INCLUDED.map((item) => (
              <li key={item.title} className="flex gap-5">
                <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted md:h-20 md:w-28">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 96px, 112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insurance reimbursement */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Save through reimbursements with these insurers and many more.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {INSURANCE_LOGOS.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-md bg-card px-4 text-center text-sm font-semibold tracking-tight text-muted-foreground"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Logo placeholders — Anthem, Aetna, United Healthcare, Cigna, Kaiser Permanente, Elevance Health. Real logos will replace these on launch.
          </p>
        </div>
      </section>

      {/* CTA — Am I a candidate */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Experience fast, life-changing relief with guided at-home ketamine therapy.
              </h2>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">
                  4.7/5 rating with 200+ reviews
                </p>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Ketcare comprehensive, science-backed programs are designed to
                amplify and sustain your healing. Ongoing clinical care,
                coaching, content, and community make all the difference.
              </p>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact/" className="rounded-full px-8">
                    Am I a candidate
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/photos/wellness-water.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            FAQs
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-border bg-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                  <span>{faq.q}</span>
                  <Plus
                    className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
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
