import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';

type Study = {
  citation: string;
  title: string;
  takeaway: string;
  url?: string;
};

const FOUNDATIONAL_STUDIES: Study[] = [
  {
    citation: 'Berman et al., 2000',
    title:
      'Antidepressant effects of ketamine in depressed patients',
    takeaway:
      'The first controlled study showing ketamine produces rapid antidepressant effects within hours, contrasting with the weeks-long timeline of SSRIs.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/10686270/',
  },
  {
    citation: 'Zarate et al., 2006',
    title:
      'A randomized trial of an N-methyl-D-aspartate antagonist in treatment-resistant major depression',
    takeaway:
      'Replicated and extended Berman&apos;s findings: a single ketamine dose produced significant antidepressant response in treatment-resistant patients within hours, sustained for up to a week.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16894061/',
  },
  {
    citation: 'Murrough et al., 2013',
    title:
      'Antidepressant efficacy of ketamine in treatment-resistant major depression: a two-site randomized controlled trial',
    takeaway:
      'Larger multi-site trial confirming ketamine&apos;s antidepressant efficacy in treatment-resistant depression at 24 hours and beyond.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23982301/',
  },
  {
    citation: 'Wilkinson et al., 2018',
    title:
      'The effect of a single dose of intravenous ketamine on suicidal ideation: a systematic review and individual participant data meta-analysis',
    takeaway:
      'Pooled analysis showing rapid reduction in suicidal ideation following ketamine administration, independent of overall depression response.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29202576/',
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

export default function ResearchPage() {
  return (
    <>
      <SEOHead
        title="Research | The Science Behind Ketcare's Approach"
        description="The clinical research that informs Ketcare's at-home ketamine therapy protocol. Foundational studies, outcomes we track, and our approach to evidence."
        path="/research/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research/' },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Research</p>
          <h1 className="section-display max-w-4xl">
            Evidence we trust. <em>Outcomes we measure.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            The science behind Ketcare&apos;s approach — the foundational
            studies that shaped the protocol, the outcomes we track, and
            how we&apos;ll keep contributing to the evidence base.
          </p>
        </div>
      </section>

      {/* Foundational studies */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Foundational research.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The five studies below shaped how we think about ketamine for
            mental health. They aren&apos;t the only relevant research —
            but they&apos;re the ones we keep coming back to.
          </p>

          <ul className="mt-12 space-y-8">
            {FOUNDATIONAL_STUDIES.map((s) => (
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
                <p
                  className="mt-3 text-base leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: s.takeaway }}
                />
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View on PubMed
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes we track */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Outcomes we track.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Validated clinical instruments at intake, mid-protocol, and
            post-protocol. Patient-reported outcomes alongside clinician
            assessment. Long-term follow-up to track durability of effect.
          </p>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">PHQ-9</strong> — depression
              severity, weekly during treatment
            </li>
            <li>
              <strong className="text-foreground">GAD-7</strong> — anxiety
              severity, weekly during treatment
            </li>
            <li>
              <strong className="text-foreground">PCL-5</strong> — for PTSD
              treatment plans, alongside trauma-informed assessment
            </li>
            <li>
              <strong className="text-foreground">WHO-5</strong> — overall
              well-being and quality-of-life signal
            </li>
            <li>
              <strong className="text-foreground">Patient-reported function</strong>{' '}
              — work, relationships, and daily-life capacity
            </li>
          </ul>
        </div>
      </section>

      {/* Our commitment */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What we&apos;ll publish.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ketcare is committed to publishing aggregate outcome data once
              we have a meaningful sample. We don&apos;t need to wait for a
              perfect study to share what the work is producing — but we do
              need enough data for the numbers to mean something.
            </p>
            <p>
              Compounded ketamine for mental health remains an area where
              real-world evidence is still being built. Contributing to that
              evidence base is part of our responsibility as a provider, not
              an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="section-display">
            Curious how this fits your situation? <em>Join the waitlist.</em>
          </h2>
          <p className="section-subhead mt-6">
            Waitlist members get full intake access the moment we open.
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
