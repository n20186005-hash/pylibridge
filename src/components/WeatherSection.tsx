import { getTranslations } from 'next-intl/server';
import { FORMAT_LOCALE, SITE } from '@/lib/site';
import {
  beaufortLevel,
  buildWeatherAdvice,
  categoryFromCode,
  getWeather,
  humidityBand,
  needsRainGear,
  uvBand,
  type WeatherCategory,
} from '@/lib/weather';

function formatNumber(value: number | null, unit: string, fallback: string): string {
  if (value === null) return fallback;
  return `${Math.round(value)}${unit}`;
}

function formatDay(date: string, localeTag: string): string {
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat(localeTag, {
    weekday: 'short',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(parsed);
}

function formatClock(value: string | null, localeTag: string): string | null {
  if (!value) return null;
  const parsed = new Date(value.length <= 16 ? `${value}:00` : value);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Intl.DateTimeFormat(localeTag, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: SITE.timezone,
  }).format(parsed);
}

export function WeatherGlyph({ category, size = 40 }: { category: WeatherCategory; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (category) {
    case 'clear':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.2 12H2M22 12h-2.2M6.4 6.4 4.8 4.8M19.2 19.2l-1.6-1.6M17.6 6.4l1.6-1.6M4.8 19.2l1.6-1.6" />
        </svg>
      );
    case 'mainlyClear':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="9" cy="9" r="3.4" />
          <path d="M9 2.6v1.6M3.4 9h1.6M4.9 4.9l1.1 1.1M14.2 3.4l-.7 1.5" />
          <path d="M17.5 19.5H9.5a3.5 3.5 0 0 1 .3-7 4.6 4.6 0 0 1 8.5 1.2 3 3 0 0 1-.8 5.8z" />
        </svg>
      );
    case 'partlyCloudy':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="8.5" cy="8" r="2.8" />
          <path d="M8.5 3.4v1.4M4 8H2.6" />
          <path d="M17.5 19.5H9.5a3.5 3.5 0 0 1 .3-7 4.6 4.6 0 0 1 8.5 1.2 3 3 0 0 1-.8 5.8z" />
        </svg>
      );
    case 'fog':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M17.5 15.5H8a3.2 3.2 0 0 1 .3-6.4 4.3 4.3 0 0 1 8 1.1 2.8 2.8 0 0 1 1.2 5.3z" />
          <path d="M4 19h16M6.5 22h11" />
        </svg>
      );
    case 'drizzle':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M17.5 15.5H8a3.2 3.2 0 0 1 .3-6.4 4.3 4.3 0 0 1 8 1.1 2.8 2.8 0 0 1 1.2 5.3z" />
          <path d="M9 19v1.4M13 19v1.4M17 19v1.4" />
        </svg>
      );
    case 'rain':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M17.5 14.5H8a3.2 3.2 0 0 1 .3-6.4 4.3 4.3 0 0 1 8 1.1 2.8 2.8 0 0 1 1.2 5.3z" />
          <path d="M9 17.5l-1 4M13 17.5l-1 4M17 17.5l-1 4" />
        </svg>
      );
    case 'snow':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M17.5 14.5H8a3.2 3.2 0 0 1 .3-6.4 4.3 4.3 0 0 1 8 1.1 2.8 2.8 0 0 1 1.2 5.3z" />
          <path d="M9 19h.01M13 20h.01M17 19h.01M11 22h.01M15 22h.01" strokeWidth="2.4" />
        </svg>
      );
    case 'thunderstorm':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M17.5 14H8a3.2 3.2 0 0 1 .3-6.4 4.3 4.3 0 0 1 8 1.1 2.8 2.8 0 0 1 1.2 5.3z" />
          <path d="M13 16l-2.5 3.5h3L11.5 23" />
        </svg>
      );
    case 'overcast':
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="M17.5 17.5H8a3.6 3.6 0 0 1 .3-7.2 5 5 0 0 1 9.3 1.3 3.1 3.1 0 0 1-.1 5.9z" />
        </svg>
      );
  }
}

function GroupIcon({ kind }: { kind: 'risk' | 'dress' | 'plan' | 'gear' }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (kind) {
    case 'risk':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 4.5 3 19.5h18L12 4.5z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case 'dress':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M9 4 5 6l-1.5 4L6 11v9M15 4l4 2 1.5 4L18 11v9" />
          <path d="M9 4h6l1 2H8l1-2z" />
        </svg>
      );
    case 'plan':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="6.5" cy="6.5" r="2.5" />
          <circle cx="17.5" cy="17.5" r="2.5" />
          <path d="M6.5 9v5a4 4 0 0 0 4 4h4.5" />
        </svg>
      );
    case 'gear':
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="M5 8h14l-1 12H6L5 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
  }
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
      <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
        {value}
      </p>
    </div>
  );
}

export default async function WeatherSection({ locale }: { locale: string }) {
  const t = await getTranslations('weather');
  const snapshot = await getWeather();

  const localeTag = FORMAT_LOCALE[locale] || 'en-GB';
  const cardStyle = {
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
  };
  const riskColor = '#c0392b';

  const advice = snapshot ? buildWeatherAdvice(snapshot) : null;
  const humidityLevel = snapshot ? humidityBand(snapshot.current.humidity) : null;
  const uvLevel = snapshot ? uvBand(snapshot.daily[0]?.uvIndexMax ?? null) : null;
  const windLevel = snapshot
    ? beaufortLevel(snapshot.current.windSpeed ?? snapshot.daily[0]?.windSpeedMax ?? null)
    : null;

  return (
    <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        {!snapshot && (
          <div className="rounded-xl p-6" style={cardStyle}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('unavailable')}
            </p>
          </div>
        )}

        {snapshot && advice && (
          <div className="space-y-6">
            {/* Current conditions */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ ...cardStyle, border: '1px solid var(--accent)' }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex items-center gap-5">
                  <div style={{ color: 'var(--accent)' }}>
                    <WeatherGlyph category={categoryFromCode(snapshot.current.code)} size={56} />
                  </div>
                  <div>
                    <p
                      className="font-display text-4xl sm:text-5xl font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {formatNumber(snapshot.current.temperature, '°', '--')}
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {t(`codes.${categoryFromCode(snapshot.current.code)}` as any)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 flex-1">
                  <Metric
                    label={t('feelsLike')}
                    value={formatNumber(snapshot.current.apparentTemperature, '°', '--')}
                  />
                  <Metric
                    label={t('humidity')}
                    value={
                      snapshot.current.humidity === null
                        ? '--'
                        : `${Math.round(snapshot.current.humidity)}%${
                            humidityLevel !== null
                              ? ` · ${t(`humidityLevels.${humidityLevel}` as any)}`
                              : ''
                          }`
                    }
                  />
                  <Metric
                    label={t('precipProbability')}
                    value={formatNumber(snapshot.current.precipitationProbability, '%', '--')}
                  />
                  <Metric
                    label={t('wind')}
                    value={
                      windLevel === null
                        ? '--'
                        : t('windValue', {
                            level: windLevel,
                            name: t(`windLevels.${windLevel}` as any),
                          })
                    }
                  />
                  <Metric
                    label={t('gusts')}
                    value={formatNumber(snapshot.current.windGusts, ` ${t('windUnit')}`, '--')}
                  />
                  <Metric
                    label={t('uvIndex')}
                    value={
                      snapshot.daily[0]?.uvIndexMax === null ||
                      snapshot.daily[0]?.uvIndexMax === undefined
                        ? '--'
                        : `${Math.round(snapshot.daily[0]!.uvIndexMax as number)}${
                            uvLevel !== null ? ` · ${t(`uvLevels.${uvLevel}` as any)}` : ''
                          }`
                    }
                  />
                  <Metric
                    label={t('rainfall')}
                    value={formatNumber(snapshot.daily[0]?.precipitation ?? null, ' mm', '--')}
                  />
                </div>
              </div>

              <div
                className="mt-6 pt-6 flex flex-wrap items-center gap-3"
                style={{ borderTop: '1px solid var(--border-color)' }}
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
                  style={
                    needsRainGear(snapshot)
                      ? { background: 'var(--accent)', color: '#fff' }
                      : {
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-color)',
                        }
                  }
                >
                  {needsRainGear(snapshot) ? t('umbrellaYes') : t('umbrellaNo')}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {t('umbrellaHint')}
                </span>
              </div>
            </div>

            {/* Risk alerts — only rendered when the forecast triggers one */}
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={
                advice.risk.length > 0
                  ? {
                      background: 'rgba(192, 57, 43, 0.08)',
                      border: '1px solid rgba(192, 57, 43, 0.4)',
                    }
                  : { ...cardStyle }
              }
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span style={{ color: advice.risk.length > 0 ? riskColor : 'var(--text-muted)' }}>
                  <GroupIcon kind="risk" />
                </span>
                <h3
                  className="font-display text-lg font-semibold"
                  style={{ color: advice.risk.length > 0 ? riskColor : 'var(--text-primary)' }}
                >
                  {t('riskTitle')}
                </h3>
              </div>
              {advice.risk.length === 0 ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t('noRisk')}
                </p>
              ) : (
                <ul className="space-y-2.5">
                  {advice.risk.map((key) => (
                    <li key={key} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: riskColor }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {t(`risk.${key}` as any)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Actionable advice: what to wear / how to plan / what to pack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AdviceCard
                kind="dress"
                title={t('groups.dress')}
                items={advice.dress}
                t={t}
                cardStyle={cardStyle}
              />
              <AdviceCard
                kind="plan"
                title={t('groups.plan')}
                items={advice.plan}
                t={t}
                cardStyle={cardStyle}
              />
              <AdviceCard
                kind="gear"
                title={t('groups.gear')}
                items={advice.gear}
                t={t}
                cardStyle={cardStyle}
                chips
              />
            </div>

            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {t('terrainNote')}
            </p>

            {/* Multi-day forecast */}
            <div className="rounded-2xl p-6 sm:p-8" style={cardStyle}>
              <h3
                className="font-display text-xl font-semibold mb-5"
                style={{ color: 'var(--text-primary)' }}
              >
                {t('forecastTitle')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {snapshot.daily.map((day) => {
                  const category = categoryFromCode(day.code);
                  const level = beaufortLevel(day.windSpeedMax);
                  return (
                    <div
                      key={day.date}
                      className="rounded-xl p-4 text-center"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                        {formatDay(day.date, localeTag)}
                      </p>
                      <div className="flex justify-center mb-2" style={{ color: 'var(--accent)' }}>
                        <WeatherGlyph category={category} size={32} />
                      </div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {formatNumber(day.tempMax, '°', '--')}
                        <span style={{ color: 'var(--text-muted)' }}>
                          {' / '}
                          {formatNumber(day.tempMin, '°', '--')}
                        </span>
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {formatNumber(day.precipitationProbability, '%', '--')}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {level === null ? '--' : t('windShort', { level })}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {t(`codes.${category}` as any)}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs mt-5" style={{ color: 'var(--text-muted)' }}>
                {t('forecastLegend')}
              </p>
            </div>

            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {t('footnote')}
              {formatClock(snapshot.updatedAt, localeTag)
                ? ` · ${t('observedAt')} ${formatClock(snapshot.updatedAt, localeTag)}`
                : ''}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

type Translator = Awaited<ReturnType<typeof getTranslations>>;

function AdviceCard({
  kind,
  title,
  items,
  t,
  cardStyle,
  chips = false,
}: {
  kind: 'dress' | 'plan' | 'gear';
  title: string;
  items: string[];
  t: Translator;
  cardStyle: { background: string; border: string };
  chips?: boolean;
}) {
  if (items.length === 0) return null;

  return (
    <div className="rounded-2xl p-5 sm:p-6" style={cardStyle}>
      <div className="flex items-center gap-2.5 mb-4">
        <span style={{ color: 'var(--accent)' }}>
          <GroupIcon kind={kind} />
        </span>
        <h3
          className="font-display text-base font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>
      </div>

      {chips ? (
        <ul className="flex flex-wrap gap-2">
          {items.map((key) => (
            <li
              key={key}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
              }}
            >
              <span
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              {t(`gear.${key}` as any)}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-3">
          {items.map((key) => (
            <li key={key} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t(`${kind}.${key}` as any)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
