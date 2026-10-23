import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { topicSlugs, topicAlternates, getTopic } from '@/data/topics';

const BASE_URL = 'https://pylibridge.com';

/**
 * One entry per page per locale, each declaring its hreflang alternates so
 * search engines can serve the right language edition instead of indexing the
 * translations as duplicate content. Topic pages are added from the shared
 * topics registry so the sitemap always matches the generated routes.
 */
const PAGES = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/cookie-settings', changeFrequency: 'monthly' as const, priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'monthly' as const, priority: 0.5 },
  { path: '/terms-of-service', changeFrequency: 'monthly' as const, priority: 0.5 },
];

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

  for (const slug of topicSlugs()) {
    const topic = getTopic(slug);
    if (!topic) continue;
    // Topic pages are published for Greek (el), English (en) and Chinese (zh).
    for (const locale of routing.locales.filter((l) => l === 'el' || l === 'en' || l === 'zh')) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: topicAlternates(slug, locale) },
      });
    }
  }

  return sitemapEntries;
}
