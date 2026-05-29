import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pylibridge.com';

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/cookie-settings`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  return sitemapEntries;
}