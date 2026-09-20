import { useTranslations, useMessages } from 'next-intl';

type Audience = {
  id: string;
  title: string;
  duration: string;
  pace: string;
  summary: string;
  highlights: string[];
  notes: string[];
};

export default function AudienceRoutes() {
  const t = useTranslations('audiences');
  const messages = useMessages() as any;
  const items = (messages?.audiences?.items || []) as Audience[];

  if (items.length === 0) return null;

  return (
    <section id="audiences" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="text-sm mb-10 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  <AudienceIcon id={item.id} />
                </span>
                <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Tag label={item.duration} />
                <Tag label={item.pace} />
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {item.summary}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                {t('highlightsLabel')}
              </h4>
              <ul className="space-y-2 mb-5">
                {item.highlights.map((line, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
                {t('notesLabel')}
              </h4>
              <ul className="space-y-2 mt-auto">
                {item.notes.map((line, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      className="text-xs rounded-full px-3 py-1"
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
    >
      {label}
    </span>
  );
}

function AudienceIcon({ id }: { id: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  if (id === 'photo') {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="13.5" r="3.2" />
      </svg>
    );
  }

  if (id === 'accessible') {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="4.5" r="2" />
        <path d="M12 6.5v6" />
        <path d="M6.5 9.5 12 12l5.5-2.5" />
        <path d="M12 12.5V19" />
        <path d="M9 22l3-3 3 3" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <circle cx="8" cy="7" r="2.4" />
      <circle cx="16.5" cy="8.5" r="1.8" />
      <path d="M4 20c.6-4 2.6-6 4.2-6s3.6 2 4.2 6" />
      <path d="M14 20c.4-2.6 1.4-4.4 3-4.4s2.8 1.8 3 4.4" />
    </svg>
  );
}
