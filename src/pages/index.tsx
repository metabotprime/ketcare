import type { GetStaticProps } from 'next';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { Button } from '@/components/ui/Button';

type HomeProps = {
  builtAt: string;
};

export default function Home({ builtAt }: HomeProps) {
  return (
    <>
      <SEOHead
        title="At-Home Ketamine Therapy for Depression and Mental Wellness"
        description="Safe, effective at-home ketamine therapy for depression, anxiety, PTSD, and mental wellness — under licensed clinical supervision."
        path="/"
      />
      <OrganizationSchema />

      <section className="section-padding">
        <div className="container max-w-5xl">
          <p className="section-eyebrow mb-4">Coming soon</p>
          <h1 className="section-display">
            At-home ketamine therapy for{' '}
            <em>depression and mental wellness.</em>
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            A calmer path to mental health care, delivered through licensed
            clinicians. Join the waitlist for launch updates and early-access
            opportunities.
          </p>

          <div
            id="waitlist"
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" variant="accent">
              Join the waitlist
            </Button>
            <span className="text-sm text-muted-foreground">
              No spam. Launch updates only.
            </span>
          </div>

          <p className="mt-12 text-xs text-muted-foreground">
            Build · {new Date(builtAt).toLocaleDateString()}
          </p>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      builtAt: new Date().toISOString(),
    },
    revalidate: 3600,
  };
};
