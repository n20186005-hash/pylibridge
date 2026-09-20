import { useTranslations, useMessages } from 'next-intl';

type ScienceBlock = { title: string; text: string };

export default function ResponsibilitySection() {
  const t = useTranslations('responsibility');
  const messages = useMessages() as any;
  const science = (messages?.responsibility?.science || []) as ScienceBlock[];
  const duties = (messages?.responsibility?.duties || []) as string[];
  const safety = (messages?.responsibility?.safety || []) as string[];

  const cardStyle = {
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
  };

  return (
    <section id="responsibility" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="text-sm mb-12 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        {/* Science explainer */}
        <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          {t('scienceTitle')}
        </h3>
        <p className="text-base leading-relaxed mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          {t('scienceIntro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {science.map((block, i) => (
            <div key={i} className="rounded-2xl p-6" style={cardStyle}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  {i + 1}
                </span>
                <h4 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {block.title}
                </h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {block.text}
              </p>
            </div>
          ))}
        </div>

        {/* Visitor responsibility + safety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 sm:p-8" style={{ ...cardStyle, border: '1px solid var(--accent)' }}>
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('dutyTitle')}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              {t('dutyIntro')}
            </p>
            <ul className="space-y-3">
              {duties.map((item, i) => (
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6 sm:p-8" style={cardStyle}>
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('safetyTitle')}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              {t('safetyIntro')}
            </p>
            <ul className="space-y-3">
              {safety.map((item, i) => (
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
                    <path d="M12 3l9 16H3l9-16z" />
                    <line x1="12" y1="10" x2="12" y2="14" />
                    <line x1="12" y1="16.5" x2="12.01" y2="16.5" />
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs mt-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}
