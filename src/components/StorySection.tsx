'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function StorySection() {
  const t = useTranslations('story');
  const messages = useMessages() as any;
  const timeline = (messages?.story?.timeline || []) as Array<{ year: string; title: string; desc: string }>;
  const facts = (messages?.story?.facts || []) as Array<{ label: string; value: string }>;

  return (
    <section id="history" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('intro')}
        </p>

        {/* Legend narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('legendTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('legend')}
            </p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('whyTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('why')}
            </p>
          </div>
        </div>

        {/* Biography & craftsmanship */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('bioTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('bio')}
            </p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('craftTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('craft')}
            </p>
          </div>
        </div>

        {/* Historical context: the Ottoman era and the Thessalian bridge tradition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('eraTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('era')}
            </p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('tradeTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('trade')}
            </p>
          </div>
        </div>

        {/* Inscription & folk tradition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('inscriptionTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('inscription')}
            </p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('songsTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('songs')}
            </p>
          </div>
        </div>

        {/* From working crossing to protected monument */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('modernTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('modern')}
            </p>
          </div>
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('restorationTitle')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('restoration')}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <h3 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--text-primary)' }}>
          {t('timelineTitle')}
        </h3>
        <div className="relative mb-16">
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: 'var(--border-color)' }}
          />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-4 pl-4">
                <div
                  className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full border-2 flex-shrink-0"
                  style={{ background: 'var(--accent)', borderColor: 'var(--accent)', top: '0.25rem' }}
                />
                <div
                  className="flex-shrink-0 w-24 text-sm font-bold"
                  style={{ color: 'var(--accent)', paddingTop: '0.5rem' }}
                >
                  {item.year}
                </div>
                <div
                  className="flex-1 rounded-xl p-4"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key facts */}
        <h3 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--text-primary)' }}>
          {t('factsTitle')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="rounded-xl p-5 text-center"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <p className="text-xl font-bold mb-1" style={{ color: 'var(--accent)' }}>
                {fact.value}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
