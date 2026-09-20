import { useTranslations, useMessages } from 'next-intl';

type TransportMode = {
  id: string;
  title: string;
  duration: string;
  distance: string;
  cost: string;
  detail: string;
  steps: string[];
};

export default function TransportSection() {
  const t = useTranslations('transport');
  const messages = useMessages() as any;
  const modes = (messages?.transport?.modes || []) as TransportMode[];
  const facts = (messages?.transport?.facts || []) as Array<{ label: string; value: string }>;
  const tips: string[] = messages?.transport?.tips || [];

  return (
    <section id="transport" className="section-padding">
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

        {facts.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  {fact.label}
                </p>
                <p className="text-base font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modes.map((mode) => (
            <article
              key={mode.id}
              className="rounded-2xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  <ModeIcon id={mode.id} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {mode.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {mode.duration && <Chip label={`${t('labelDuration')}: ${mode.duration}`} />}
                {mode.distance && <Chip label={`${t('labelDistance')}: ${mode.distance}`} />}
                {mode.cost && <Chip label={`${t('labelCost')}: ${mode.cost}`} />}
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {mode.detail}
              </p>

              {mode.steps?.length > 0 && (
                <ol className="space-y-2 mt-auto">
                  {mode.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--accent)', border: '1px solid var(--border-color)' }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              )}
            </article>
          ))}
        </div>

        {tips.length > 0 && (
          <div
            className="mt-8 rounded-xl p-6"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
          >
            <h3 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('tipsTitle')}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span
      className="text-xs rounded-full px-3 py-1"
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
    >
      {label}
    </span>
  );
}

function ModeIcon({ id }: { id: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (id) {
    case 'taxi':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M5 17h14M6 17V9l2-4h8l2 4v8" />
          <path d="M6 12h12" />
          <circle cx="8" cy="17" r="1.6" />
          <circle cx="16" cy="17" r="1.6" />
        </svg>
      );
    case 'airport':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21.5 4s-2 .5-3.5 2L14.5 9.5 6.3 7.7c-.8-.2-1.6.3-1.8 1.1-.2.8.3 1.6 1.1 1.8l6.3 1.4-3.4 3.4-2.8-.7c-.6-.2-1.2.1-1.4.7-.2.6.1 1.2.7 1.4l3.5.9 1.4 3.5c.2.6.8.9 1.4.7.6-.2.9-.8.7-1.4z" />
        </svg>
      );
    case 'coach':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M3 11h18M7 20v-4M17 20v-4" />
          <circle cx="8" cy="14" r="0.9" />
          <circle cx="16" cy="14" r="0.9" />
        </svg>
      );
    case 'bus':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="4" y="3" width="16" height="15" rx="2" />
          <path d="M4 10h16" />
          <path d="M8 21v-3M16 21v-3" />
          <circle cx="8.5" cy="14" r="0.9" />
          <circle cx="15.5" cy="14" r="0.9" />
        </svg>
      );
    case 'rail':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="5" y="3" width="14" height="12" rx="3" />
          <path d="M5 10h14" />
          <path d="M8 20l-3 2M16 20l3 2" />
          <circle cx="9" cy="13" r="0.9" />
          <circle cx="15" cy="13" r="0.9" />
        </svg>
      );
    case 'walk':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="13" cy="4" r="1.8" />
          <path d="M13 6.5l-3 4 2 3 1 6" />
          <path d="M10 10.5 7 13" />
          <path d="M13 13.5l3-2" />
          <path d="M5 22h14" />
        </svg>
      );
    case 'cycling':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="6" cy="17" r="3.4" />
          <circle cx="18" cy="17" r="3.4" />
          <path d="M9 17h4l-2-6 4-3" />
          <circle cx="15.5" cy="5" r="1.2" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="M14 3v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3" />
          <path d="M14 6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6" />
          <path d="M4 20h16" />
          <circle cx="7" cy="17" r="1.8" />
          <circle cx="17" cy="17" r="1.8" />
        </svg>
      );
  }
}
