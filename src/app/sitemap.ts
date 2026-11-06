import type { MetadataRoute } from 'next';

import { docsPages } from '@/lib/docs-nav';
import { getDocMeta } from '@/lib/docs-meta';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

const BASE_URL = site.url;
const ROUTES = ['/', '/tools', '/updates', '/mission', '/contribute', '/docs', '/privacy'];

// Static routes carry no lastModified: stamping the build time on every
// deploy tells crawlers every page changed, which teaches them to ignore the
// field. Docs pages use the date docs-meta.generated.json records for them.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ROUTES.map((path) => ({ url: `${BASE_URL}${path}` }));
  const docRoutes = docsPages.map((page) => {
    const { date } = getDocMeta(page.href);
    return date ? { url: `${BASE_URL}${page.href}`, lastModified: date } : { url: `${BASE_URL}${page.href}` };
  });
  return [...staticRoutes, ...docRoutes];
}
