import type { APIRoute } from 'astro';
import { learnTopics, services, site } from '@/data/site';

const staticPaths = [
  '/',
  '/about',
  '/brands',
  '/contact',
  '/eyewear/opthalmic-lenses',
  '/faq',
];

const blogSlugs = [
  'progressive-lenses-guide',
  'myopia-malaysia',
  'eye-examination-frequency',
];

const urls = [
  ...staticPaths,
  ...services.map((service) => `/services/${service.slug}`),
  ...learnTopics.map((topic) => `/learn/${topic.slug}`),
  ...blogSlugs.map((slug) => `/blog/${slug}`),
];

const absoluteUrl = (path: string) => new URL(path, site.url).toString();

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
