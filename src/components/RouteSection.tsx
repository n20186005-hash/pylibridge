import { useTranslations, useMessages } from 'next-intl';

type RoutePlan = {
  label: string;
  duration: string;
  steps: string[];
};

export default function RouteSection() {
  const t = useTranslations('route');
  const messages = useMessages() as any;
  const halfDay = (messages?.route?.halfDay || null) as RoutePlan | null;
  const fullDay = (messages?.route?.fullDay || null) as RoutePlan | null;
  const tips: string[] = messages?.route?.tips || [];

  return (
    <section id="route" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
        <p className="text-sm mb-12 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('overview')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {halfDay && <PlanCard plan={halfDay} />}
          {fullDay && <PlanCard plan={fullDay} />}
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
                  <span
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
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

function PlanCard({ plan }: { plan: RoutePlan }) {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          {plan.label}
        </h3>
        <span
          className="text-xs rounded-full px-3 py-1 whitespace-nowrap"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          {plan.duration}
        </span>
      </div>

      <ol className="relative">
        <span
          className="absolute left-[15px] top-2 bottom-2 w-px"
          style={{ background: 'var(--border-color)' }}
          aria-hidden="true"
        />
        <div className="space-y-5">
          {plan.steps.map((step, i) => (
            <li key={i} className="relative flex gap-4">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {i + 1}
              </span>
              <p
                className="flex-1 rounded-xl p-3.5 text-sm leading-relaxed"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
              >
                {step}
              </p>
            </li>
          ))}
        </div>
      </ol>
    </div>
  );
}
