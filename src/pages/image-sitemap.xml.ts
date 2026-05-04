import type { GetServerSideProps } from 'next';
import {
  generateImageSitemapXml,
  getStaticSitemapEntries,
} from '@/lib/seo/sitemap';

export default function ImageSitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const entries = getStaticSitemapEntries();
  const xml = generateImageSitemapXml(entries);

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
  );
  res.write(xml);
  res.end();

  return { props: {} };
};
