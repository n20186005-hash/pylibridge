'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function PhotoSpotsSection() {
  const t = useTranslations('photoSpots');
  const messages = useMessages() as any;
  const spots = (messages?.photoSpots?.spots || []) as Array<{ title: string; description: string; image?: string; location?: string }>;

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {spots.map((spot, index) => (
            <PhotoSpotCard
              key={index}
              title={spot.title}
              description={spot.description}
              location={spot.location}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoSpotCard({ title, description, location, index }: { title: string; description: string; location?: string; index: number }) {
  return (
    <div
      className="rounded-xl p-6 relative overflow-hidden"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="absolute -top-4 -right-4 text-8xl font-bold opacity-[0.03]" style={{ color: 'var(--accent)' }}>
        {index}
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          {location && (
            <div className="flex-shrink-0 bg-black/5 dark:bg-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent)' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{location}</span>
            </div>
          )}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
