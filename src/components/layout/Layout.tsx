import type { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

type LayoutProps = {
  children: ReactNode;
};

/**
 * On the homepage the nav floats over the hero (transparent, white-text styled).
 * Everywhere else it's the standard sticky white bar.
 */
export function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation overlay={isHome} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
