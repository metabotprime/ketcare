import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { ExternalLink, Check } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

/**
 * Replicates live ketcare.com/research/ structure: large stat hero,
 * comparison chart vs Talk Therapy / SSRIs / Ketamine Clinics, study
 * summaries, plus the shared safety / guidelines / clinical evidence /
 * why choose Ketcare footer sections.
 */

const COMPARISON_DATA = [
  { label: 'Psychotherapy', percent: 30, baseline: true },
  { label: 'SSRI Antidepressants', percent: 40, baseline: true },
  { label: 'Ketamine Clinics (IV)', percent: 50, baseline: true },
  { label: 'Ketcare', percent: 70, baseline: false },
];

const STUDIES = [
  {
    citation: 'Berman et al., 2000',
    title: 'Antidepressant effects of ketamine in depressed patients',
    takeaway:
      'The first controlled study showing ketamine produces rapid antidepressant effects within hours, contrasting with the weeks-long timeline of SSRIs.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/10686270/',
  },
  {
    citation: 'Zarate et al., 2006',
    title:
      'A randomized trial of an N-methyl-D-aspartate antagonist in treatment-resistant major depression',
    takeaway:
      'Replicated and extended Berman’s findings: a single ketamine dose produced significant antidepressant response in treatment-resistant patients within hours, sustained for up to a week.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16894061/',
  },
  {
    citation: 'Murrough et al., 2013',
    title:
      'Antidepressant efficacy of ketamine in treatment-resistant major depression: a two-site randomized controlled trial',
    takeaway:
      'Larger multi-site trial confirming ketamine’s antidepressant efficacy in treatment-resistant depression at 24 hours and beyond.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23982301/',
  },
  {
    citation: 'Daly et al., 2019',
    title:
      'Efficacy and safety of intranasal esketamine adjunctive to oral antidepressant therapy in treatment-resistant depression',
    takeaway:
      'Pivotal trial supporting FDA approval of esketamine (Spravato) for treatment-resistant depression — establishing the regulatory pathway for ketamine-class compounds.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29282469/',
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

const TREATMENT_GUIDELINES = [
  'Do not drive or operate heavy machinery until after a full night’s sleep following treatment.',
  'Avoid benzodiazepines or stimulants for 24 hours before treatment.',
  'Continue taking prescribed antihypertensive medications.',
  'Do not take ketamine while hungover or with alcohol.',
  'Avoid solid foods for 3 hours and liquids for 1 hour before treatment.',
  'Always have a peer treatment monitor physically present during ketamine treatment.',
];

export default function ResearchPage() {
  return (
    <>
      <SEOHead
        title="Research | The Science Behind Ketcare's Approach"
        description="The two largest studies of ketamine therapy tracked outcomes from over 10,000 Ketcare clients. See the foundational research behind our protocol."
        path="/research/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research/' },
        ]}
      />

      {/* Hero — large stat */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Research</p>
          <h1 className="section-display max-w-4xl">
            The two largest studies of ketamine therapy{' '}
            <em>tracked outcomes from over 10,000 Ketcare clients.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            In a landmark peer-reviewed study, Ketcare delivered significant
            improvements in anxiety and depression — at rates exceeding
            traditional psychotherapy, SSRI antidepressants, and IV
            ketamine clinics.
          </p>
        </div>
      </section>

      {/* Comparison chart */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow mb-3">The Ketcare Difference</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Percent of patients with{' '}
              <em className="font-serif font-normal italic">
                &gt;50% reduction
              </em>{' '}
              of depression symptoms.
            </h2>
          </div>

          <div className="space-y-4">
            {COMPARISON_DATA.map((d) => (
              <div key={d.label}>
                <div className="mb-1 flex items-baseline justify-between">
                  <span
                    className={
                      d.baseline
                        ? 'text-sm font-medium text-muted-foreground'
                        : 'text-sm font-bold text-primary'
                    }
                  >
                    {d.label}
                  </span>
                  <span
                    className={
                      d.baseline
                        ? 'text-sm font-medium text-muted-foreground'
                        : 'text-base font-bold text-primary'
                    }
                  >
                    {d.percent}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <div
                    className={
                      d.baseline ? 'h-full bg-muted-foreground/40' : 'h-full bg-primary'
                    }
                    style={{ width: `${d.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study summaries */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <div className="mb-12 max-w-2xl">
            <p className="section-eyebrow mb-3">The literature</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Foundational research.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Ketcare’s protocols are built on 25+ years of clinical
              research on ketamine for depression and anxiety, including
              real-world studies showing rapid symptom improvement within
              one day, lasting effects of 3–7 days from a single dose, and
              FDA approval for treatment-resistant depression.
            </p>
          </div>

          <ul className="mt-8 space-y-6">
            {STUDIES.map((s) => (
              <li
                key={s.citation}
                className="rounded-lg border border-border bg-card p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {s.citation}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {s.takeaway}
                </p>
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View on PubMed
                    <ExternalLink
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
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
            sedation or dissociation. Ketcare’s protocols are carefully
            designed to reduce the likelihood of side effects or adverse
            events and must be strictly followed.
          </p>

          <h3 className="mt-10 text-xl font-semibold tracking-tight">
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
          <p className="mt-6">
            <Link
              href="/informed-consent/"
              className="text-sm font-medium text-primary hover:underline"
            >
              Read the full informed consent →
            </Link>
          </p>
        </div>
      </section>

      {/* Treatment Guidelines */}
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Curious how this fits your situation? <em>Join the waitlist.</em>
          </h2>
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
