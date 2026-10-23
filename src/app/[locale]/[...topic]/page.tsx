import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { getTopic, topicSlugs, topicAlternates } from '@/data/topics';
import TopicPage from '@/components/TopicPage';

export function generateStaticParams() {
  const params: { locale: string; topic: string[] }[] = [];
  // Topic pages are published for Greek (el), English (en) and Chinese (zh).
  const topicLocales = routing.locales.filter((l) => l === 'el' || l === 'en' || l === 'zh');
  for (const locale of topicLocales) {
    for (const slug of topicSlugs()) {
      params.push({ locale, topic: slug.split('/') });
    }
  }
  return params;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string[] }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const slug = topic.join('/');
  const tpc = getTopic(slug);
  if (!tpc) return {};
  const content = tpc[locale as 'el' | 'en' | 'zh'];
  const self = `https://pylibridge.com/${locale}/${slug}`;
  const alternates = topicAlternates(slug, locale);
  const description = content.intro.slice(0, 160);

  return {
    title: content.metaTitle,
    description,
    alternates: {
      canonical: self,
      languages: alternates,
    },
    openGraph: {
      title: content.metaTitle,
      description,
      url: self,
      siteName: 'Pyli Bridge Guide',
      locale: locale === 'el' ? 'el_GR' : locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'article',
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string[] }>;
}) {
  const { locale, topic } = await params;
  const slug = topic.join('/');
  const tpc = getTopic(slug);
  if (!tpc) notFound();
  setRequestLocale(locale);
  return <TopicPage slug={slug} locale={locale} />;
}
