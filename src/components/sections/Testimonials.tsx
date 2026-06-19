import { Star } from '../ui/icons'
import { REGISTER_URL } from '../../constants/marketing'
import { useLang } from '../../i18n/LanguageContext'

const testimonials = [
  {
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    initials: 'MJ',
    color: 'from-teal-600 to-teal-700',
    name: 'Miroslav Jovanović',
    stat: { n: '87%' },
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    initials: 'AN',
    color: 'from-indigo-500 to-indigo-600',
    name: 'Ana Nikolić',
    stat: { n: '40min' },
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    initials: 'SD',
    color: 'from-amber-500 to-amber-600',
    name: 'Stefan Đorđević',
    stat: { n: '6h' },
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  return (
    <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            {t.testimonials.badge}
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="reveal reveal-d2 text-base text-slate-500 max-w-md mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {testimonials.map(({ photo, name, stat }, index) => {
            const copy = t.testimonials.items[index]
            return (
            <div
              key={name}
              className="reveal group relative p-7 rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col"
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 20px 48px rgba(13,148,136,0.1), 0 4px 12px rgba(0,0,0,0.06)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '' }}
            >
              <Stars />

              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">"{copy.quote}"</p>

              {/* Stat callout */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 10, background: '#f0fdfa', border: '1px solid rgba(13,148,136,0.12)', marginBottom: 16 }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: '#0d9488', letterSpacing: '-0.5px' }}>{stat.n}</span>
                <span style={{ fontSize: 11.5, color: '#0d9488', fontWeight: 600 }}>{copy.stat}</span>
              </div>

              <div className="flex items-start gap-3">
                <img
                  src={photo}
                  alt={name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-ink">{name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{copy.role}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{copy.detail}</div>
                </div>
              </div>
            </div>
          )})}
        </div>

        {/* Embedded CTA */}
        <div style={{
          borderRadius: 24, padding: '40px 32px', textAlign: 'center',
          background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)',
          border: '1px solid rgba(13,148,136,0.12)',
        }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#0d9488', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
            {t.testimonials.proof}
          </p>
          <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', marginBottom: 8 }}>
            {t.testimonials.ctaTitle}
          </h3>
          <p style={{ fontSize: 15, color: '#64748b', marginBottom: 28, lineHeight: 1.6 }}>
            {t.testimonials.ctaSub}
          </p>
          <a
            href={REGISTER_URL}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 99,
              background: 'linear-gradient(135deg, #0d9488, #0891b2)',
              color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 800,
              boxShadow: '0 4px 20px rgba(13,148,136,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 28px rgba(13,148,136,0.4)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 4px 20px rgba(13,148,136,0.3)' }}
          >
            {t.common.startArrow}
          </a>
          <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 12 }}>
            {t.testimonials.note}
          </p>
        </div>

      </div>
    </section>
  )
}
