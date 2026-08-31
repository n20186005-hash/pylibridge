import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arched Bridge of Portaikos River at Pyli',
    short_name: 'Pyli Bridge',
    description:
      'Visitor guide to the Arched Bridge of Portaikos River at Pyli (Τοξωτό Γεφύρι Πορταϊκού Ποταμού Πύλης), a 16th-century single-arch stone bridge in Pyli, Thessaly, Greece.',
    start_url: '/el',
    scope: '/',
    display: 'standalone',
    background_color: '#faf8f4',
    theme_color: '#3a7a8d',
    lang: 'el',
    categories: ['travel', 'culture'],
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
  };
}
