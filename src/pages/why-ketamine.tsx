import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle, Check } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

/**
 * Content ported from live ketcare.com/why-ketamine/. Sections, headings,
 * lists, and testimonials match the live site. Layout uses our component
 * vocabulary; visuals will tighten once real photos arrive.
 */

const SIDE_EFFECTS = [
  'Altered perception of time',
  'Dry mouth',
  'Elevated intraocular or intracranial pressure',
  'Loss of appetite',
  'Confusion',
  'Nausea or vomiting',
  'Blurred vision',
  'Slurred speech',
];

const CONTRAINDICATIONS = [
  'Allergic to ketamine',
  'Symptoms of psychosis or mania',
  'Uncontrolled high blood pressure',
  'Congestive heart failure or other serious heart conditions',
  'Severe respiratory issues',
  'History of elevated intraocular or intracranial pressure',
  'History of hyperthyroidism',
  'Other serious medical conditions',
  'Pregnant, nursing, or planning to become pregnant',
];

const TREATMENT_GUIDELINES = [
  'Do not drive or operate heavy machinery until after a full night’s sleep following treatment.',
  'Avoid benzodiazepines or stimulants for 24 hours before treatment.',
  'Continue taking prescribed antihypertensive medications.',
  'Do not take ketamine while hungover or with alcohol.',
  'Avoid solid foods for 3 hours and liquids for 1 hour before treatment.',
  'Always have a peer treatment monitor physically present during ketamine treatment.',
];

const TESTIMONIALS = [
  {
    name: 'Brenna',
    role: 'Writer',
    quote:
      'Ketcare gave me a clearer perspective on anxiety, depression, and life itself.',
    section: 'Fresh perspective',
  },
  {
    name: 'Jeff',
    role: 'IT Business Owner',
    quote:
      'The relief I felt was unlike anything I’d experienced from years of conventional treatment.',
    section: 'Sense of relief',
  },
  {
    name: 'Deborah',
    role: 'Student',
    quote: 'I’ve transformed my harmful thoughts into positive ones.',
    section: 'Gentle experience',
  },
  {
    name: 'Sarah',
    role: '',
    quote:
      'Ketcare helped establish a foundation I needed to prevent me from spiraling and feeling lost.',
    section: '',
  },
  {
    name: 'Andrew',
    role: 'Financial Advisor',
    quote: '',
    section: '',
  },
];

const CONDITIONS_WE_TREAT = [
  { label: 'Overcome Anxiety', href: '/why-ketcare/anxiety/' },
  { label: 'Relieve Depression', href: '/why-ketcare/depression/' },
  { label: 'Heal PTSD', href: '/why-ketcare/ptsd/' },
  {
    label: 'Break Free from Feeling Stuck',
    href: '/why-ketcare/getting-unstuck/',
  },
  { label: 'Rewire Habits', href: '/why-ketcare/habit-change/' },
];

export default function WhyKetaminePage() {
  return (
    <>
      <SEOHead
        title="Why Ketamine | Harness the Potential of Ketamine"
        description="Ketamine is a revolutionary treatment that can quickly alleviate anxiety, depression, and related conditions. Learn how it works at Ketcare."
        path="/why-ketamine/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Why Ketamine', path: '/why-ketamine/' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0420] py-20 text-white md:py-28">
        <Image
          src="/images/photos/neurons-purple.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0420]/95 via-[#0a0420]/70 to-transparent" aria-hidden="true" />
        <div className="container relative z-10 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            Why Ketamine
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.1] md:text-5xl lg:text-6xl">
            Harness the potential{' '}
            <em className="font-serif font-normal italic">of ketamine.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Ketamine is a revolutionary treatment for the mind. It can
            quickly—sometimes within an hour or two—alleviate the
            effects of anxiety, depression, and related conditions.
          </p>
        </div>
      </section>

      {/* How does it function */}
      <section className="section-padding">
        <div className="container max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How does it function?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Ketamine therapy enables fresh perspectives that can assist
                us in processing and moving beyond pain. Unlike traditional
                antidepressants which act on serotonin and take weeks to
                show effect, ketamine acts on the glutamate system and
                works on a faster timescale, opening a window of
                neuroplasticity in which real change becomes possible.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/photos/lying-down-purple.jpg"
                alt="A guided ketamine session"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient experiences / testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">Patient experiences</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Stories from <em className="font-serif font-normal italic">our patients.</em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.filter((t) => t.quote).map((t) => (
              <article
                key={t.name}
                className="rounded-lg border border-border bg-card p-6"
              >
                {t.section && (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {t.section}
                  </p>
                )}
                <blockquote className="mt-3 font-serif text-lg italic leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 text-sm text-muted-foreground">
                  {t.name}
                  {t.role && `, ${t.role}`}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important Safety Information */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="grid items-start gap-10 md:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Important Safety Information
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The FDA has noted that at-home use of compounded ketamine may
                carry additional risks due to the absence of an on-site
                healthcare provider to monitor for adverse effects, such as
                sedation or dissociation. Ketcare&apos;s protocols are
                carefully designed to reduce the likelihood of side effects
                or adverse events and must be strictly followed. Ketamine
                should only be used as prescribed by the treating clinician.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/photos/pills-journal.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            Possible side effects include:
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SIDE_EFFECTS.map((s) => (
              <li
                key={s}
                className="flex gap-2 text-base text-muted-foreground"
              >
                <span aria-hidden="true">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 flex items-center gap-2 text-xl font-semibold tracking-tight">
            <AlertTriangle
              className="h-5 w-5 text-destructive"
              aria-hidden="true"
            />
            Who should avoid ketamine treatment
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Do not proceed with ketamine treatment if any of the following
            apply:
          </p>
          <ul className="mt-4 space-y-2">
            {CONTRAINDICATIONS.map((c) => (
              <li
                key={c}
                className="flex gap-2 text-base text-muted-foreground"
              >
                <span aria-hidden="true">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            Treatment guidelines
          </h3>
          <ul className="mt-4 space-y-3">
            {TREATMENT_GUIDELINES.map((g) => (
              <li
                key={g}
                className="flex gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <Check
                  className="mt-1 h-4 w-4 flex-shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conditions we treat */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">Conditions we treat</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How Ketcare can help.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_WE_TREAT.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="group rounded-lg border border-border bg-card p-5 transition hover:border-primary"
              >
                <p className="font-semibold tracking-tight text-foreground">
                  {c.label}
                </p>
                <p className="mt-2 text-sm text-primary group-hover:underline">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ketcare Offerings (products) */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">Ketcare offerings</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Two routes of treatment.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Sublingual
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Ketcare Tablets
              </h3>
              <div className="relative mt-6 h-48">
                <Image
                  src="/images/product/lozenges-pack.png"
                  alt="Ketcare lozenges"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Sublingual ketamine treatment dissolved under the tongue.
                Discreet, precisely dosed, and prescribed under licensed
                clinical supervision.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Intranasal
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Ketcare Nasal
              </h3>
              <div className="relative mt-6 h-48">
                <Image
                  src="/images/product/nasal-spray.png"
                  alt="Ketcare nasal spray"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Intranasal ketamine treatment for faster onset. Same
                clinical supervision and integration support, different
                delivery method.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Ready to learn more? <em>Join the waitlist.</em>
          </h2>
          <p className="section-subhead mt-6">
            We’ll notify you the moment Ketcare opens for new patients.
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

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
