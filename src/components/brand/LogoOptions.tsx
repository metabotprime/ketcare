/**
 * Three logo direction options. Each is fully self-contained SVG/CSS
 * (no PNG), so it's crisp at any size and recolorable via theme tokens.
 */

import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  /** Pixel height — width auto-calculates from aspect */
  height?: number;
};

/**
 * OPTION A — Refined wordmark, no icon.
 * Clean sans, tight letter-spacing, "Ket" foreground + "care" primary,
 * subtle dot accent at end. Most minimalist; best for app-bar use.
 */
export function LogoOptionA({ className, height = 32 }: LogoProps) {
  return (
    <span
      className={cn('inline-flex items-baseline font-sans font-bold leading-none tracking-tight', className)}
      style={{ fontSize: height * 0.85 }}
      aria-label="Ketcare"
    >
      <span className="text-foreground">Ket</span>
      <span className="text-primary">care</span>
      <span
        className="ml-1 inline-block rounded-full bg-primary"
        style={{ width: height * 0.1, height: height * 0.1 }}
        aria-hidden="true"
      />
    </span>
  );
}

/**
 * OPTION B — Mark + wordmark, modern.
 * Cleaned-up version of the current EKG icon (single circle, simpler
 * pulse path) sitting next to a strong sans wordmark.
 */
export function LogoOptionB({ className, height = 40 }: LogoProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-2 font-sans font-bold leading-none tracking-tight', className)}
      style={{ fontSize: height * 0.7 }}
      aria-label="Ketcare"
    >
      <svg
        viewBox="0 0 40 40"
        width={height}
        height={height}
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground"
        />
        <path
          d="M5 20 L13 20 L16 12 L20 28 L24 14 L27 20 L35 20"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <span className="text-foreground">Ket</span>
        <span className="text-primary">care</span>
      </span>
    </span>
  );
}

/**
 * OPTION C — Editorial serif accent.
 * "Ket" in confident sans, "care" in DM Serif Display italic. Premium /
 * wellness feel. Pairs naturally with the section-display pattern used
 * elsewhere on the site.
 */
export function LogoOptionC({ className, height = 36 }: LogoProps) {
  return (
    <span
      className={cn('inline-flex items-baseline leading-none', className)}
      style={{ fontSize: height * 0.85 }}
      aria-label="Ketcare"
    >
      <span className="font-sans font-bold tracking-tight text-foreground">Ket</span>
      <span className="font-serif italic text-primary" style={{ fontSize: '1.05em' }}>
        care
      </span>
    </span>
  );
}
