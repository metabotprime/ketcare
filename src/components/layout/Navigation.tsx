import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { href: '/why-ketcare/', label: 'Why Ketcare' },
  { href: '/why-ketamine/', label: 'Why Ketamine' },
  { href: '/research/', label: 'Research' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/blog/', label: 'Blog' },
  { href: '/pricing/', label: 'Pricing' },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-2xl font-bold tracking-tight"
          aria-label="Ketcare home"
        >
          <span className="text-foreground">Ket</span>
          <span className="font-serif italic font-normal text-primary">
            care
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button variant="accent" size="sm" asChild>
          <Link href="/#waitlist">Join waitlist</Link>
        </Button>
      </div>
    </header>
  );
}
