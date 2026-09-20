/**
 * Shared site constants used by both the page metadata and the weather service.
 * Coordinates point at the Arched Bridge of Portaikos River at Pyli.
 */
export const SITE = {
  baseUrl: 'https://pylibridge.com',
  name: 'Arched Bridge of Portaikos River at Pyli',
  latitude: 39.4605452,
  longitude: 21.6004,
  timezone: 'Europe/Athens',
  mapsUrl: 'https://maps.app.goo.gl/bEtEhkN4D8ETgDJm6',
} as const;

/** HTML lang attribute for each supported locale. */
export const HTML_LANG: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en',
  el: 'el',
};

/** BCP-47 tag used for date / number formatting per locale. */
export const FORMAT_LOCALE: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en-GB',
  el: 'el-GR',
};
