import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

const facilityIcons: Record<string, ReactNode> = {
  wc: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="6" r="2.5" />
      <path d="M5 21c.6-5 3.4-7.5 7-7.5s6.4 2.5 7 7.5" />
    </svg>
  ),
  parking: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M14 3v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3" />
      <path d="M14 6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6" />
      <path d="M4 20h16" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  dining: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 12a8 8 0 0 0 16 0z" />
      <path d="M4 12h16" />
      <path d="M12 4v2M8 5v2M16 5v2" />
    </svg>
  ),
  lodging: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  shopping: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 7h12l1 13H5L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  ),
  fuel: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
      <path d="M4 11h8" />
      <path d="M14 8h3a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V9l-3-3" />
      <path d="M10 21h6" />
    </svg>
  ),
  accessibility: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v6" />
      <path d="M6.5 9.5 12 12l5.5-2.5" />
      <path d="M12 13v5" />
      <path d="M9 21l3-3 3 3" />
    </svg>
  ),
  pets: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="8" r="2.5" />
      <circle cx="12" cy="5.5" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M12 13c-3 0-5.5 2-6 5 0 .6.4 1 1 1h10c.6 0 1-.4 1-1-.5-3-3-5-6-5z" />
    </svg>
  ),
  water: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3s6 6.4 6 10.4A6 6 0 0 1 6 13.4C6 9.4 12 3 12 3z" />
      <path d="M9.5 14.5a2.7 2.7 0 0 0 2.5 3" />
    </svg>
  ),
  shade: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v8" />
      <path d="M12 11c-4 0-7 2.5-7 5.5S8.5 21 12 21s7-1.5 7-4.5S16 11 12 11z" />
    </svg>
  ),
  medical: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M12 11v6M9 14h6" />
    </svg>
  ),
  connectivity: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M8.5 16a5.5 5.5 0 0 1 7 0" />
      <path d="M2.5 9a14.5 14.5 0 0 1 19 0" />
      <circle cx="12" cy="19.5" r="1" />
    </svg>
  ),
  banking: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="11" rx="1.5" />
      <path d="M3 13h18" />
      <path d="M8 17h3" />
      <path d="M12 4l8 4H4l8-4z" />
    </svg>
  ),
};

type FacilityItem = { id: string; title: string; desc: string };
type ServiceRow = { service: string; where: string; distance: string; note: string };

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const messages = useMessages() as any;
  const items = (messages?.facilities?.items || []) as FacilityItem[];
  const overview = messages?.facilities?.overview || null;
  const rows = (overview?.rows || []) as ServiceRow[];

  return (
    <section id="facilities" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                {facilityIcons[item.id]}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Neutral, type-based service overview */}
        {rows.length > 0 && (
          <div className="mt-14">
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {overview.title}
            </h3>
            <p className="text-sm mb-6 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {overview.subtitle}
            </p>

            <div
              className="hidden md:block rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                    <th className="text-left font-semibold px-4 py-3">{overview.columns?.service}</th>
                    <th className="text-left font-semibold px-4 py-3">{overview.columns?.where}</th>
                    <th className="text-left font-semibold px-4 py-3">{overview.columns?.distance}</th>
                    <th className="text-left font-semibold px-4 py-3">{overview.columns?.note}</th>
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
                      <td className="px-4 py-4 align-top font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {row.service}
                      </td>
                      <td className="px-4 py-4 align-top">{row.where}</td>
                      <td className="px-4 py-4 align-top whitespace-nowrap">{row.distance}</td>
                      <td className="px-4 py-4 align-top">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:hidden gap-4">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {row.service}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {row.where} · {row.distance}
                  </p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className="mt-10 rounded-xl p-5 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('note')}</p>
        </div>
      </div>
    </section>
  );
}
