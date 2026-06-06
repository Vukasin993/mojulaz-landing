import { Star } from '../ui/icons'

interface Testimonial {
  initials: string
  color: string
  name: string
  role: string
  quote: string
  delay: string
}

const testimonials: Testimonial[] = [
  {
    initials: 'MJ',
    color: 'from-primary-600 to-primary-700',
    name: 'Miroslav Jovanović',
    role: 'Upravnik stambene zgrade, Beograd',
    quote: 'Pre MojUlaza sve je bilo na papiru i WhatsApp grupama. Sada imam pregled svakog zahteva i mogu odmah da odgovorim stanarima. Neverovatno koliko se administrativni posao smanjio.',
    delay: '',
  },
  {
    initials: 'AN',
    color: 'from-indigo-500 to-indigo-600',
    name: 'Ana Nikolić',
    role: 'Predsednik skupštine stanara, Novi Sad',
    quote: 'Organizovati skupštinu stanara je bilo pravo mučenje. Sada koristimo ankete u aplikaciji — za sat vremena skupim glasove svih 32 stana. Sistem je intuitivan i stanari su ga odmah prihvatili.',
    delay: 'reveal-d2',
  },
  {
    initials: 'SD',
    color: 'from-amber-500 to-amber-600',
    name: 'Stefan Đorđević',
    role: 'Stanar, Niš',
    quote: 'Konačno znam kada će kvar biti rešen. Prijavim problem u aplikaciji, odmah dobijam potvrdu i pratim status. Više ne moram da zvam upravnika — sve je transparentno.',
    delay: 'reveal-d4',
  },
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
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            Iskustva korisnika
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Šta kažu naši korisnici
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ initials, color, name, role, quote, delay }) => (
            <div
              key={name}
              className={`reveal ${delay} p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-[0_8px_28px_rgba(13,148,136,0.1)] hover:-translate-y-1 transition-all duration-200`}
            >
              <Stars />
              <p className="text-sm text-slate-600 leading-relaxed mb-6">"{quote}"</p>
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
