import Link from 'next/link';
import { LogoMark } from '@/components/brand/LogoOptions';

const TREATMENT_LINKS = [
  { href: '/why-ketcare/', label: 'How it Works' },
  { href: '/why-ketamine/', label: 'Why Ketamine' },
  { href: '/research/', label: 'Research' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/pricing/', label: 'Pricing' },
];

const KETCARE_LINKS = [{ href: '/blog/', label: 'Blog' }];

const SOCIAL_LINKS = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'Linkedin' },
];

const TREATMENT_AREAS_COL_1 = [
  { href: '/why-ketcare/anxiety/', label: 'Anxiety' },
  { href: '/why-ketcare/depression/', label: 'Depression' },
  { href: '/why-ketcare/ptsd/', label: 'PTSD' },
  { href: '/why-ketcare/burnout/', label: 'Burnout' },
  { href: '/why-ketcare/emotional-regulation/', label: 'Emotional Regulation' },
  { href: '/why-ketcare/getting-unstuck/', label: 'Getting Unstuck' },
];

const TREATMENT_AREAS_COL_2 = [
  { href: '/why-ketcare/grief/', label: 'Grief' },
  { href: '/why-ketcare/habit-change/', label: 'Habit Change' },
  { href: '/why-ketcare/ketcare101/', label: 'Ketcare 101' },
  { href: '/why-ketcare/relationships/', label: 'Relationships' },
  { href: '/why-ketcare/resilience/', label: 'Resilience' },
  { href: '/why-ketcare/self-love/', label: 'Self Love' },
];

const LEGAL_LINKS = [
  { href: '/terms-of-use/', label: 'Terms of Use' },
  { href: '/privacy-policy/', label: 'Privacy Policy' },
  { href: '/consumer-health-data-privacy-policy/', label: 'Consumer Health Data Privacy Policy' },
  { href: '/informed-consent/', label: 'Informed Consent' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Top section */}
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Logo */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Ketcare home"
              className="inline-block text-foreground"
            >
              <LogoMark size={48} />
            </Link>
          </div>

          {/* Treatment column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Treatment
            </h3>
            <ul className="mt-4 space-y-3">
              {TREATMENT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ketcare column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Ketcare
            </h3>
            <ul className="mt-4 space-y-3">
              {KETCARE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription form */}
          <div className="lg:col-span-4">
            <h3 className="text-base font-medium text-foreground">
              Keep us top of mind in your inbox.
            </h3>
            <form
              className="mt-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to Ketcare email updates"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                By clicking &ldquo;Submit&rdquo; below, you acknowledge that
                you have read, understood, and accepted the{' '}
                <Link
                  href="/privacy-policy/"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>{' '}
                (including sensitive data processing) and{' '}
                <Link
                  href="/terms-of-use/"
                  className="text-primary hover:underline"
                >
                  Terms of Use
                </Link>
                .
              </p>
              <button
                type="submit"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom section — treatment areas + legal + disclaimer */}
      <div className="border-t border-border">
        <div className="container py-10">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Treatment areas — 2 columns */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 lg:col-span-4">
              <ul className="space-y-2">
                {TREATMENT_AREAS_COL_1.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {TREATMENT_AREAS_COL_2.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div className="lg:col-span-3">
              <ul className="space-y-2">
                {LEGAL_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="space-y-3 text-xs leading-relaxed text-muted-foreground lg:col-span-5">
              <p>
                Ketcare is a platform that provides services to affiliated
                psychiatric medical practices which are independently owned
                and operated, and in no way owns, directs, or controls the
                mental healthcare clinicians providing care.
              </p>
              <p>
                This website should not be used as medical advice in place of
                a licensed psychiatric clinician.
              </p>
              <p>
                If you are in a life-threatening situation, don&apos;t use this
                site. Call, text, or chat <strong>988</strong> or{' '}
                <strong>1-800-273-TALK (8255)</strong> to get immediate help.
              </p>
              <p>
                <a
                  href="mailto:info@ketcare.com"
                  className="text-primary hover:underline"
                >
                  info@ketcare.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ketcare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
