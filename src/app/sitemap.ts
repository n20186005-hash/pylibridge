import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://pylibridge.com';

/**
 * One entry per page per locale, each declaring its hreflang alternates so
 * search engines can serve the right language edition instead of indexing the
 * three translations as duplicate content.
 */
const PAGES = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/cookie-settings', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/terms-of-service', changeFrequency: 'monthly', priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  PAGES.forEach((page) => {
    routing.locales.forEach((locale) => {
      const pageLanguages: Record<string, string> = {};
      routing.locales.forEach((alt) => {
        pageLanguages[alt] = `${BASE_URL}/${alt}${page.path}`;
      });
      pageLanguages['x-default'] = `${BASE_URL}/en${page.path}`;

      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: pageLanguages },
      });
    });
  });

  return sitemapEntries;
}
