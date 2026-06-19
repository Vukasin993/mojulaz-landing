import { Check, Star } from '../ui/icons'
import { REGISTER_URL } from '../../constants/marketing'
import { useLang } from '../../i18n/LanguageContext'

const tiers = [
  { price: '7.600', monthly: '633', highlight: false },
  { price: '6.600', monthly: '550', highlight: true  },
  { price: '4.999', monthly: '416', highlight: false },
]

export default function Pricing() {
  const { t } = useLang()
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Promo banner */}
        <div className="reveal max-w-3xl mx-auto mb-10">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '14px 24px', borderRadius: 14, background: 'linear-gradient(135deg, #fef3c7, #fff7ed)', border: '1px solid rgba(245,158,11,0.3)', boxShadow: '0 2px 12px rgba(245,158,11,0.1)' }}>
            <span style={{ fontSize: 18 }}>🎁</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#92400e' }}>
              {t.pricing.promo}{' '}
              <span style={{ fontWeight: 800, color: '#d97706' }}>{t.pricing.promoStrong}</span>
              {' '}{t.pricing.promoEnd}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            {t.pricing.badge}
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
            {t.pricing.title}
          </h2>
          <p className="reveal reveal-d2 text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Free trial */}
          <div className="reveal relative rounded-2xl p-8 bg-white border-2 border-primary-600 shadow-[0_8px_32px_rgba(13,148,136,0.13)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                <Star className="w-3 h-3" />
                {t.pricing.startHere}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-ink mb-2">{t.pricing.trial}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-primary-600 tracking-tight">{t.pricing.free}</span>
              </div>
              <p className="text-sm text-slate-500">{t.pricing.trialSub}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {t.pricing.freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-600" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={REGISTER_URL}
              className="block w-full text-center text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-6 py-4 transition-all hover:shadow-[0_6px_20px_rgba(13,148,136,0.38)] hover:-translate-y-0.5 active:translate-y-0"
              style={{ fontSize: 15 }}
            >
              {t.pricing.trialCta}
            </a>
          </div>

          {/* Paid tiers */}
          <div className="reveal reveal-d2 rounded-2xl p-8 bg-slate-50 border border-slate-200">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-ink mb-1">{t.pricing.license}</h3>
              <p className="text-sm text-slate-500">{t.pricing.licenseSub}</p>
            </div>

            {/* Tier table */}
            <div className="rounded-xl overflow-hidden border border-slate-200 mb-5">
              {tiers.map(({ price, monthly, highlight }, index) => (
                <div
                  key={t.pricing.ranges[index]}
                  className={`flex items-center justify-between px-4 py-3 border-b border-slate-200 last:border-b-0 ${
                    highlight ? 'bg-primary-50' : 'bg-white'
                  }`}
                >
                  <span className={`text-sm font-medium ${highlight ? 'text-primary-700' : 'text-slate-600'}`}>
                    {t.pricing.ranges[index]}
                  </span>
                  <div className="text-right">
                    <div>
                      <span className={`text-base font-extrabold ${highlight ? 'text-primary-600' : 'text-ink'}`}>
                        {price}
                      </span>
                      <span className="text-xs text-slate-400 ml-1">{t.pricing.perYear}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">= {monthly} {t.pricing.perMonth}</div>
                  </div>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5 mb-8">
              {t.pricing.paidFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-600" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={REGISTER_URL}
              className="block w-full text-center text-sm font-semibold text-primary-600 bg-white hover:bg-primary-50 border border-primary-300 rounded-full px-6 py-3.5 transition-colors"
            >
              {t.pricing.paidCta}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
