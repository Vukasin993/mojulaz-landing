import BrowserMockup from '../ui/BrowserMockup'
import PhoneMockup from '../ui/PhoneMockup'
import MobileAppPreview from '../ui/MobileAppPreview'
import { ArrowRight, Play, Check, Lock, Star } from '../ui/icons'
import adminOverview from '../../assets/screenshots/admin-overview.png'

export default function Hero() {
  return (
    <section
      className="overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
      style={{ background: 'linear-gradient(155deg, #f0fdfa 0%, #ffffff 55%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">

          {/* ── Left: copy ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 bg-primary-50 text-primary-700 border border-primary-100">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
              Softver za upravljanje stambenim zgradama
            </div>

            {/* Headline */}
            <h1 className="reveal reveal-d1 text-[clamp(40px,6vw,68px)] font-extrabold text-ink leading-[1.08] tracking-[-2px] mb-6">
              Upravljajte<br />
              <span className="grad-text">zgradom.</span><br />
              Jednostavno.
            </h1>

            {/* Sub */}
            <p className="reveal reveal-d2 text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              MojUlaz povezuje upravnike i stanare u jednoj platformi —
              prijave kvarova, obaveštenja, finansije i glasanja, sve na jednom mestu.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-d3 flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-6 py-3.5 transition-all hover:shadow-[0_4px_16px_rgba(13,148,136,0.35)] hover:-translate-y-px active:translate-y-0"
              >
                Registrujte se besplatno
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink bg-white hover:bg-primary-50 border border-slate-200 hover:border-primary-300 rounded-full px-6 py-3.5 transition-all hover:-translate-y-px active:translate-y-0"
              >
                <Play className="w-4 h-4 text-primary-600" />
                Pogledajte demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="reveal reveal-d4 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-primary-500" />
                30 dana besplatno
              </span>
              <span className="text-slate-300 hidden sm:block">·</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-primary-500" />
                Bez kreditne kartice
              </span>
              <span className="text-slate-300 hidden sm:block">·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary-500" />
                Podrška na srpskom
              </span>
            </div>
          </div>

          {/* ── Right: device mockups ── */}
          <div className="reveal reveal-d2 flex-1 w-full max-w-2xl relative">

            {/* Decorative blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-primary-100/50 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-8 w-72 h-72 rounded-full bg-primary-50/60 blur-3xl pointer-events-none" />

            {/* Browser mockup — admin dashboard screenshot */}
            <div className="relative z-10">
              <BrowserMockup
                src={adminOverview}
                alt="MojUlaz admin panel — pregled zgrade"
                className="w-full"
              />

              {/* Phone mockup overlapping bottom-right */}
              <div className="absolute -bottom-4 right-2 sm:right-0 lg:-right-10 z-20 w-[120px] sm:w-[138px] lg:w-[155px]">
                <PhoneMockup>
                  <MobileAppPreview />
                </PhoneMockup>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
