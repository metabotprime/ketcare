import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Plus, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { FAQSchema } from '@/components/schema/FAQSchema';
import { Button } from '@/components/ui/Button';
import { WaitlistForm } from '@/components/waitlist/WaitlistForm';

const FEATURES = [
  {
    image: '/images/photos/woman-couch-phone.jpg',
    text: 'Home-based ease, savings, and comfort',
  },
  {
    image: '/images/photos/hikers-mountain.jpg',
    text: 'A support network beyond medicine alone',
  },
  {
    image: '/images/photos/neurons-purple.jpg',
    text: 'Clinician-trusted neuroplasticity therapy designed to restore your mind',
  },
  {
    image: '/images/photos/mountain-sunset.jpg',
    text: 'Leading U.S. provider supported by scientific research',
  },
];

const STUDY_LOGOS = [
  { src: '/wp-content/uploads/2025/09/66bb3c03ce7cd30a4f46f2eb_maps.png', alt: 'MAPS' },
  { src: '/wp-content/uploads/2025/09/66bb3c020bbccacf3858feca_nyu.png', alt: 'NYU' },
  { src: '/wp-content/uploads/2025/09/66bb3c039bdaadc915bbab9f_cleveland.png', alt: 'Cleveland Clinic' },
  { src: '/wp-content/uploads/2025/09/66bb3c0299ef748c590fa821_ucsf.png', alt: 'UCSF' },
  { src: '/wp-content/uploads/2025/09/66bb3c022201394e7f6d3e28_hopkins.png', alt: 'Johns Hopkins' },
];

const STATS = [
  { value: '91%', label: 'noted progress in their depression and anxiety symptoms' },
  { value: '94%', label: 'experienced zero side effects' },
  { value: '86%', label: 'showed major improvements sustained progress or recovered through' },
];

const TESTIMONIALS = [
  {
    name: 'Kayleigh',
    role: '',
    avatar: '/wp-content/uploads/2025/09/woman1.png',
    quote:
      'How I feel today is a thousand times better than when I began. I’ve gone through experiences I never imagined were possible.',
  },
  {
    name: 'Seth',
    role: 'Emergency Responder',
    avatar: '/wp-content/uploads/2025/09/man-2.png',
    quote:
      'My PTSD and depression symptoms have disappeared. I truly love my life. For so long I didn’t, and now this is an incredible new feeling.',
  },
  {
    name: 'Dewell',
    role: 'Wood Specialist',
    avatar: '/wp-content/uploads/2025/09/c1.png',
    quote:
      'Ketcare has been completely worth it. The ketamine treatments have reduced my anxiety noticeably.',
  },
];

const PROGRAM_CARDS = [
  {
    label: 'Habit Change',
    href: '/why-ketcare/habit-change/',
    image: '/wp-content/uploads/2025/09/Screenshot-2025-09-23-at-10.59.24-PM.png',
  },
  {
    label: 'Ketcare 101',
    href: '/why-ketcare/ketcare101/',
    image: '/wp-content/uploads/2025/09/featured-image-1761958741031.png',
  },
  {
    label: 'Anxiety',
    href: '/why-ketcare/anxiety/',
    image: '/wp-content/uploads/2025/09/featured-image-1761232426325.png',
  },
  {
    label: 'Depression',
    href: '/why-ketcare/depression/',
    image: '/wp-content/uploads/2025/09/man-2.png',
  },
  {
    label: 'PTSD',
    href: '/why-ketcare/ptsd/',
    image: '/wp-content/uploads/2025/09/featured-image-1761236702586.png',
  },
];

const FAQS = [
  {
    q: 'Who is eligible for Ketcare treatment?',
    a: 'Ketcare is for adults 18 and older. During your clinical intake, our licensed clinicians review your medical history and assessment responses to confirm fit. Patients with certain cardiovascular, psychiatric, or substance-use conditions, or who are pregnant or nursing, are excluded. See our informed consent for full eligibility criteria.',
  },
  {
    q: 'What is the ketamine experience like?',
    a: 'Ketamine therapy often feels like a light, dreamlike state. The treatment produces a calm, reflective, and uplifting experience where you can gain new insights into the roots of your anxiety and/or depression. Each session typically lasts 45 minutes to 1 hour.',
  },
  {
    q: 'Who directs my therapy?',
    a: 'A licensed psychiatric clinician affiliated with Ketcare directs your treatment plan and supervises every session. Integration coaches trained in psychedelic-medicine best practices support you between sessions.',
  },
  {
    q: 'Does Ketcare support insurance along with HSA/FSA?',
    a: 'Ketcare does not accept insurance directly, but we provide a superbill (itemized invoice) after your first virtual visit that you can submit to your insurer for potential out-of-network reimbursement. HSA and FSA cards may also be used for qualified expenses.',
  },
  {
    q: 'How does ketamine function?',
    a: 'Ketamine is an NMDA receptor antagonist that acts on the glutamate system — the brain’s most abundant neurotransmitter system. At sub-anesthetic doses, it appears to enhance neuroplasticity, creating a window of heightened capacity for change.',
  },
  {
    q: 'How is my Ketcare dosage determined?',
    a: 'Your clinician tailors an initial dosing protocol based on your medical history, treatment goals, and how you respond to early sessions. Dosage is adjusted throughout your program as needed.',
  },
  {
    q: 'How quickly can you notice treatment results?',
    a: 'Ketamine’s antidepressant and anxiolytic effects can appear within hours and peak 24–48 hours after administration. Effects from a single dose can last days to weeks; a series of sessions extends benefits for weeks to months.',
  },
];

const ARTICLES = [
  {
    title: 'Navigating Ketamine Nasal Spray for Home Use: A Comprehensive Guide',
    href: '/navigating-ketamine-nasal-spray-for-home-use-a-comprehensive-guide/',
    category: 'Wellbeing',
    image: '/wp-content/uploads/2025/09/featured-image-1761232426325.png',
    excerpt: 'Navigate ketamine nasal spray home use for severe depression or anxiety.',
    date: 'November 1, 2025',
  },
  {
    title: 'Navigating At-Home Ketamine Nasal Spray for Depression Treatment',
    href: '/navigating-at-home-ketamine-nasal-spray-for-depression-treatment/',
    category: 'Depression',
    image: '/wp-content/uploads/2025/09/featured-image-1761236702586.png',
    excerpt: 'Explore ketamine nasal spray for home depression treatment. Understand safety,',
    date: 'October 24, 2025',
  },
  {
    title: 'Navigating At-Home Ketamine Therapy: Safety & Best Practices',
    href: '/navigating-at-home-ketamine-therapy-safety-best-practices/',
    category: 'Wellbeing',
    image: '/wp-content/uploads/2025/09/featured-image-1761237162391.png',
    excerpt: 'Explore at-home ketamine safety. Learn expert guidelines, protocols, and how',
    date: 'October 23, 2025',
  },
  {
    title: 'Navigating Telemedicine Ketamine: A Comprehensive Guide to Remote Treatment',
    href: '/navigating-telemedicine-ketamine-a-comprehensive-guide-to-remote-treatment/',
    category: 'Wellbeing',
    image: '/wp-content/uploads/2025/09/featured-image-1761239402901.png',
    excerpt: 'Explore telemedicine ketamine sessions for mental health. Learn about benefits,',
    date: 'October 23, 2025',
  },
  {
    title: 'Navigating At-Home Ketamine Therapy for Chronic Pain Relief',
    href: '/navigating-at-home-ketamine-therapy-for-chronic-pain-relief/',
    category: 'Wellbeing',
    image: '/wp-content/uploads/2025/09/featured-image-1761239987854.png',
    excerpt: 'Explore at-home ketamine for chronic pain relief. Learn about benefits,',
    date: 'October 23, 2025',
  },
  {
    title: 'Navigating At-Home Ketamine Therapy for Chronic Pain Relief',
    href: '/navigating-at-home-ketamine-therapy-for-chronic-pain-relief-2/',
    category: 'Wellbeing',
    image: '/wp-content/uploads/2025/09/featured-image-1761276189374.png',
    excerpt: 'Explore at-home ketamine for chronic pain relief. Learn about benefits,',
    date: 'October 23, 2025',
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
      <FAQSchema items={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden md:min-h-[760px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/photos/hero-lavender-poster.jpg"
          aria-hidden="true"
        >
          <source src="/images/video/hero-lavender.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-[#3d1d6b]/70"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.12),transparent_70%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[680px] flex-col md:min-h-[760px]">
          <div className="h-24" aria-hidden="true" />
          <div className="container flex flex-1 items-center justify-center text-center">
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] text-white drop-shadow md:text-5xl lg:text-6xl">
              Psychedelic therapy has arrived
            </h1>
          </div>
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

      {/* PROBLEM + 4 FEATURES */}
      <section className="section-padding">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
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
                  conditions that may make ketamine inappropriate. Pregnant
                  or nursing patients are excluded.
                </p>
                <p className="mt-3">
                  <Link href="/informed-consent/" className="font-medium text-primary hover:underline">
                    Read the full informed consent →
                  </Link>
                </p>
              </div>
            </details>
          </div>
          <div>
            {FEATURES.map((feature, i) => (
              <div
                key={feature.text}
                className={`flex items-center gap-5 py-6 ${i > 0 ? 'border-t border-border' : ''}`}
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

      {/* PRODUCTS */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="relative overflow-hidden rounded-xl p-8 text-white md:col-span-1">
              <Image
                src="/images/photos/woman-palms-peaceful.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e]/85 via-[#3d1d6b]/80 to-[#0a0510]/90" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Transformative at-home experience.
                </h3>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  Premium guidance.
                </p>
                <p className="mt-8 text-sm text-white/70">
                  Learn why 44% of clients choose Intranasal →
                </p>
              </div>
            </article>
            <article className="rounded-xl border border-border bg-card p-8">
              <p className="text-sm font-semibold tracking-tight">Nasal Spray</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Intranasal ketamine therapy
              </p>
              <div className="relative mt-8 h-48">
                <Image
                  src="/images/product/nasal-spray.png"
                  alt="Ketcare nasal spray"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </article>
            <article className="rounded-xl border border-border bg-card p-8">
              <p className="text-sm font-semibold tracking-tight">Lozenges</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Sublingual ketamine therapy
              </p>
              <div className="relative mt-8 h-48">
                <Image
                  src="/images/product/lozenges-pack.png"
                  alt="Ketcare lozenges"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STUDIES + INSTITUTION LOGOS */}
      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                We conduct studies so you don&apos;t have to.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                The two largest-ever peer-reviewed clinical studies on
                psychedelic therapy tracked over 1000 clients. The outcomes
                were remarkable.
              </p>
            </div>
            <Button variant="default" asChild>
              <Link href="/research/" className="rounded-full px-6">
                Explore the research
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Study articles from:
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-6 opacity-70">
              {STUDY_LOGOS.map((l) => (
                <div key={l.alt} className="relative h-10 w-28">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS — purple background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3d1d6b] via-[#5a2785] to-[#2a134a] py-24 text-white">
        <Image
          src="/images/photos/neon-waves.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-25 mix-blend-screen"
        />
        <div className="container relative z-10 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.value} className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEUROPLASTICITY — dark navy */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#142a4a] to-[#1a3560] py-24 text-white">
        <Image
          src="/images/photos/brain-particles.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/70 to-transparent" aria-hidden="true" />
        <div className="container relative z-10 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            The new standard in mental health
          </p>
          <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-tight md:text-4xl lg:text-5xl">
            Neuroplasticity refers to the brain&apos;s ability to adapt and
            reorganize itself.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            Traditional medications produce standard outcomes, while ketamine
            functions by restructuring neural connections to promote healing
            and personal development.
          </p>
          <div className="mt-10">
            <Link
              href="/why-ketamine/"
              className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-foreground transition-colors hover:bg-white/90"
            >
              Why ketamine
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                This therapy truly transforms lives.
              </h2>
              <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                Don&apos;t just hear it from us.
              </h2>
            </div>
            <Button variant="default" asChild>
              <Link href="/reviews/" className="rounded-full px-6">
                See more reviews
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="relative rounded-xl bg-secondary p-6"
              >
                <div className="absolute right-0 top-0 h-12 w-12 rounded-bl-full rounded-tr-xl bg-primary text-white">
                  <span className="absolute bottom-1 left-1 font-serif text-xl italic">
                    &rdquo;
                  </span>
                </div>
                <div className="mt-2 flex flex-col items-center text-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 font-medium text-primary">
                    {t.name}
                    {t.role && `, ${t.role}`}
                  </p>
                </div>
                <p className="mt-4 text-center text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GREATEST RESULTS */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#9a72c4] via-[#c89db9] to-[#5a2785]"
          aria-hidden="true"
        />
        <div className="relative z-10 container py-24 md:py-32">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-medium leading-tight text-white md:text-4xl">
                The greatest results come from the strongest support team
              </h2>
            </div>
            <div className="flex justify-center md:col-span-1">
              <div className="relative aspect-square w-56 overflow-hidden rounded-full bg-white/30 backdrop-blur md:w-64">
                <Image
                  src="/images/photos/woman-laptop-smiling.jpg"
                  alt=""
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <p className="text-sm leading-relaxed text-white">
                That&apos;s why we provide the best. From clinical care to
                community, experience a complete support system you can only
                access with Ketcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAILORED TO YOUR NEEDS */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Tailored to your needs
            </h2>
            <Link
              href="/why-ketcare/"
              className="hidden items-center gap-2 text-sm font-medium text-foreground hover:text-primary md:inline-flex"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Find my program focus
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {PROGRAM_CARDS.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted"
              >
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span className="text-base font-semibold tracking-tight text-white">
                    {p.label}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-center text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            FAQs
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-border bg-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-foreground">
                  <span>{faq.q}</span>
                  <Plus
                    className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
              Discover more about Ketcare and the psychedelic field
            </h2>
            <Button variant="default" asChild>
              <Link href="/blog/" className="rounded-full px-6">
                All articles
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <Link
                key={a.title + a.date}
                href={a.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold leading-snug tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                    <span className="text-sm font-medium text-primary">
                      Read More »
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {a.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section
        id="waitlist"
        className="relative overflow-hidden bg-gradient-to-br from-[#3d1d6b] via-[#5a2785] to-[#2a134a] py-24 text-white scroll-mt-24"
      >
        <div className="container max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Join the waitlist
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Be first in line when enrollment opens.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Tell us your state and what you&apos;re working through. We&apos;ll
              notify you the moment Ketcare opens for new patients in your area —
              and you&apos;ll get early-access pricing on the 6-session program.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-white/10 p-6 backdrop-blur-md md:p-8">
            <WaitlistForm variant="dark" />
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
