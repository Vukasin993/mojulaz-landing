import { ArrowRight } from '../ui/icons'
import { ADMIN_PANEL_URL } from '../../lib/links'
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
        <h2 className="reveal text-[clamp(28px,5vw,48px)] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
          {t.ctaBanner.title}
        </h2>
        <p className="reveal reveal-d1 text-lg text-white/80 mb-10 leading-relaxed">
          {t.ctaBanner.sub}
        </p>

        <div className="reveal reveal-d2">
          <a
            href={ADMIN_PANEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 text-sm font-bold text-primary-700 bg-white rounded-full px-7 py-4 overflow-hidden transition-all hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)] hover:-translate-y-1"
          >
            {/* Shine sweep on hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(13,148,136,0.08) 50%, transparent 100%)',
              }}
            />
            <span className="relative">{t.ctaBanner.cta}</span>
            <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Social proof row */}
        <div className="reveal reveal-d3 flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/65">
          {t.ctaBanner.proof.map((p, i) => (
            <span key={p} className="contents">
              {i > 0 && <span className="hidden sm:block text-white/30">·</span>}
              <span>{p}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
