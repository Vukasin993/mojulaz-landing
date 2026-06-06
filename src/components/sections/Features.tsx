import { Wrench, Bell, BarChart, FileText, MessageSquare, Smartphone } from '../ui/icons'
import type { SVGProps } from 'react'

type IconComponent = (p: SVGProps<SVGSVGElement>) => JSX.Element

interface Feature {
  Icon: IconComponent
  title: string
  desc: string
}

const features: Feature[] = [
  {
    Icon: Wrench,
    title: 'Prijave kvarova',
    desc: 'Stanari prijavljuju kvar u sekundi putem mobilne aplikacije. Upravnik prati status od prijave do rešenja, dodaje napomene i obaveštava stanare.',
  },
  {
    Icon: Bell,
    title: 'Obaveštenja i ankete',
    desc: 'Šaljite hitna obaveštenja ili organizujte glasanja po stanu i kvadraturi. Rezultati anketa dostupni su svim stanarima u realnom vremenu.',
  },
  {
    Icon: BarChart,
    title: 'Finansije i fond',
    desc: 'Pratite prihode, rashode i rezervni fond. Generišite izveštaje i šaljite stanarima pregled dugovanja jednim klikom iz admin panela.',
  },
  {
    Icon: FileText,
    title: 'Dokumenti',
    desc: 'Uploadujte ugovore, zapisnike i ponude. Kontrolišite pristup — samo vlasnici, svi stanari ili isključivo menadžeri.',
  },
  {
    Icon: MessageSquare,
    title: 'Grupni chat',
    desc: 'Direktna komunikacija između stanara i upravnika u jednom chatu. Podržava slanje slika i fajlova unutar razgovora.',
  },
  {
    Icon: Smartphone,
    title: 'Mobilna aplikacija',
    desc: 'Dostupna na iOS i Android. Stanari dobijaju push notifikacije za svaki važan događaj u zgradi — kvar, glasanje, obaveštenje.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            Funkcionalnosti
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
            Sve što vam treba za modernu zgradu
          </h2>
          <p className="reveal reveal-d2 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            MojUlaz pokriva sve aspekte upravljanja stambenom zgradom — od tehničkih zahteva do finansijskog praćenja.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className={`reveal ${i > 0 ? `reveal-d${Math.min(i, 5)}` : ''} group p-7 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 hover:shadow-[0_8px_24px_rgba(13,148,136,0.09)] hover:-translate-y-1 transition-all duration-200`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                <Icon className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
