import { useTranslations, useMessages } from 'next-intl';

const sectionImages = [
  { src: '/gallery/arched-bridge-of-portaikos-river-at-pyli-8.webp', width: 1600, height: 2133 },
  { src: '/gallery/arched-bridge-of-portaikos-river-at-pyli-3.webp', width: 1600, height: 2133 },
  { src: '/gallery/arched-bridge-of-portaikos-river-at-pyli-4.webp', width: 1600, height: 1200 },
  { src: '/gallery/arched-bridge-of-portaikos-river-at-pyli-12.webp', width: 1600, height: 1600 },
  { src: '/gallery/arched-bridge-of-portaikos-river-at-pyli-5.webp', width: 1600, height: 901 }
];

export default function InfoSection() {
  const t = useTranslations('knowledge');
  const messages = useMessages() as any;
  const sections = (messages?.knowledge?.sections || []) as Array<{ id: string; title: string; content: string }>;

  return (
    <section id="info" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-16 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-16">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={sectionImages[index % sectionImages.length].src}
                    alt={section.title}
                    width={sectionImages[index % sectionImages.length].width}
                    height={sectionImages[index % sectionImages.length].height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 w-full bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0" style={{ background: 'var(--accent)', color: 'white' }}>
                    {index + 1}
                  </div>
                  <h3
                    className="font-display text-2xl font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {section.title}
                  </h3>
                </div>
                <p
                  className="text-lg leading-relaxed md:ml-14"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
