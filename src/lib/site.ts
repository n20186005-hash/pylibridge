/**
 * Shared site facts and structured-data builders for pylibridge.com.
 * Centralised so the homepage, topic pages and sitemap all describe the
 * attraction with the same names, coordinates and ratings.
 */

export const SITE_URL = 'https://pylibridge.com';
export const ATTRACTION_FULL_NAME = 'Arched Bridge of Portaikos River at Pyli';
export const ATTRACTION_SHORT_NAME = 'Arched Bridge of Portaikos River';
export const ATTRACTION_GREEK_NAME = 'Τοξωτό Γεφύρι Πορταϊκού Ποταμού Πύλης';
export const CITY = 'Pyli';
export const REGION = 'Thessaly';
export const COUNTRY = 'Greece';
export const POSTAL_CODE = '420 32';
export const STREET_ADDRESS = '22ο χλμ. της εθνικής οδού Τρικάλων - Άρτας';
export const LAT = 39.4605452;
export const LNG = 21.6004;
export const MAPS_URL = 'https://maps.app.goo.gl/bEtEhkN4D8ETgDJm6';
export const PHONE = '+30 2431 076647';
export const GOOGLE_RATING = '4.8';
export const GOOGLE_REVIEW_COUNT = '7458';
export const GOVT_TOURISM_URL = 'https://www.visitgreece.gr/';
export const HERO_IMAGE = `${SITE_URL}/gallery/arched-bridge-of-portaikos-river-at-pyli-1.jpg`;
export const PUBLISHER_NAME = 'Pyli Bridge Cultural Heritage Project';
export const CONTENT_REVIEWED_DATE = '2026-10-23';

export const langToHtmlLang: Record<string, string> = { zh: 'zh-CN', en: 'en', el: 'el' };

/** Geographic + timezone facts used by the server-side weather fetch. */
export const SITE = {
  latitude: LAT,
  longitude: LNG,
  timezone: 'Europe/Athens',
};

/** BCP-47 tags for locale-aware date/time/number formatting in the UI. */
export const FORMAT_LOCALE: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en-GB',
  el: 'el-GR',
};

type JsonLd = Record<string, unknown>;

export function buildAttractionJsonLd(description: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LandmarksOrHistoricalBuildings'],
    '@id': `${SITE_URL}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [
      ATTRACTION_SHORT_NAME,
      'Pyli Bridge',
      'Agios Vissarion Bridge',
      ATTRACTION_GREEK_NAME,
      `${CITY} ${ATTRACTION_FULL_NAME}`,
    ],
    description,
    url: SITE_URL,
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
    telephone: PHONE,
    availableLanguage: ['el', 'en', 'zh'],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free admission', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free roadside parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Open 24 hours', value: true },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      reviewCount: GOOGLE_REVIEW_COUNT,
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };
}

export function buildOrganizationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: PUBLISHER_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.jpg`,
    description:
      'A non-profit, independent educational website documenting the history and visitor information of the Arched Bridge of Portaikos River at Pyli.',
    sameAs: [MAPS_URL, GOVT_TOURISM_URL],
  };
}

export function buildWebSiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: PUBLISHER_NAME,
    url: SITE_URL,
    inLanguage: ['el', 'en', 'zh'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function buildWebPageJsonLd(opts: {
  locale: string;
  url: string;
  title: string;
  description: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    inLanguage: langToHtmlLang[opts.locale] || 'el',
    datePublished: '2026-08-31',
    dateModified: CONTENT_REVIEWED_DATE,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#attraction` },
    primaryImageOfPage: HERO_IMAGE,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function buildFaqJsonLd(items: { q: string; a: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
