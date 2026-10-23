import { TOPICS, CATEGORY_LABELS } from '@/data/topics';
import type { TopicCategory } from '@/data/types';

const ORDER: TopicCategory[] = ['transport', 'nearby', 'food', 'routes', 'history'];

export default function TopicLinks({ locale }: { locale: string }) {
  if (locale !== 'el' && locale !== 'en' && locale !== 'zh') return null;
  const t = locale as 'el' | 'en' | 'zh';
  return (
    <section id="guides" className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2">
        {t === 'el'
          ? 'Οδηγοί & Θεματικές σελίδες'
          : t === 'zh'
            ? '专题指南'
            : 'Guides & Themed Pages'}
      </h2>
      <p className="mb-8 text-[color:var(--text-secondary,#555)]">
        {t === 'el'
          ? 'Πρακτικοί οδηγοί για πρόσβαση, φαγητό, γύρω αξιοθέατα και διαδρομές γύρω από το Γεφύρι της Πύλης.'
          : t === 'zh'
            ? '皮利石桥周边的交通、美食、附近景点与自驾路线的实用指南。'
            : 'Practical guides for access, food, nearby sights and routes around Pyli Bridge.'}
      </p>

      <div className="space-y-8">
        {ORDER.map((cat) => {
          const items = TOPICS.filter((tp) => tp.category === cat);
          if (items.length === 0) return null;
          const label = CATEGORY_LABELS[cat][t];
          return (
            <div key={cat} id={cat}>
              <h3 className="text-xl font-semibold mb-3 border-b pb-1">{label}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((tp) => {
                  const c = tp[t];
                  return (
                    <li key={tp.slug}>
                      <a
                        href={`/${locale}/${tp.slug}`}
                        className="block border rounded-lg p-3 h-full hover:bg-[color:var(--bg-secondary,#f4f4f4)]"
                      >
                        <span className="font-medium">{c.h1}</span>
                        <span className="block text-sm text-[color:var(--text-secondary,#555)] mt-1">
                          {c.intro.length > 90 ? c.intro.slice(0, 90) + '…' : c.intro}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
