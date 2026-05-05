import data from './posts-data.json';

export type PostCategory =
  | 'Depression'
  | 'Anxiety'
  | 'PTSD'
  | 'Chronic Pain'
  | 'Nasal Spray'
  | 'Lozenges'
  | 'Microdosing'
  | 'Telehealth'
  | 'Safety'
  | 'Science'
  | 'The Experience'
  | 'At-Home Therapy';

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  tags: PostCategory[];
  readingTime: string;
  words: number;
};

export type Post = PostMeta & {
  body: string;
};

const ALL: Post[] = (data as Post[])
  .map((p) => ({ ...p, category: p.category as PostCategory, tags: p.tags as PostCategory[] }))
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

export function getAllPosts(): PostMeta[] {
  return ALL.map(({ body, ...meta }) => meta);
}

export function getPostSlugs(): string[] {
  return ALL.map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | null {
  return ALL.find((p) => p.slug === slug) ?? null;
}

export function getCategories(): { name: PostCategory; count: number }[] {
  const counts = new Map<PostCategory, number>();
  for (const p of ALL) {
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function formatPostDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
