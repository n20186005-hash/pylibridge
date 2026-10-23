export type TopicSection = { id: string; title: string; body: string };
export type TopicFaq = { q: string; a: string };
export type TopicContent = {
  metaTitle: string;
  h1: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
};
export type TopicCategory = 'transport' | 'nearby' | 'food' | 'routes' | 'history';
export type Topic = {
  slug: string;
  category: TopicCategory;
  related: string[];
  el: TopicContent;
  en: TopicContent;
  zh: TopicContent;
};
