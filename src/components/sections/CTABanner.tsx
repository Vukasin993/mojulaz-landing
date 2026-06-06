import { ArrowRight } from '../ui/icons'

export default function CTABanner() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 55%, #14b8a6 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-[480px] h-[480px] rounded-full bg-white/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="reveal text-[clamp(28px,5vw,48px)] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
          Spremi ste da modernizujete vašu zgradu?
        </h2>
        <p className="reveal reveal-d1 text-lg text-white/80 mb-10 leading-relaxed">
          Pridružite se stotinama upravnika koji su transformisali upravljanje zgradom.
          Bez kreditne kartice, bez rizika.
        </p>
        <div className="reveal reveal-d2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 bg-white hover:bg-primary-50 rounded-full px-7 py-4 transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5"
          >
            Počnite 30-dnevni probni period
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
