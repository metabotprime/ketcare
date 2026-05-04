/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'ketcare.com' },
      { protocol: 'https', hostname: 'images.ketcare.com' },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ISR cache strategy:
  //   - Browser sees fresh HTML on every request (max-age=0)
  //   - Vercel/CDN serves cached HTML for 60s before revalidating (s-maxage=60)
  //   - Stale HTML can be served for up to 24h while a new build runs (stale-while-revalidate=86400)
  // Critically: NEVER use max-age=86400 — it would cause stale HTML to ship on
  // deploys for up to 24h.
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=86400',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Cruft from the WordPress site — these were never indexed but we drop
      // them anyway to avoid 404s if anyone has the URL in a bookmark.
      { source: '/sample-page', destination: '/', permanent: true },
      { source: '/demo-pricing-1', destination: '/pricing', permanent: true },
      { source: '/pricings', destination: '/pricing', permanent: true },

      // Typo'd taxonomy from old site
      { source: '/catgeorys/:slug*', destination: '/blog', permanent: true },

      // Author archives — small site, don't need them
      { source: '/author/:slug*', destination: '/blog', permanent: true },

      // Old contact page slug → new
      { source: '/contact-us', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
