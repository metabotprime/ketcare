import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/LogoOptions';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/why-ketcare/', label: 'Program' },
  { href: '/why-ketamine/', label: 'Why Ketamine' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/pricing/', label: 'Treatments' },
];

type NavigationProps = {
  /** When true, renders transparent over a hero. Default: solid sticky bar. */
  overlay?: boolean;
};

export function Navigation({ overlay = false }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        'left-0 right-0 top-0 z-50 w-full',
        overlay
          ? 'absolute bg-transparent'
          : 'sticky border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75'
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Ketcare home"
          className="flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Logo height={40} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                overlay
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden shrink-0 items-center gap-5 md:flex">
          <Link
            href="#"
            aria-label="Login (placeholder — not yet wired)"
            className={cn(
              'text-sm font-medium transition-colors',
              overlay
                ? 'text-foreground/80 hover:text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Login
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-white/90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-md md:hidden',
            overlay ? 'text-foreground' : 'text-foreground'
          )}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary"
              >
                Login
              </Link>
              <Link
                href="/#waitlist"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
