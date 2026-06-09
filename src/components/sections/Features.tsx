import { Wrench, Bell, BarChart, FileText, MessageSquare, Smartphone } from '../ui/icons'
import type { SVGProps } from 'react'

type IconComponent = (p: SVGProps<SVGSVGElement>) => JSX.Element

interface Feature {
  Icon: IconComponent
  title: string
  desc: string
  emoji: string
  accentBg: string
  accentIcon: string
}

const features: Feature[] = [
  {
    Icon: Wrench,
    emoji: '🔧',
    title: 'Prijave kvarova',
    desc: 'Stanari prijavljuju kvar u sekundi putem mobilne aplikacije. Upravnik prati status od prijave do rešenja.',
    accentBg: '#fff7ed',
    accentIcon: '#d97706',
  },
  {
    Icon: Bell,
    emoji: '📢',
    title: 'Obaveštenja i ankete',
    desc: 'Šaljite hitna obaveštenja ili organizujte glasanja. Rezultati anketa dostupni svima u realnom vremenu.',
    accentBg: '#eef2ff',
    accentIcon: '#4f46e5',
  },
  {
    Icon: BarChart,
    emoji: '💰',
    title: 'Finansije i fond',
    desc: 'Pratite prihode, rashode i rezervni fond. Generišite izveštaje jednim klikom iz admin panela.',
    accentBg: '#f0fdfa',
    accentIcon: '#0d9488',
  },
  {
    Icon: FileText,
    emoji: '📄',
    title: 'Dokumenti',
    desc: 'Uploadujte ugovore, zapisnike i ponude. Kontrolišite pristup — stanari, vlasnici ili samo menadžeri.',
    accentBg: '#f0fdf4',
    accentIcon: '#16a34a',
  },
  {
    Icon: MessageSquare,
    emoji: '💬',
    title: 'Grupni chat',
    desc: 'Direktna komunikacija između stanara i upravnika. Podrška za slike i fajlove unutar razgovora.',
    accentBg: '#fdf4ff',
    accentIcon: '#9333ea',
  },
  {
    Icon: Smartphone,
    emoji: '📱',
    title: 'Mobilna aplikacija',
    desc: 'Dostupna na iOS i Android. Push notifikacije za svaki važan događaj — kvar, glasanje, obaveštenje.',
    accentBg: '#f0fdfa',
    accentIcon: '#0d9488',
  },
]

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-white">
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
            MojUlaz pokriva sve aspekte upravljanja — od tehničkih zahteva do finansijskog praćenja.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ Icon, title, desc, emoji, accentBg, accentIcon }, i) => (
            <div
              key={title}
              className={`reveal-scale reveal-d${Math.min(i + 1, 5)} group relative p-7 rounded-2xl border border-slate-200 bg-white overflow-hidden cursor-default`}
              style={{
                transition: `
                  opacity 0.72s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s,
                  transform 0.72s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s,
                  box-shadow 0.3s ease,
                  border-color 0.3s ease
                `,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-6px) scale(1.01)'
                el.style.boxShadow = `0 20px 40px ${accentIcon}18, 0 8px 16px rgba(0,0,0,0.06)`
                el.style.borderColor = `${accentIcon}40`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = ''
                el.style.boxShadow = ''
                el.style.borderColor = ''
              }}
            >
              {/* Accent blob on hover */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${accentBg} 0%, transparent 70%)` }}
              />

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: accentBg }}
              >
                <Icon className="w-5 h-5" style={{ color: accentIcon }} />
                {/* Emoji float on hover */}
                <span
                  className="absolute -top-3 -right-3 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1"
                >
                  {emoji}
                </span>
              </div>

              <h3 className="relative text-base font-bold text-ink mb-2">{title}</h3>
              <p className="relative text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
