import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Plus } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { Button } from '@/components/ui/Button';

const FEATURES = [
  {
    image: '/wp-content/uploads/2025/09/c1.png',
    text: 'Home-based ease, savings, and comfort',
  },
  {
    image: '/wp-content/uploads/2025/09/man-2.png',
    text: 'A support network beyond medicine alone',
  },
  {
    image:
      '/wp-content/uploads/2025/09/Gemini_Generated_Image_a6vzuaa6vzuaa6vz.png',
    text: 'Clinician-trusted neuroplasticity therapy designed to restore your mind',
  },
  {
    image: '/wp-content/uploads/2025/09/featured-image-1760544496309.png',
    text: 'Leading U.S. provider supported by scientific research',
  },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="At-Home Ketamine Therapy for Depression, Anxiety, and PTSD"
        description="Find rapid, transformative relief for anxiety, depression, and PTSD through guided in-home ketamine care. Licensed clinicians, evidence-based protocols, structured integration support."
        path="/"
      />
      <OrganizationSchema />

      {/* HERO — full-bleed, nav floats on top from the Layout */}
      <section className="relative min-h-[680px] overflow-hidden md:min-h-[760px]">
        {/* Background — purple gradient placeholder for the lavender-field
            iStock video. Swap to <video> + poster once the .mov is transcoded. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#cdb8e3] via-[#9a72c4] to-[#3d1d6b]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.18),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-[680px] flex-col md:min-h-[760px]">
          {/* Spacer for floating nav */}
          <div className="h-24" aria-hidden="true" />

          {/* Centered title */}
          <div className="container flex flex-1 items-center justify-center text-center">
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] text-white drop-shadow md:text-5xl lg:text-6xl">
              Psychedelic therapy has arrived
            </h1>
          </div>

          {/* Bottom row: subhead (left) + stat card (right) */}
          <div className="container grid grid-cols-1 items-end gap-8 pb-12 md:grid-cols-2 md:pb-16">
            <p className="max-w-md text-base leading-relaxed text-white drop-shadow md:text-lg">
              Find rapid, transformative relief for anxiety, depression, and
              PTSD through guided in-home ketamine care.
            </p>

            <div className="rounded-xl bg-black/30 p-6 backdrop-blur-md md:ml-auto md:w-auto">
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-semibold text-white md:text-5xl">
                  8,178
                </p>
                <p className="text-sm text-white/80">Conducted sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION + FEATURE LIST */}
      <section className="section-padding">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Traditional therapy and daily medication fail. You deserve the
              modern approach in mental wellness.
            </h2>
            <h2 className="mt-10 text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Ketamine treatment proves quicker, safer, better.
            </h2>

            <div className="mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="/why-ketcare/"
                  className="rounded-full border-primary/40 px-8 text-primary"
                >
                  How our program works
                </Link>
              </Button>
            </div>

            <details className="group mt-6">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <Plus
                  className="h-4 w-4 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
                Safety information
              </summary>
              <div className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                <p>
                  Ketamine therapy is not right for everyone. Our intake
                  screens for cardiovascular, psychiatric, and substance-use
                  conditions that may make ketamine inappropriate. Pregnant or
                  nursing patients are excluded. At-home administration carries
                  risks beyond clinical-setting administration; clinician
                  supervision is structural to our protocol.
                </p>
                <p className="mt-3">
                  <Link
                    href="/informed-consent/"
                    className="font-medium text-primary hover:underline"
                  >
                    Read the full informed consent →
                  </Link>
                </p>
              </div>
            </details>
          </div>

          {/* Right column — feature rows */}
          <div>
            {FEATURES.map((feature, i) => (
              <div
                key={feature.text}
                className={`flex items-center gap-5 py-6 ${
                  i > 0 ? 'border-t border-border' : ''
                }`}
              >
                <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted md:h-20 md:w-28">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 96px, 112px"
                    className="object-cover"
                  />
                </div>
                <p className="text-base font-medium leading-snug text-foreground md:text-lg">
                  {feature.text}
                </p>
                <ChevronRight
                  className="ml-auto hidden h-5 w-5 flex-shrink-0 text-muted-foreground md:block"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};
