import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { SEOHead } from '@/components/seo/SEOHead';
import {
  LogoOptionA,
  LogoOptionB,
  LogoOptionC,
} from '@/components/brand/LogoOptions';

/**
 * Internal preview page comparing 3 logo direction options.
 * noindex; not in sitemap. Pick one and we'll wire it into Navigation/Footer.
 */

type Spec = {
  id: 'A' | 'B' | 'C';
  title: string;
  vibe: string;
  pros: string[];
  cons: string[];
  Component: typeof LogoOptionA;
};

const SPECS: Spec[] = [
  {
    id: 'A',
    title: 'Refined wordmark',
    vibe: 'Minimalist · type-only · modern fintech',
    pros: [
      'Cleanest at small sizes (header, favicon, mobile)',
      'No icon to compete with the type',
      'Subtle purple dot signals brand without noise',
    ],
    cons: [
      'Loses the medical/health visual cue (no pulse)',
      'Can read as generic without the icon',
    ],
    Component: LogoOptionA,
  },
  {
    id: 'B',
    title: 'Mark + wordmark, modernized',
    vibe: 'Cleaned-up version of current icon · health + tech',
    pros: [
      'Keeps the EKG-pulse identity',
      'Single circle reads cleaner than the current double-ring',
      'Mark works alone as social-avatar/favicon',
    ],
    cons: [
      'More elements competing for attention than A',
      'Stroke-thin graphic can disappear at very small sizes',
    ],
    Component: LogoOptionB,
  },
  {
    id: 'C',
    title: 'Editorial serif accent',
    vibe: 'Premium · wellness · matches section-display headline pattern',
    pros: [
      'Matches the italic-serif accent used in your H1s and headlines',
      'Differentiates from typical clinical/tech health logos',
      'Reads as a thoughtful, considered brand',
    ],
    cons: [
      'Italic serif can feel less "tech" than expected',
      'Two type families to maintain consistently',
    ],
    Component: LogoOptionC,
  },
];

export default function LogoOptionsPage() {
  return (
    <>
      <SEOHead
        title="Logo Options — Internal Preview | Ketcare"
        description="Comparing 3 logo direction options."
        path="/logo-options/"
        noindex
      />

      <section className="section-padding">
        <div className="container max-w-4xl">
          <p className="section-eyebrow mb-4">Internal preview</p>
          <h1 className="section-display">
            Three logo <em>directions.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            All three are SVG/CSS — crisp at any size, recolorable via
            theme tokens, no PNG to pixelate. Compared at three real
            usage sizes (hero / nav / footer-small).
          </p>
        </div>
      </section>

      {/* Existing logo for reference */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-4xl">
          <p className="section-eyebrow mb-4">Current</p>
          <h2 className="text-2xl font-bold tracking-tight">
            Existing wordmark (PNG)
          </h2>
          <div className="mt-8 rounded-lg border border-border bg-card p-12">
            <div className="flex flex-col items-start gap-10">
              <Image
                src="/logo-wordmark.png"
                alt="Current Ketcare wordmark"
                width={1200}
                height={270}
                className="h-20 w-auto"
              />
              <Image
                src="/logo-wordmark.png"
                alt="Current Ketcare wordmark"
                width={1200}
                height={270}
                className="h-10 w-auto"
              />
              <Image
                src="/logo-wordmark.png"
                alt="Current Ketcare wordmark"
                width={1200}
                height={270}
                className="h-6 w-auto"
              />
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            PNG · pixelates above its native size · cannot be recolored
            programmatically without re-export.
          </p>
        </div>
      </section>

      {/* The 3 options */}
      {SPECS.map((spec, i) => {
        const Logo = spec.Component;
        return (
          <section
            key={spec.id}
            className={i % 2 === 0 ? 'section-padding' : 'section-padding bg-secondary'}
          >
            <div className="container max-w-4xl">
              <p className="section-eyebrow mb-4">Option {spec.id}</p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {spec.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {spec.vibe}
              </p>

              <div className="mt-8 rounded-lg border border-border bg-card p-12">
                <div className="flex flex-col items-start gap-10">
                  <Logo height={80} />
                  <Logo height={40} />
                  <Logo height={24} />
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Pros
                  </p>
                  <ul className="mt-3 space-y-2">
                    {spec.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex gap-2 text-sm text-foreground"
                      >
                        <span aria-hidden="true">+</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Trade-offs
                  </p>
                  <ul className="mt-3 space-y-2">
                    {spec.cons.map((con) => (
                      <li
                        key={con}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span aria-hidden="true">−</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* On-dark sanity check */}
      <section className="bg-foreground py-16">
        <div className="container max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
            On dark — quick contrast check
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-background">
            How each looks on the navy neuroplasticity section
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {SPECS.map((spec) => {
              const Logo = spec.Component;
              return (
                <div
                  key={spec.id}
                  className="rounded-lg border border-background/10 bg-foreground p-8 text-background"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
                    Option {spec.id}
                  </p>
                  <div className="mt-4 flex h-16 items-center">
                    <Logo height={40} className="text-background" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Pick one and tell me.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Reply with <strong>A</strong>, <strong>B</strong>, or{' '}
            <strong>C</strong> and I&apos;ll wire that logo into the
            Navigation and Footer components, replacing the current PNG
            wordmark across the site.
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
