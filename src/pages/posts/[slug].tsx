import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';
import { Button } from '@/components/ui/Button';
import {
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
  formatPostDate,
  type Post,
  type PostMeta,
} from '@/lib/posts';

type Props = {
  post: Post;
  related: PostMeta[];
};

export default function BlogPost({ post, related }: Props) {
  return (
    <>
      <SEOHead
        title={`${post.title} | Ketcare Blog`}
        description={post.excerpt}
        path={`/posts/${post.slug}/`}
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: post.title, path: `/posts/${post.slug}/` },
        ]}
      />

      {/* Header */}
      <header className="bg-secondary">
        <div className="container max-w-3xl py-16 md:py-20">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All articles
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="section-padding">
        <div className="container max-w-3xl">
          <div
            className="prose prose-neutral max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:my-1 prose-table:my-8 prose-th:bg-muted prose-th:p-3 prose-td:border prose-td:border-border prose-td:p-3"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Keep reading
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/posts/${p.slug}/`}
                    className="group flex flex-col gap-2 py-6 transition-colors hover:bg-background md:flex-row md:items-baseline md:justify-between md:gap-8"
                  >
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {p.category}
                      </p>
                      <h3 className="mt-2 text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-primary md:text-xl">
                        {p.title}
                      </h3>
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
      )}

      {/* Waitlist CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Curious if Ketcare is right for you?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Join the waitlist to be notified the moment Ketcare opens for new
            patients in your state.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="accent" asChild>
              <Link href="/#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getPostSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug);
  const post = getPostBySlug(slug);
  if (!post) {
    return { notFound: true };
  }

  const all = getAllPosts();
  const related = all
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return {
    props: { post, related },
    revalidate: 86400,
  };
};
