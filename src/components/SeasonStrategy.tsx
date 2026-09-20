import { useTranslations, useMessages } from 'next-intl';

type SeasonRow = {
  season: string;
  temp: string;
  rain: string;
  water: string;
  wildlife: string;
  crowd: string;
  advice: string;
};

export default function SeasonStrategy() {
  const t = useTranslations('seasons');
  const messages = useMessages() as any;
  const rows = (messages?.seasons?.rows || []) as SeasonRow[];

  if (rows.length === 0) return null;

  return (
    <section id="seasons" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="text-sm mb-8 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        {/* Desktop table */}
        <div
          className="hidden lg:block rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                <th className="text-left font-semibold px-4 py-3">{t('columns.season')}</th>
                <th className="text-left font-semibold px-4 py-3">{t('columns.temp')}</th>
                <th className="text-left font-semibold px-4 py-3">{t('columns.rain')}</th>
                <th className="text-left font-semibold px-4 py-3">{t('columns.water')}</th>
                <th className="text-left font-semibold px-4 py-3">{t('columns.wildlife')}</th>
                <th className="text-left font-semibold px-4 py-3">{t('columns.crowd')}</th>
                <th className="text-left font-semibold px-4 py-3">{t('columns.advice')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <td
                    className="px-4 py-4 align-top font-semibold whitespace-nowrap"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {row.season}
                  </td>
                  <td className="px-4 py-4 align-top">{row.temp}</td>
                  <td className="px-4 py-4 align-top">{row.rain}</td>
                  <td className="px-4 py-4 align-top">{row.water}</td>
                  <td className="px-4 py-4 align-top">{row.wildlife}</td>
                  <td className="px-4 py-4 align-top">{row.crowd}</td>
                  <td className="px-4 py-4 align-top">{row.advice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / tablet cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="rounded-2xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {row.season}
              </h3>
              <dl className="space-y-2 text-sm">
                <Field label={t('columns.temp')} value={row.temp} />
                <Field label={t('columns.rain')} value={row.rain} />
                <Field label={t('columns.water')} value={row.water} />
                <Field label={t('columns.wildlife')} value={row.wildlife} />
                <Field label={t('columns.crowd')} value={row.crowd} />
                <Field label={t('columns.advice')} value={row.advice} />
              </dl>
            </div>
          ))}
        </div>

        <p className="text-xs mt-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
        {label}
      </dt>
      <dd className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {value}
      </dd>
    </div>
  );
}
