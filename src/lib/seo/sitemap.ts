import { SITE_URL } from '@/lib/utils';
import { CONDITIONS } from '@/lib/conditions';

export type SitemapImage = {
  url: string;
  caption?: string;
  title?: string;
};

export type SitemapEntry = {
  url: string;
  lastmod?: string;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
  images?: SitemapImage[];
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function entryToXml(entry: SitemapEntry): string {
  const parts: string[] = [`    <loc>${escapeXml(entry.url)}</loc>`];
  if (entry.lastmod) parts.push(`    <lastmod>${entry.lastmod}</lastmod>`);
  if (entry.changefreq) parts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
  if (entry.priority !== undefined) {
    parts.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
  }
  return `  <url>\n${parts.join('\n')}\n  </url>`;
}

export function generateSitemapXml(entries: SitemapEntry[]): string {
  const body = entries.map(entryToXml).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}

export function generateImageSitemapXml(entries: SitemapEntry[]): string {
  const withImages = entries.filter((e) => e.images && e.images.length > 0);
  const body = withImages
    .map((entry) => {
      const imageXml = (entry.images || [])
        .map((img) => {
          const fields: string[] = [
            `      <image:loc>${escapeXml(img.url)}</image:loc>`,
          ];
          if (img.caption) {
            fields.push(`      <image:caption>${escapeXml(img.caption)}</image:caption>`);
          }
          if (img.title) {
            fields.push(`      <image:title>${escapeXml(img.title)}</image:title>`);
          }
          return `    <image:image>\n${fields.join('\n')}\n    </image:image>`;
        })
        .join('\n');
      return `  <url>\n    <loc>${escapeXml(entry.url)}</loc>\n${imageXml}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>`;
}

/**
 * Static URL inventory. Add entries as pages come online.
 * Source-of-truth for /sitemap.xml.
 */
export function getStaticSitemapEntries(): SitemapEntry[] {
  const today = new Date().toISOString().split('T')[0];

  return [
    { url: `${SITE_URL}/`, lastmod: today, changefreq: 'weekly', priority: 1.0 },
    {
      url: `${SITE_URL}/why-ketcare/`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9,
    },
    ...CONDITIONS.map<SitemapEntry>((c) => ({
      url: `${SITE_URL}/why-ketcare/${c.slug}/`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    })),
    // More entries get added here as we build pages.
  ];
}
