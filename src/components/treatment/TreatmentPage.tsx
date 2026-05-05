import Link from 'next/link';
import { AlertTriangle, Check, Star } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';
import { CONDITIONS, type Condition } from '@/lib/conditions';

/**
 * Shared template for all 12 condition / program pages. The live ketcare.com
 * site uses the same structure on every condition page (only the H1 changes),
 * so per-page data is just identity (in conditions.ts) and the rest of the
 * content is rendered here from shared constants.
 *
 * Live structure:
 *   1. Hero — "Ketcare for [Name]" + program intro
 *   2. Treatment description (shared)
 *   3. 3-step process (shared)
 *   4. Patient testimonial (shared)
 *   5. More programs cross-link
 *   6. Important Safety Information
 *   7. Ketamine Treatment Guidelines
 *   8. Clinical Evidence
 *   9. Why Choose Ketcare?
 */

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Intake & assessment',
    body: 'A clinical conversation to confirm fit, review your medical history, and design a protocol around your specific goals. About an hour.',
  },
  {
    number: '02',
    title: 'At-home sessions',
    body: 'Structured ketamine sessions take place at home in a calm environment you control, with a licensed clinician available throughout each session.',
  },
  {
    number: '03',
    title: 'Integration & support',
    body: 'The work between sessions — where insight becomes change. Continuous clinician check-ins and a dedicated care team available throughout your program.',
  },
];

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

type TreatmentPageProps = {
  condition: Condition;
};

export function TreatmentPage({ condition }: TreatmentPageProps) {
  const path = `/why-ketcare/${condition.slug}/`;
  const otherPrograms = CONDITIONS.filter((c) => c.slug !== condition.slug).slice(0, 5);

  return (
    <>
      <SEOHead
        title={condition.metaTitle}
        description={condition.metaDescription}
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
          <p className="section-eyebrow mb-4">{condition.hero.programLabel}</p>
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

      {/* Treatment description (shared boilerplate) */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What treatment feels like.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ketamine therapy often feels like a light, dreamlike state. The
            treatment produces a calm, reflective, and uplifting experience
            where you can gain new insights into the roots of your anxiety
            and/or depression. Each session typically lasts 45 minutes to 1
            hour, and you can return to your normal activities afterward.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Your sessions take place at home, offering comfort and ease that
            support your healing.
          </p>
        </div>
      </section>

      {/* 3-step process */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">The protocol</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How treatment works.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Step {step.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient testimonial */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <div className="mb-4 flex justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              />
            ))}
          </div>
          <blockquote className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
            &ldquo;I can&rsquo;t believe how much better I felt in only a few
            weeks. My overall quality of life has improved tremendously.&rdquo;
          </blockquote>
          <footer className="mt-6 text-sm text-muted-foreground">
            Ketcare patient
          </footer>
          <div className="mt-6">
            <Link
              href="/reviews/"
              className="text-sm font-medium text-primary hover:underline"
            >
              Read more patient stories →
            </Link>
          </div>
        </div>
      </section>

      {/* More programs */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">More programs</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Other treatment areas.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {otherPrograms.map((c) => (
              <Link
                key={c.slug}
                href={`/why-ketcare/${c.slug}/`}
                className="rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-medium tracking-tight transition hover:border-primary hover:shadow-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Safety Information */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Important Safety Information
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The FDA has noted that at-home use of compounded ketamine may
            carry additional risks due to the absence of an on-site
            healthcare provider to monitor for adverse effects, such as
            sedation or dissociation. Ketcare&rsquo;s protocols are
            carefully designed to reduce the likelihood of side effects or
            adverse events and must be strictly followed. Ketamine should
            only be used as prescribed by the treating clinician.
          </p>

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
        </div>
      </section>

      {/* Ketamine Treatment Guidelines */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ketamine Treatment Guidelines
          </h2>
          <ul className="mt-8 space-y-3">
            {TREATMENT_GUIDELINES.map((g) => (
              <li
                key={g}
                className="flex gap-3 text-base leading-relaxed text-foreground"
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

      {/* Clinical Evidence */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Clinical Evidence
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ketcare&rsquo;s protocols are built on 25+ years of clinical
            research on ketamine for depression and anxiety. In a landmark
            peer-reviewed study, Ketcare delivered significant improvements
            in both anxiety and depression symptoms — at rates exceeding
            traditional talk therapy, SSRI antidepressants, and IV ketamine
            clinics.
          </p>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link
                href="/research/"
                className="rounded-full border-primary/40 px-6 text-primary"
              >
                See the research →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Ketcare? */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">Why Ketcare</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose Ketcare?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                In collaboration with leading experts
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our program was created by pioneers in psychiatry,
                neuroscience, and psychedelic medicine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Clinicians who go further
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our providers contribute medical expertise and genuine
                compassion to their care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Continuous treatment
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Your clinician closely tracks your progress, is available
                for video check-ins during your program, and adjusts your
                care plan as necessary to ensure growth and healing.
              </p>
            </div>
          </div>
        </div>
      </section>

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
