import { Users, Smartphone, LayoutDashboard } from '../ui/icons'
import type { SVGProps } from 'react'

type IconComponent = (p: SVGProps<SVGSVGElement>) => JSX.Element

interface Step {
  n: number
  Icon: IconComponent
  title: string
  desc: string
  delay: string
}

const steps: Step[] = [
  {
    n: 1,
    Icon: Users,
    title: 'Upravnik registruje zgradu',
    desc: 'Kreirajte nalog, unesite podatke o zgradi i za minut dobijate jedinstveni kod koji delite stanarima.',
    delay: '',
  },
  {
    n: 2,
    Icon: Smartphone,
    title: 'Stanari unose kod zgrade',
    desc: 'Preuzmu MojUlaz na iOS ili Android, ukucaju kod koji su dobili od upravnika i pristupaju svom ulazu za sekunde.',
    delay: 'reveal-d2',
  },
  {
    n: 3,
    Icon: LayoutDashboard,
    title: 'Platforma je odmah aktivna',
    desc: 'Prijave kvarova, obaveštenja, glasanja i finansije — sve funkcionalnosti dostupne od prvog dana, bez podešavanja.',
    delay: 'reveal-d4',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            Kako radi
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
            Počnite za 5 minuta
          </h2>
          <p className="reveal reveal-d2 text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
            Bez komplikovane konfiguracije. Registracija, dodavanje zgrade, pozivanje stanara.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-6 z-0"
            style={{
              left: 'calc(16.67% + 24px)',
              right: 'calc(16.67% + 24px)',
              height: '2px',
              background: 'linear-gradient(90deg, #0d9488, #ccfbf1, #0d9488)',
              opacity: 0.35,
            }}
          />

          {steps.map(({ n, Icon, title, desc, delay }) => (
            <div key={n} className={`reveal ${delay} text-center relative z-10`}>
              {/* Step number */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-5"
                style={{ background: 'linear-gradient(135deg, #0d9488, #0f766e)' }}
              >
                {n}
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-base font-bold text-ink mb-3">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
