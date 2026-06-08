import { Check, Star } from '../ui/icons'

const freeFeatures = [
  'Sve funkcionalnosti uključene',
  'Neograničen broj stanara',
  'Podrška na srpskom',
  'Bez kreditne kartice',
]

const tiers = [
  { range: '1–5 zgrada',  price: '7.600', highlight: false },
  { range: '6–20 zgrada', price: '6.600', highlight: true  },
  { range: '21+ zgrada',  price: '4.999', highlight: false },
]

const paidFeatures = [
  'Sve iz probnog perioda',
  'Upravljanje više zgrada',
  'Prioritetna podrška',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            Cene
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
            Transparentno i fer
          </h2>
          <p className="reveal reveal-d2 text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
            Počnite besplatno. Pretplatite se kada ste zadovoljni.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Free trial */}
          <div className="reveal relative rounded-2xl p-8 bg-white border-2 border-primary-600 shadow-[0_8px_32px_rgba(13,148,136,0.13)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                <Star className="w-3 h-3" />
                Počnite ovde
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-ink mb-2">Probni period</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-primary-600 tracking-tight">Besplatno</span>
              </div>
              <p className="text-sm text-slate-500">30 dana · sve funkcije · bez kreditne kartice</p>
            </div>

            <ul className="space-y-3 mb-8">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-600" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block text-center text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-6 py-3.5 transition-all hover:shadow-[0_4px_14px_rgba(13,148,136,0.32)] hover:-translate-y-px"
            >
              Počnite besplatno — 30 dana
            </a>
          </div>

          {/* Paid tiers */}
          <div className="reveal reveal-d2 rounded-2xl p-8 bg-slate-50 border border-slate-200">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-ink mb-1">Aktivna licenca</h3>
              <p className="text-sm text-slate-500">Godišnja pretplata · cena po zgradi</p>
            </div>

            {/* Tier table */}
            <div className="rounded-xl overflow-hidden border border-slate-200 mb-5">
              {tiers.map(({ range, price, highlight }) => (
                <div
                  key={range}
                  className={`flex items-center justify-between px-4 py-3 border-b border-slate-200 last:border-b-0 ${
                    highlight ? 'bg-primary-50' : 'bg-white'
                  }`}
                >
                  <span className={`text-sm font-medium ${highlight ? 'text-primary-700' : 'text-slate-600'}`}>
                    {range}
                  </span>
                  <div className="text-right">
                    <span className={`text-base font-extrabold ${highlight ? 'text-primary-600' : 'text-ink'}`}>
                      {price}
                    </span>
                    <span className="text-xs text-slate-400 ml-1">RSD / god</span>
                  </div>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5 mb-8">
              {paidFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-600" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block text-center text-sm font-semibold text-primary-600 bg-white hover:bg-primary-50 border border-primary-300 rounded-full px-6 py-3.5 transition-colors"
            >
              Počnite besplatno — bez kartice
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
