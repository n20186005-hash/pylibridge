import Header from './Header';
import Footer from './Footer';
import { getTopic, CATEGORY_LABELS } from '@/data/topics';
import type { TopicCategory } from '@/data/types';
import { notFound } from 'next/navigation';
import { buildWebPageJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, SITE_URL } from '@/lib/site';

export default function TopicPage({ slug, locale }: { slug: string; locale: string }) {
  const topic = getTopic(slug);
  if (!topic) notFound();
  const c = topic[locale as 'el' | 'en' | 'zh'];
  const cat = CATEGORY_LABELS[topic.category as TopicCategory];
  const catLabel = cat?.[locale as 'el' | 'en' | 'zh'] ?? '';

  const self = `${SITE_URL}/${locale}/${slug}`;
  const home = `${SITE_URL}/${locale}`;
  const breadcrumb = [
    { name: locale === 'el' ? 'Αρχική' : locale === 'zh' ? '首页' : 'Home', url: home },
    { name: catLabel, url: `${home}/#${topic.category}` },
    { name: c.h1, url: self },
  ];

  const jsonLd = [
    buildWebPageJsonLd({ locale, url: self, title: c.metaTitle, description: c.intro }),
    buildBreadcrumbJsonLd(breadcrumb),
    buildFaqJsonLd(c.faq),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
          <nav aria-label="Breadcrumb" className="text-sm text-[color:var(--text-secondary, #555)] mb-4">
            {breadcrumb.map((b, i) => (
              <span key={b.url}>
                {i > 0 && <span className="mx-2">/</span>}
                {i === breadcrumb.length - 1 ? (
                  <span>{b.name}</span>
                ) : (
                  <a href={b.url} className="underline hover:opacity-80">
                    {b.name}
                  </a>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-3xl font-bold">{c.h1}</h1>
          <p className="mt-4 text-lg leading-relaxed">{c.intro}</p>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-6 space-y-8">
          {c.sections.map((s) => (
            <article key={s.id} id={s.id}>
              <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
              <p className="leading-relaxed">{s.body}</p>
            </article>
          ))}
        </section>

        <section className="max-w-3xl mx-auto px-4 py-6" id="faq">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'el' ? 'Συχνές ερωτήσεις' : locale === 'zh' ? '常见问题' : 'Frequently asked questions'}
          </h2>
          <div className="space-y-3">
            {c.faq.map((f, i) => (
              <details key={i} className="border rounded-lg p-3">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {topic.related.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 py-6" id="related">
            <h2 className="text-2xl font-semibold mb-4">
              {locale === 'el' ? 'Σχετικές σελίδες' : locale === 'zh' ? '相关页面' : 'Related pages'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topic.related.map((rel) => {
                const rt = getTopic(rel);
                if (!rt) return null;
                const rc = rt[locale as 'el' | 'en' | 'zh'];
                return (
                  <li key={rel}>
                    <a
                      href={`/${locale}/${rel}`}
                      className="block border rounded-lg p-3 hover:bg-[color:var(--bg-secondary,#f4f4f4)]"
                    >
                      {rc.h1}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <section className="max-w-3xl mx-auto px-4 py-6">
          <p className="text-sm text-[color:var(--text-secondary,#555)]">
            {locale === 'el' ? (
              <>
                Ανεξάρτητος, μη κερδοσκοπικός οδηγός ταξιδιού. Πληροφορίες επαληθεύτηκαν τον Οκτώβριο 2026 από
                δημόσιες πηγές (Γεώπαρκο Μετεώρων–Πύλης, Visit Thessaly). Ώρες, μενού και τιμές μπορεί να αλλάζουν —
                επιβεβαιώστε με την επιχείρηση.{' '}
                <a href={`/${locale}`} className="underline">
                  Επιστροφή στην αρχική σελίδα
                </a>
                .
              </>
            ) : locale === 'zh' ? (
              <>
                本站是独立、非营利的旅行指南。信息于 2026 年 10 月依据公开来源（梅黛奥拉–皮利地质公园、Visit
                Thessaly）核对。开放时间、菜单与价格可能变动，请以商家实际为准。{' '}
                <a href={`/${locale}`} className="underline">
                  返回首页
                </a>
                。
              </>
            ) : (
              <>
                An independent, non-profit travel guide. Information verified October 2026 from public
                sources (Meteora–Pyli Geopark, Visit Thessaly). Hours, menus and prices may change — confirm
                with the venue.{' '}
                <a href={`/${locale}`} className="underline">
                  Back to the home page
                </a>
                .
              </>
            )}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
