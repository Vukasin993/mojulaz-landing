import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/layout/Footer'
import logoImg from '../assets/logo-icon.png'
import { ADMIN_PANEL_URL } from '../lib/links'
import { useLang } from '../i18n/LanguageContext'
import LangSwitcher from '../components/ui/LangSwitcher'

export default function AboutUs() {
  const { t } = useLang()
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Simple header */}
      <header className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.about.back}
          </Link>
          <div className="flex items-center gap-4">
            <LangSwitcher />
            <Link to="/" className="flex items-center">
              <img src={logoImg} alt="MojUlaz" className="h-8 w-auto object-contain" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white" style={{ paddingBottom: '0' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 bg-primary-50 text-primary-700 border border-primary-100">
              {t.about.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-tight mb-6">
              {t.about.titlePre}{' '}
              <span className="text-primary-600">{t.about.titleHighlight}</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              {t.about.intro}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="reveal text-3xl font-extrabold text-ink tracking-tight mb-6">{t.about.storyTitle}</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              {t.about.story.map((p) => (
                <p key={p.slice(0, 32)} className="reveal">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-ink">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {t.about.stats.map(({ value, label }) => (
                <div key={label} className="reveal">
                  <div className="text-4xl font-extrabold text-primary-400 mb-1">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
                {t.about.valuesTitle}
              </h2>
              <p className="reveal reveal-d1 text-slate-500 max-w-xl mx-auto">
                {t.about.valuesSub}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {t.about.values.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="reveal p-7 rounded-2xl border border-slate-200 bg-white hover:border-primary-200 hover:shadow-[0_16px_40px_rgba(13,148,136,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-2xl mb-5">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-primary-50/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
              {t.about.ctaTitle}
            </h2>
            <p className="reveal reveal-d1 text-slate-500 mb-8 max-w-xl mx-auto">
              {t.about.ctaSub}
            </p>
            <div className="reveal reveal-d2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={ADMIN_PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-7 py-3.5 transition-all hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)] hover:-translate-y-px"
              >
                {t.about.ctaPrimary}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center text-sm font-semibold text-primary-700 bg-white border border-primary-200 hover:bg-primary-50 rounded-full px-7 py-3.5 transition-all"
              >
                {t.about.ctaSecondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
