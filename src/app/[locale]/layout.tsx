import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata, Viewport } from 'next';

const BASE_URL = 'https://pylibridge.com';
const ATTRACTION_FULL_NAME = 'Arched Bridge of Portaikos River at Pyli';
const CONTENT_REVIEWED_DATE = '2026-10-23';

const langToHtmlLang: Record<string, string> = { zh: 'zh-CN', en: 'en', el: 'el' };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  const zhUrl = `${BASE_URL}/zh`;
  const enUrl = `${BASE_URL}/en`;
  const elUrl = `${BASE_URL}/el`;
  const selfUrl = `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: messages.meta.title,
    description: messages.meta.description,
    applicationName: ATTRACTION_FULL_NAME,
    manifest: '/manifest.webmanifest',
    appleWebApp: {
      capable: true,
      title: 'Pyli Bridge',
      statusBarStyle: 'default',
    },
    alternates: {
      canonical: selfUrl,
      languages: {
        zh: zhUrl,
        en: enUrl,
        el: elUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: ATTRACTION_FULL_NAME,
      images: [
        {
          url: `${BASE_URL}/gallery/arched-bridge-of-portaikos-river-at-pyli-1.jpg`,
          width: 1200,
          height: 630,
          alt: `${ATTRACTION_FULL_NAME} in Pyli, Thessaly, Greece`,
        },
      ],
      locale: locale === 'zh' ? 'zh_CN' : locale === 'en' ? 'en_US' : 'el_GR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [`${BASE_URL}/gallery/arched-bridge-of-portaikos-river-at-pyli-1.jpg`],
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#3a7a8d',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = (await getMessages()) as any;
  const selfUrl = `${BASE_URL}/${locale}`;

  return (
    <html lang={langToHtmlLang[locale] || 'el'} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').catch(function() {});
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
