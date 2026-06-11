import { Star } from '../ui/icons'
import { useLang } from '../../i18n/LanguageContext'

/* Names and visuals here — roles and quotes in i18n/translations.ts */
const testimonialMeta = [
  { initials: 'MV', color: 'from-primary-600 to-primary-700', name: 'Milorad Veličković', revealClass: 'reveal-left' },
  { initials: 'AV', color: 'from-indigo-500 to-indigo-600',   name: 'Aleksa Vukadinović', revealClass: 'reveal reveal-d2' },
  { initials: 'SD', color: 'from-amber-500 to-amber-600',     name: 'Stefan Đorđević',    revealClass: 'reveal-right' },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  const testimonials = testimonialMeta.map((m, i) => ({ ...m, ...t.testimonials.items[i] }))
  return (
    <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            {t.testimonials.badge}
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
            {t.testimonials.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ initials, color, name, role, quote, revealClass }) => (
            <div
              key={name}
              className={`${revealClass} group relative p-7 rounded-2xl border border-slate-200 bg-white overflow-hidden`}
              style={{ transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)'
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(13,148,136,0.12), 0 8px 16px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(13,148,136,0.05) 0%, transparent 60%)' }} />

              <Stars />
              <p className="relative text-sm text-slate-600 leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
