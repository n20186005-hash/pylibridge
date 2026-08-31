import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata, Viewport } from 'next';

const BASE_URL = 'https://pylibridge.com';
const ATTRACTION_FULL_NAME = 'Arched Bridge of Portaikos River at Pyli';
const ATTRACTION_SHORT_NAME = 'Arched Bridge of Portaikos River';
const CITY = 'Pyli';
const REGION = 'Thessaly';
const COUNTRY = 'Greece';
const POSTAL_CODE = '420 32';
const STREET_ADDRESS = '22ο χλμ. της εθνικής οδού Τρικάλων - Άρτας';
const LAT = 39.4605452;
const LNG = 21.6004;
const MAPS_URL = 'https://maps.app.goo.gl/bEtEhkN4D8ETgDJm6';
const GOVT_TOURISM_URL = 'https://www.visitgreece.gr/';
const HERO_IMAGE = `${BASE_URL}/gallery/arched-bridge-of-portaikos-river-at-pyli-1.jpg`;
const PUBLISHER_NAME = 'Pyli Bridge Cultural Heritage Project';
const CONTENT_REVIEWED_DATE = '2026-08-31';

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
    // Icons are served via file conventions: /icon.jpg and /apple-icon.jpg (root app dir)
    appleWebApp: {
      capable: true,
      title: 'Pyli Bridge',
      statusBarStyle: 'default',
    },
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'el': elUrl,
        'x-default': elUrl,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: ATTRACTION_FULL_NAME,
      images: [
        {
          url: HERO_IMAGE,
          width: 1200,
          height: 630,
          alt: `${ATTRACTION_FULL_NAME} in ${CITY}, ${REGION}, ${COUNTRY}`,
        },
      ],
      locale: locale === 'zh' ? 'zh_CN' : locale === 'en' ? 'en_US' : 'el_GR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [HERO_IMAGE],
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

  const attractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${BASE_URL}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [
      ATTRACTION_SHORT_NAME,
      'Pyli Bridge',
      'Τοξωτό Γεφύρι Πορταϊκού Ποταμού Πύλης',
      `${CITY} ${ATTRACTION_FULL_NAME}`,
    ],
    description: messages.meta.description,
    url: BASE_URL,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET_ADDRESS,
      addressLocality: CITY,
      addressRegion: REGION,
      postalCode: POSTAL_CODE,
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LAT,
      longitude: LNG,
    },
    hasMap: MAPS_URL,
    sameAs: [MAPS_URL, GOVT_TOURISM_URL],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: PUBLISHER_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/icon.jpg`,
    description: 'A non-profit, independent educational website documenting the history and visitor information of the Arched Bridge of Portaikos River at Pyli.',
    sameAs: [MAPS_URL, GOVT_TOURISM_URL],
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: PUBLISHER_NAME,
    url: BASE_URL,
    inLanguage: ['el', 'en', 'zh'],
    publisher: { '@id': `${BASE_URL}/#organization` },
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${selfUrl}#webpage`,
    url: selfUrl,
    name: messages.meta.title,
    description: messages.meta.description,
    inLanguage: langToHtmlLang[locale] || 'el',
    datePublished: '2026-08-31',
    dateModified: CONTENT_REVIEWED_DATE,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#attraction` },
    primaryImageOfPage: HERO_IMAGE,
    publisher: { '@id': `${BASE_URL}/#organization` },
  };

  const faqItems: Array<{ q: string; a: string }> = messages?.faq?.items || [];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
