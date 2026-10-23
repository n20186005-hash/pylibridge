import type { Topic, TopicCategory } from './types';
import { PART1 } from './part1';
import { PART2 } from './part2';
import { PART3 } from './part3';
import { PART4 } from './part4';
import { PART5 } from './part5';
import { PART6 } from './part6';
import { PART7 } from './part7';
import { PART8 } from './part8';

export type { Topic, TopicContent, TopicSection, TopicFaq, TopicCategory } from './types';

export const TOPICS: Topic[] = [
  ...PART1,
  ...PART2,
  ...PART3,
  ...PART4,
  ...PART5,
  ...PART6,
  ...PART7,
  ...PART8,
];

export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicSlugs(): string[] {
  return TOPIC_SLUGS;
}

/** hreflang alternates for a topic page, with x-default pointing to the English edition. */
export function topicAlternates(slug: string, _locale: string): Record<string, string> {
  const base = 'https://pylibridge.com';
  return {
    el: `${base}/el/${slug}`,
    en: `${base}/en/${slug}`,
    zh: `${base}/zh/${slug}`,
    'x-default': `${base}/en/${slug}`,
  };
}

export const CATEGORY_LABELS: Record<TopicCategory, { el: string; en: string; zh: string }> = {
  transport: { el: 'Πρόσβαση & Πάρκινγκ', en: 'Getting there & parking', zh: '交通与停车' },
  nearby: { el: 'Κοντινά Αξιοθέατα', en: 'Nearby attractions', zh: '周边景点' },
  food: { el: 'Φαγητό & Καφέ', en: 'Food & cafés', zh: '美食与咖啡' },
  routes: { el: 'Διαδρομές', en: 'Routes & itineraries', zh: '路线与行程' },
  history: { el: 'Ιστορία & Φύση', en: 'History & nature', zh: '历史与自然' },
};
