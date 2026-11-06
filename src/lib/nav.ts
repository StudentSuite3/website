/**
 * Whether a nav link is the current section. A section link is current on its
 * own page and every page under it (`/docs` on `/docs/faq`); an in-page anchor
 * like `/#tools` is never current, since it is a scroll target, not a page.
 */
export function isCurrent(pathname: string, href: string): boolean {
  if (href.includes('#')) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}
