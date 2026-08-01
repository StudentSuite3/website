import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thestudentsuite.com';
const ROUTES = ['/', '/tools', '/mission', '/contribute'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
  }));
}
