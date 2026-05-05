import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { Check, Minus, ExternalLink } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { FAQSchema } from '@/components/schema/FAQSchema';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * Provider comparison page. Cited prices and program details are public
 * facts gathered from each provider's published pricing page on the date
 * shown in LAST_REVIEWED. Pricing changes — re-verify before publishing
 * each major update.
 */

const LAST_REVIEWED = '2026-05-05';
const LAST_REVIEWED_DISPLAY = 'May 5, 2026';

type Provider = {
  name: string;
  homepage: string;
  starting: string;
  starterProgram: string;
  formats: string;
  insurance: 'Yes' | 'Superbill only' | 'No';
  hsaFsa: boolean;
  states: string;
  modelType: string;
  support247: 'Yes' | 'Business hours' | 'Unspecified';
};

const PROVIDERS: Provider[] = [
  {
    name: 'Ketcare',
    homepage: '/',
    starting: '$129',
    starterProgram: 'per session · 6-session program $774',
    formats: 'Nasal spray + Lozenges',
    insurance: 'Superbill only',
    hsaFsa: true,
    states: 'Waitlist (rolling state launches)',
    modelType: 'Episode of care',
    support247: 'Yes',
  },
  {
    name: 'Mindbloom',
    homepage: 'https://www.mindbloom.com',
    starting: '$1,290',
    starterProgram: '6-session new-client program',
    formats: 'Lozenges + Injectables',
    insurance: 'Superbill only',
    hsaFsa: true,
    states: '30+',
    modelType: 'Episode of care',
    support247: 'Unspecified',
  },
  {
    name: 'Innerwell',
    homepage: 'https://helloinnerwell.com',
    starting: '$998',
    starterProgram: '8-dose Foundation Plan (self-pay)',
    formats: 'Lozenges',
    insurance: 'Yes',
    hsaFsa: true,
    states: '34+',
    modelType: 'Episode of care',
    support247: 'Unspecified',
  },
  {
    name: 'Joyous',
    homepage: 'https://joyous.team',
    starting: '$129/mo',
    starterProgram: 'Monthly subscription, daily microdose',
    formats: 'Sublingual microdose',
    insurance: 'No',
    hsaFsa: true,
    states: '29',
    modelType: 'Daily microdose subscription',
    support247: 'Business hours',
  },
  {
    name: 'Better U',
    homepage: 'https://www.betterucare.com',
    starting: '$500',
    starterProgram: '5-session Introduction package',
    formats: 'Oral / sublingual',
    insurance: 'No',
    hsaFsa: false,
    states: '30+',
    modelType: 'Episode of care',
    support247: 'Yes',
  },
];

const PROVIDER_DETAIL: Record<string, { positioning: string; whoItsFor: string; tradeoff: string }> = {
  Mindbloom: {
    positioning:
      'The largest at-home provider by patient volume. New-client tier prices in line with the boutique end of the market; volume discounts kick in at the 12- and 18-session tiers.',
    whoItsFor:
      'Patients who want the most established brand in the category, expect a longer arc of treatment, and have flexibility on price.',
    tradeoff:
      'Highest entry price among the providers we compare here. Lozenges + injectables only — no nasal spray.',
  },
  Innerwell: {
    positioning:
      'The only one of these providers that takes commercial insurance directly in select states (Aetna, Anthem, Cigna, BlueCross BlueShield, UnitedHealthcare, Optum). Self-pay tier is mid-market.',
    whoItsFor:
      'Patients in CA, NY, and other in-network states who want to use insurance benefits to lower out-of-pocket cost. Roughly half-price with insurance vs self-pay.',
    tradeoff:
      'Insurance acceptance varies by state and plan; eligibility and final cost only confirm after intake. Lozenges only — no nasal spray.',
  },
  Joyous: {
    positioning:
      'A different model entirely — daily low-dose ("microdose") sublingual ketamine on a flat monthly subscription, rather than a defined number of guided sessions.',
    whoItsFor:
      'Patients who want a continuous, ambient treatment they can take alongside their day rather than dedicated sit-down sessions, and who prefer a low monthly commitment to a one-time program cost.',
    tradeoff:
      'The microdose model is less studied in randomized trials than session-based dosing. Care-team support is published as weekday business hours (9am–5pm PT), not 24/7. Not a fit for patients seeking the higher-dose, dissociative session experience the standard protocols are built around.',
  },
  'Better U': {
    positioning:
      'Aggressive entry pricing and a "Brain Box" of physical session aids (BP cuff, eye mask, journal) shipped at intake. Multiple package sizes from 5 to 27 sessions.',
    whoItsFor:
      'Patients prioritizing low up-front cost on a short program, or wanting a long extended program at the lowest per-session rate.',
    tradeoff:
      'Oral ketamine only. Integration coaching is included but lighter than at the higher-priced providers.',
  },
};

const FAQS = [
  {
    q: 'Why $129 per session and $774 for the 6-session program?',
    a: 'Per-session pricing matches how the clinical literature studies ketamine for depression and anxiety — Berman 2000 forward, the rapid antidepressant effect plateaus and consolidates over a series of administrations rather than after a single dose, with 6 sessions as the standard protocol unit. Pricing each session at $129 ($774 for the full 6-session program) keeps a complete episode of care under $800 without forcing a long-term subscription commitment, and undercuts the established premium provider in the category by roughly 40%.',
  },
  {
    q: 'Does Ketcare accept insurance?',
    a: 'Not directly. After your first virtual visit we provide a superbill (an itemized invoice) that you can submit to your insurer for potential out-of-network reimbursement. HSA and FSA cards may be used for qualified expenses. If in-network coverage is the deciding factor for you, Innerwell is currently the only provider in this comparison that accepts commercial insurance in some states.',
  },
  {
    q: 'Why offer both nasal spray and lozenges?',
    a: 'Different patients respond to different routes of administration. Nasal spray onset is faster (typically within 10–15 minutes); lozenges build more gradually but are easier to dose-adjust between sessions. Mindbloom pairs lozenges with subcutaneous injectables; Innerwell, Better U, and Joyous offer lozenges or sublingual only. Ketcare is, as of the date above, the only at-home provider in this comparison offering both nasal spray and sublingual lozenges at the same per-session price.',
  },
  {
    q: 'What is included in Ketcare’s $774 program?',
    a: '6 supervised at-home sessions at $129 each ($774 total), intake and dosing visits with a licensed psychiatric clinician, structured integration coaching between sessions, and 24/7 patient-portal messaging with the care team. No required upgrade tiers or guide-coaching add-ons — the standard program is the complete program.',
  },
  {
    q: 'How current is this comparison?',
    a: `Pricing and feature data was last verified on ${LAST_REVIEWED_DISPLAY} from each provider’s public pricing page. At-home ketamine is a fast-moving category — providers change pricing, add formats, and expand into new states regularly. Verify directly with the provider before making a decision.`,
  },
];

const STARTING_PRICE_NOTE = `All starting prices reflect each provider’s lowest published self-pay program for new patients as of ${LAST_REVIEWED_DISPLAY}.`;

export default function ComparePage() {
  return (
    <>
      <SEOHead
        title="Ketcare vs Mindbloom, Innerwell, Joyous & Better U | At-Home Ketamine Compared"
        description="A side-by-side comparison of at-home ketamine therapy providers — pricing, treatment formats, insurance acceptance, state availability. Updated May 2026."
        path="/compare/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Compare', path: '/compare/' },
        ]}
      />
      <FAQSchema items={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Hero */}
      <section className="bg-secondary">
        <div className="container max-w-5xl py-16 md:py-20">
          <p className="section-eyebrow mb-4">Compare</p>
          <h1 className="section-display max-w-4xl">
            How Ketcare compares to other{' '}
            <em>at-home ketamine providers.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-3xl">
            A direct, fact-based comparison of the five most-discussed
            at-home ketamine providers in the United States. We pulled
            pricing, treatment formats, insurance acceptance, and state
            availability from each provider&rsquo;s public pricing page on
            the date below.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Last reviewed{' '}
            <time dateTime={LAST_REVIEWED} className="font-medium text-foreground">
              {LAST_REVIEWED_DISPLAY}
            </time>
          </p>
        </div>
      </section>

      {/* TL;DR — direct-answer block for AI Overviews */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            The short version
          </h2>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-foreground md:text-lg">
            <li className="flex gap-3">
              <span className="font-semibold text-primary">Per-session pricing:</span>
              <span>Ketcare is $129 per session ($774 for the 6-session program) — about 40% under Mindbloom’s $215 new-client rate, and 19% under Mindbloom’s $159 returning rate. Better U starts lower at $100/session in 5-pack packages.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">Insurance accepted:</span>
              <span>Innerwell only, in select states. The other four (Ketcare included) are self-pay with superbill or HSA/FSA support.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">Most format options:</span>
              <span>Ketcare is the only provider in this list offering both nasal spray and sublingual lozenges at the same price. Mindbloom pairs lozenges with subcutaneous injectables.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">Different model:</span>
              <span>Joyous is a daily microdose subscription ($129/month) rather than an episode-of-care program — a distinct treatment philosophy, not a like-for-like comparison.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">Round-the-clock support:</span>
              <span>Ketcare and Better U publish 24/7 patient-portal access. Joyous publishes weekday business-hours support. Mindbloom and Innerwell don&rsquo;t state a published 24/7 commitment.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Side-by-side comparison
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {STARTING_PRICE_NOTE}
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="sticky left-0 bg-background p-4 text-left font-semibold tracking-tight" scope="col">
                    Provider
                  </th>
                  <th className="p-4 text-left font-semibold tracking-tight" scope="col">
                    Starting price
                  </th>
                  <th className="p-4 text-left font-semibold tracking-tight" scope="col">
                    Formats
                  </th>
                  <th className="p-4 text-left font-semibold tracking-tight" scope="col">
                    Insurance
                  </th>
                  <th className="p-4 text-left font-semibold tracking-tight" scope="col">
                    HSA/FSA
                  </th>
                  <th className="p-4 text-left font-semibold tracking-tight" scope="col">
                    24/7 portal
                  </th>
                  <th className="p-4 text-left font-semibold tracking-tight" scope="col">
                    States
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROVIDERS.map((p) => (
                  <tr
                    key={p.name}
                    className={cn(
                      'border-b border-border',
                      p.name === 'Ketcare' ? 'bg-primary/5' : 'bg-background'
                    )}
                  >
                    <th
                      className={cn(
                        'sticky left-0 p-4 text-left font-semibold tracking-tight',
                        p.name === 'Ketcare' ? 'bg-primary/5 text-primary' : 'bg-background text-foreground'
                      )}
                      scope="row"
                    >
                      {p.homepage.startsWith('/') ? (
                        p.name
                      ) : (
                        <a
                          href={p.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          {p.name}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </th>
                    <td className="p-4 align-top">
                      <p className="font-medium text-foreground">{p.starting}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{p.starterProgram}</p>
                    </td>
                    <td className="p-4 align-top text-muted-foreground">{p.formats}</td>
                    <td className="p-4 align-top text-muted-foreground">{p.insurance}</td>
                    <td className="p-4 align-top">
                      {p.hsaFsa ? (
                        <Check className="h-5 w-5 text-primary" aria-label="Yes" />
                      ) : (
                        <Minus className="h-5 w-5 text-muted-foreground" aria-label="No" />
                      )}
                    </td>
                    <td className="p-4 align-top text-muted-foreground">{p.support247}</td>
                    <td className="p-4 align-top text-muted-foreground">{p.states}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Per-provider deep dives */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Provider-by-provider
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We picked the four providers most often raised in patient research
            against Ketcare. There are several other at-home programs in the
            market (Wondermed, Nue Life, others); we&rsquo;ll add them as we
            verify current pricing.
          </p>

          <div className="mt-12 space-y-12">
            {PROVIDERS.filter((p) => p.name !== 'Ketcare').map((p) => {
              const detail = PROVIDER_DETAIL[p.name];
              return (
                <article key={p.name} className="border-l-2 border-primary/30 pl-6">
                  <header className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      <a
                        href={p.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-primary hover:underline"
                      >
                        {p.name}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      from <span className="font-medium text-foreground">{p.starting}</span>
                    </p>
                  </header>
                  <p className="mt-4 text-base leading-relaxed text-foreground">
                    {detail.positioning}
                  </p>
                  <dl className="mt-6 grid grid-cols-1 gap-y-3 text-sm md:grid-cols-[140px,1fr]">
                    <dt className="font-semibold tracking-tight text-foreground">Best fit for</dt>
                    <dd className="text-muted-foreground">{detail.whoItsFor}</dd>
                    <dt className="font-semibold tracking-tight text-foreground">Trade-off</dt>
                    <dd className="text-muted-foreground">{detail.tradeoff}</dd>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Honest positioning — when Ketcare is/isn't the right fit */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            When Ketcare is the right fit — and when it isn&rsquo;t
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-primary/30 bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Choose Ketcare if
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground md:text-base">
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>You want premium clinical care at roughly 40% under Mindbloom — $129 per session, $774 for the standard 6-session program.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>You want the choice between nasal spray and sublingual lozenge formats.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>You prefer a defined episode of care over an open-ended subscription.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>You can self-pay or use HSA/FSA, and don&rsquo;t need in-network insurance.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>You want 24/7 patient-portal access to your care team, not weekday business-hours support.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Look elsewhere if
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground md:text-base">
                <li className="flex gap-3">
                  <Minus className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span>
                    You need in-network insurance coverage —{' '}
                    <a href="https://helloinnerwell.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Innerwell
                    </a>{' '}
                    is the only provider here that accepts commercial plans.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Minus className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span>
                    You want a daily microdose model rather than discrete sessions —{' '}
                    <a href="https://joyous.team" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Joyous
                    </a>{' '}
                    is built around that.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Minus className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span>
                    You specifically want subcutaneous injectable ketamine —{' '}
                    <a href="https://www.mindbloom.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Mindbloom
                    </a>{' '}
                    offers it; Ketcare doesn&rsquo;t.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Minus className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span>
                    You live in a state Ketcare hasn&rsquo;t opened yet — we&rsquo;re launching by waitlist;{' '}
                    <Link href="/#waitlist" className="text-primary hover:underline">
                      add your state to be notified
                    </Link>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-border bg-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                  <span>{faq.q}</span>
                  <span
                    className="ml-2 inline-block h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3d1d6b] via-[#5a2785] to-[#2a134a] py-20 text-white md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Ready to start with Ketcare?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Join the waitlist to be notified the moment Ketcare opens for
            new patients in your state. Early-access pricing on the
            6-session program.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="accent" asChild>
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
          <p className="mt-8 text-xs text-white/60">
            This page is intended for informational comparison only and
            should not be construed as medical advice. Final treatment
            decisions should be made with a licensed clinician.
          </p>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400,
});
