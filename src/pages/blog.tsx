import { useMemo, useState } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { cn } from '@/lib/utils';
import {
  getAllPosts,
  getCategories,
  formatPostDate,
  type PostMeta,
  type PostCategory,
} from '@/lib/posts';

type Props = {
  posts: PostMeta[];
  categories: { name: PostCategory; count: number }[];
};

const ALL = 'All' as const;
type Filter = typeof ALL | PostCategory;

export default function BlogIndex({ posts, categories }: Props) {
  const [active, setActive] = useState<Filter>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return posts;
    return posts.filter((p) => p.category === active || p.tags.includes(active));
  }, [active, posts]);

  return (
    <>
      <SEOHead
        title="Ketcare Blog | At-Home Ketamine Therapy Articles"
        description="Evidence-grounded writing on at-home ketamine therapy for depression, anxiety, PTSD, and chronic pain. Protocols, safety, integration, and the science behind it."
        path="/blog/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-secondary">
        <div className="container max-w-5xl py-16 md:py-20">
          <p className="section-eyebrow mb-4">Blog</p>
          <h1 className="section-display max-w-3xl">
            The Ketcare Blog.
          </h1>
          <p className="section-subhead mt-6 max-w-2xl">
            {posts.length} articles on at-home ketamine therapy — protocols,
            safety, integration, and what real change actually requires.
          </p>
        </div>
      </section>

      {/* Filter chips + list */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            <FilterChip
              label={ALL}
              count={posts.length}
              active={active === ALL}
              onClick={() => setActive(ALL)}
            />
            {categories.map((c) => (
              <FilterChip
                key={c.name}
                label={c.name}
                count={c.count}
                active={active === c.name}
                onClick={() => setActive(c.name)}
              />
            ))}
          </div>

          <ul className="divide-y divide-border">
            {filtered.length === 0 && (
              <li className="py-16 text-center text-muted-foreground">
                No articles in this category yet.
              </li>
            )}
            {filtered.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/posts/${p.slug}/`}
                  className="group flex flex-col gap-3 py-6 transition-colors hover:bg-secondary/40 md:flex-row md:items-baseline md:justify-between md:gap-8 md:py-8"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="font-semibold uppercase tracking-[0.18em] text-primary">
                        {p.category}
                      </span>
                      <span className="text-muted-foreground" aria-hidden="true">·</span>
                      <time className="text-muted-foreground" dateTime={p.date}>
                        {formatPostDate(p.date)}
                      </time>
                    </div>
                    <h2 className="mt-3 text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-primary md:text-xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.excerpt}
                    </p>
                  </div>
                  <p className="flex-shrink-0 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                    {p.readingTime}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

type FilterChipProps = {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
};

function FilterChip({ label, count, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-background text-foreground hover:border-primary/40 hover:bg-secondary'
      )}
    >
      {label}
      <span className={cn('text-xs', active ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
        {count}
      </span>
    </button>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    posts: getAllPosts(),
    categories: getCategories(),
  },
  revalidate: 86400,
});
