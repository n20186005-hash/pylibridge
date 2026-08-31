'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function TableOfContents() {
  const t = useTranslations('toc');
  const messages = useMessages() as any;
  const items = (messages?.toc?.items || []) as Array<{ id: string; label: string }>;

  if (items.length === 0) return null;

  return (
    <section className="section-padding pt-10 pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-wide mb-4" style={{ color: 'var(--text-muted)' }}>
          {t('title')}
        </p>
        <nav aria-label={t('title')}>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm rounded-full px-4 py-1.5 transition-colors hover:border-[var(--accent)]"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
