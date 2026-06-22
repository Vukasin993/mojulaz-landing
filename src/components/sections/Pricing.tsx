import { useState } from 'react'
import { Check, Star } from '../ui/icons'
import { REGISTER_URL } from '../../constants/marketing'
import { useLang } from '../../i18n/LanguageContext'

const NET_PRICE_PER_BUILDING = 2190
const VAT_RATE = 0.2
const MAX_STANDARD_BUILDINGS = 75

export default function Pricing() {
  const { t, lang } = useLang()
  const [buildingCount, setBuildingCount] = useState(10)
  const isEnterprise = buildingCount > MAX_STANDARD_BUILDINGS
  const vatPerBuilding = NET_PRICE_PER_BUILDING * VAT_RATE
  const netTotal = NET_PRICE_PER_BUILDING * buildingCount
  const vatTotal = vatPerBuilding * buildingCount
  const annualTotal = netTotal + vatTotal
  const monthlyTotal = annualTotal / 12
  const numberFormatter = new Intl.NumberFormat(lang === 'sr' ? 'sr-Latn-RS' : 'en-US', {
    maximumFractionDigits: 0,
  })

  const updateBuildingCount = (value: number) => {
    if (Number.isNaN(value)) return
    setBuildingCount(Math.min(Math.max(Math.round(value), 1), 999))
  }

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
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6 max-w-5xl mx-auto">

          {/* Price calculator */}
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
              <p className="text-xs font-semibold text-slate-500">{t.pricing.vatNote}</p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 mb-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <label htmlFor="building-count" className="text-sm font-bold text-ink">
                  {t.pricing.calculatorLabel}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="building-count"
                    type="number"
                    min="1"
                    max="999"
                    value={buildingCount}
                    onChange={(event) => updateBuildingCount(event.target.valueAsNumber)}
                    className="w-20 rounded-xl border border-slate-300 bg-white px-3 py-2 text-center text-base font-extrabold text-ink outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                  />
                  <span className="text-sm text-slate-500">{t.pricing.buildingsUnit}</span>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="76"
                value={Math.min(buildingCount, 76)}
                onChange={(event) => updateBuildingCount(Number(event.target.value))}
                aria-label={t.pricing.calculatorLabel}
                className="pricing-range w-full mb-2"
              />
              <div className="flex justify-between text-xs font-medium text-slate-400">
                <span>1</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>76+</span>
              </div>
            </div>

            {isEnterprise ? (
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6 mb-6 text-center">
                <p className="text-lg font-extrabold text-ink mb-2">{t.pricing.enterpriseCalculatorTitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t.pricing.enterpriseCalculatorDesc}</p>
              </div>
            ) : (
              <div className="rounded-2xl bg-primary-700 p-6 mb-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-100 mb-2">
                  {t.pricing.annualTotalLabel}
                </p>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {numberFormatter.format(annualTotal)}
                  </span>
                  <span className="text-sm font-semibold text-primary-100">{t.pricing.rsdYear}</span>
                </div>
                <div className="space-y-2 border-t border-white/15 pt-4 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-primary-100">{t.pricing.netLabel}</span>
                    <span className="font-semibold">{numberFormatter.format(netTotal)} RSD</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-primary-100">{t.pricing.vatLabel}</span>
                    <span className="font-semibold">{numberFormatter.format(vatTotal)} RSD</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-primary-100">{t.pricing.monthlyLabel}</span>
                    <span className="font-semibold">{numberFormatter.format(monthlyTotal)} RSD</span>
                  </div>
                </div>
              </div>
            )}

            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
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
              href={isEnterprise ? 'mailto:info@moj-ulaz.com?subject=Ponuda%20za%2076%2B%20zgrada' : REGISTER_URL}
              className="block w-full text-center text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-6 py-4 transition-all hover:shadow-[0_6px_20px_rgba(13,148,136,0.38)] hover:-translate-y-0.5 active:translate-y-0"
              style={{ fontSize: 15 }}
            >
              {isEnterprise ? t.pricing.enterpriseCta : t.pricing.singleCta}
            </a>

            <p className="text-xs text-center text-slate-400 mt-3">{t.pricing.trialNote}</p>
          </div>

          {/* Pricing explanation */}
          <div className="reveal reveal-d2 rounded-2xl p-8 bg-slate-50 border border-slate-200 flex flex-col">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-ink mb-1">{t.pricing.enterpriseTitle}</h3>
              <p className="text-sm text-slate-500">{t.pricing.enterpriseScope}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {t.pricing.enterpriseDesc}
            </p>

            <div className="rounded-xl bg-white border border-slate-200 p-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {t.pricing.perBuildingBreakdown}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-3 text-slate-600">
                  <span>{t.pricing.netLabel}</span>
                  <strong className="text-ink">2.190 RSD</strong>
                </div>
                <div className="flex justify-between gap-3 text-slate-600">
                  <span>{t.pricing.vatLabel}</span>
                  <strong className="text-ink">438 RSD</strong>
                </div>
                <div className="flex justify-between gap-3 border-t border-slate-100 pt-2 text-slate-700">
                  <span>{t.pricing.totalLabel}</span>
                  <strong className="text-primary-700">2.628 RSD</strong>
                </div>
              </div>
            </div>

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
