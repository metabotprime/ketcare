import Link from 'next/link';
import { Logo } from '@/components/brand/LogoOptions';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/why-ketcare/', label: 'Program' },
  { href: '/why-ketamine/', label: 'Why Ketamine' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/pricing/', label: 'Pricing' },
];

type NavigationProps = {
  /** When true, renders transparent over a hero. Default: solid sticky bar. */
  overlay?: boolean;
};

export function Navigation({ overlay = false }: NavigationProps) {
  return (
    <header
      className={cn(
        'left-0 right-0 top-0 z-50 w-full',
        overlay
          ? 'absolute bg-transparent'
          : 'sticky border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75'
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Ketcare home"
          className="flex shrink-0 items-center"
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

        <div className="flex shrink-0 items-center gap-5">
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
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-white/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
