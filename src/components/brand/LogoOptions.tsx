/**
 * Three logo direction options. Each is fully self-contained SVG/CSS
 * (no PNG), so it's crisp at any size and recolorable via theme tokens.
 *
 * USER PICKED OPTION B — exported as the canonical Logo + LogoMark.
 */

import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  /** Pixel height — width auto-calculates from aspect */
  height?: number;
};

/**
 * MARK — single-ring circle with a clean EKG pulse path. Used standalone
 * (footer, social avatars) or inside the wordmark logo.
 *
 * Circle stroke uses currentColor so it can be inverted on dark backgrounds
 * by setting text-color on the parent. EKG line is hard-coded to primary.
 */
export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-label="Ketcare"
      className={cn('inline-block flex-shrink-0', className)}
    >
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
  );
}

/**
 * LOGO — mark + wordmark together. Chosen direction (Option B).
 * - Mark: single-ring circle + clean EKG pulse path
 * - Wordmark: bold sans, "Ket" foreground + "care" primary
 */
export function Logo({ className, height = 40 }: LogoProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-2 font-sans font-bold leading-none tracking-tight', className)}
      style={{ fontSize: height * 0.6 }}
      aria-label="Ketcare"
    >
      <LogoMark size={height} />
      <span>
        <span className="text-foreground">Ket</span>
        <span className="text-primary">care</span>
      </span>
    </span>
  );
}

// ---- Other options retained for the /logo-options/ comparison page ----

/**
 * OPTION A — Refined wordmark, no icon.
 * Type-only with subtle purple dot accent. (Not the picked direction.)
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
 * OPTION B — Mark + wordmark. THIS IS THE PICKED DIRECTION.
 * Alias to Logo so the /logo-options/ page can keep its naming.
 */
export const LogoOptionB = Logo;

/**
 * OPTION C — Editorial serif accent. (Not the picked direction.)
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
