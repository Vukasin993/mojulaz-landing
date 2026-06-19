import { ArrowRight } from '../ui/icons'
import { REGISTER_URL } from '../../constants/marketing'
import { useLang } from '../../i18n/LanguageContext'

export default function CTABanner() {
  const { t } = useLang()
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 55%, #14b8a6 100%)' }}
    >
      {/* Animated blobs */}
      <div
        className="animate-blob absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />
      <div
        className="animate-blob-alt absolute -bottom-32 -left-16 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="reveal text-sm font-bold text-teal-200 uppercase tracking-widest mb-4">
          {t.cta.kicker}
        </p>
        <h2 className="reveal text-[clamp(28px,5vw,52px)] font-extrabold text-white tracking-tight leading-[1.1] mb-5">
          {t.cta.title}<br />{t.cta.title2}
        </h2>
        <p className="reveal reveal-d1 text-lg text-white/75 mb-10 leading-relaxed">
          {t.cta.subtitle}
        </p>

        <div className="reveal reveal-d2 flex flex-col items-center gap-5">
          <a
            href={REGISTER_URL}
            className="group relative inline-flex items-center gap-2 text-base font-extrabold text-primary-700 bg-white rounded-full px-8 py-4 overflow-hidden transition-all hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)] hover:-translate-y-1 active:translate-y-0"
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(13,148,136,0.08) 50%, transparent 100%)' }}
            />
            <span className="relative">{t.cta.button}</span>
            <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Social proof row */}
        <div className="reveal reveal-d3 flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/60">
          {t.cta.proof.map((item, index) => (
            <span key={item} className="contents">
              {index > 0 && <span className="hidden sm:block text-white/30">·</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
