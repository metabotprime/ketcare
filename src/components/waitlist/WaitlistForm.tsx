import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { US_STATES } from '@/lib/states';
import { CONDITIONS } from '@/lib/conditions';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type WaitlistFormProps = {
  /** Visual variant — light goes on white sections, dark inverts for dark sections */
  variant?: 'light' | 'dark';
};

export function WaitlistForm({ variant = 'light' }: WaitlistFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: data.get('email')?.toString().trim(),
      state: data.get('state')?.toString(),
      condition: data.get('condition')?.toString() || undefined,
    };

    try {
      const res = await fetch('/api/waitlist/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await res.json()) as
        | { success: true }
        | { success: false; error: string };

      if (!res.ok || !body.success) {
        setStatus('error');
        setErrorMessage(
          (body as { error?: string }).error ||
            'Something went wrong. Please try again.'
        );
        return;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        className={cn(
          'flex items-start gap-3 rounded-lg border p-6',
          variant === 'dark'
            ? 'border-white/30 bg-white/10 text-white'
            : 'border-primary/30 bg-primary/5 text-foreground'
        )}
      >
        <Check
          className={cn(
            'mt-0.5 h-5 w-5 flex-shrink-0',
            variant === 'dark' ? 'text-white' : 'text-primary'
          )}
          aria-hidden="true"
        />
        <div>
          <p className="font-semibold">You&apos;re on the list.</p>
          <p
            className={cn(
              'mt-1 text-sm',
              variant === 'dark' ? 'text-white/80' : 'text-muted-foreground'
            )}
          >
            Check your inbox for a confirmation. We&apos;ll notify you the
            moment enrollment opens in your state.
          </p>
        </div>
      </div>
    );
  }

  const inputClass = cn(
    'w-full rounded-md border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2',
    variant === 'dark'
      ? 'border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-white focus:ring-white/30'
      : 'border-input bg-background text-foreground focus:border-primary focus:ring-primary/20'
  );
  const labelClass = cn(
    'mb-1.5 block text-xs font-semibold uppercase tracking-wide',
    variant === 'dark' ? 'text-white/80' : 'text-muted-foreground'
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Join the Ketcare waitlist">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="waitlist-email" className={labelClass}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label htmlFor="waitlist-state" className={labelClass}>
            State <span aria-hidden="true">*</span>
          </label>
          <select
            id="waitlist-state"
            name="state"
            required
            defaultValue=""
            className={inputClass}
            disabled={status === 'submitting'}
          >
            <option value="" disabled>
              Select your state
            </option>
            {US_STATES.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="waitlist-condition" className={labelClass}>
          Primary focus <span className="font-normal opacity-70">(optional)</span>
        </label>
        <select
          id="waitlist-condition"
          name="condition"
          defaultValue=""
          className={inputClass}
          disabled={status === 'submitting'}
        >
          <option value="">No preference</option>
          {CONDITIONS.filter((c) => c.slug !== 'ketcare101').map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60',
          variant === 'dark'
            ? 'bg-white text-foreground hover:bg-white/90'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        )}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Joining…
          </>
        ) : (
          'Join the waitlist'
        )}
      </button>

      {status === 'error' && (
        <p
          className={cn(
            'text-sm',
            variant === 'dark' ? 'text-red-200' : 'text-destructive'
          )}
        >
          {errorMessage}
        </p>
      )}

      <p
        className={cn(
          'text-xs',
          variant === 'dark' ? 'text-white/60' : 'text-muted-foreground'
        )}
      >
        No spam. Launch updates only. By joining you agree to our Privacy
        Policy and Terms of Use.
      </p>
    </form>
  );
}
