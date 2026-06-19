import { Check, Star } from '../ui/icons'
import { REGISTER_URL } from '../../constants/marketing'
import { useLang } from '../../i18n/LanguageContext'

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

          {/* Single price */}
          <div className="reveal relative rounded-2xl p-8 bg-white border-2 border-primary-600 shadow-[0_8px_32px_rgba(13,148,136,0.13)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                <Star className="w-3 h-3" />
                {t.pricing.singleBadge}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-ink mb-1">{t.pricing.singleTitle}</h3>
              <p className="text-sm text-slate-500 mb-4">{t.pricing.singleScope}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold text-primary-600 tracking-tight">2.190</span>
                <span className="text-sm font-medium text-slate-500">{t.pricing.singleUnit}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {t.pricing.singleFeatures.map((f) => (
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
              {t.pricing.singleCta}
            </a>

            <p className="text-xs text-center text-slate-400 mt-3">{t.pricing.trialNote}</p>
          </div>

          {/* Enterprise */}
          <div className="reveal reveal-d2 rounded-2xl p-8 bg-slate-50 border border-slate-200 flex flex-col">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-ink mb-1">{t.pricing.enterpriseTitle}</h3>
              <p className="text-sm text-slate-500">{t.pricing.enterpriseScope}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {t.pricing.enterpriseDesc}
            </p>

            <ul className="space-y-3 mb-8">
              {t.pricing.enterpriseFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-600" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="mailto:info@moj-ulaz.com"
              className="mt-auto block w-full text-center text-sm font-semibold text-primary-600 bg-white hover:bg-primary-50 border border-primary-300 rounded-full px-6 py-3.5 transition-colors"
            >
              {t.pricing.enterpriseCta}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
