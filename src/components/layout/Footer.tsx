import Link from 'next/link';

const FOOTER_LINKS: Record<string, { href: string; label: string }[]> = {
  Company: [
    { href: '/our-story/', label: 'Our Story' },
    { href: '/research/', label: 'Research' },
    { href: '/contact/', label: 'Contact' },
  ],
  Treatments: [
    { href: '/why-ketcare/anxiety/', label: 'Anxiety' },
    { href: '/why-ketcare/depression/', label: 'Depression' },
    { href: '/why-ketcare/ptsd/', label: 'PTSD' },
    { href: '/why-ketcare/burnout/', label: 'Burnout' },
  ],
  Legal: [
    { href: '/privacy-policy/', label: 'Privacy Policy' },
    { href: '/terms-of-use/', label: 'Terms of Use' },
    { href: '/informed-consent/', label: 'Informed Consent' },
    {
      href: '/consumer-health-data-privacy-policy/',
      label: 'Health Data Privacy',
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center text-2xl font-bold tracking-tight">
              <span className="text-foreground">Ket</span>
              <span className="font-serif italic font-normal text-primary">
                care
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              At-home ketamine therapy for depression, anxiety, and mental
              wellness.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ketcare. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Not a substitute for emergency mental-health care. In crisis,
            call or text 988.
          </p>
        </div>
      </div>
    </footer>
  );
}
