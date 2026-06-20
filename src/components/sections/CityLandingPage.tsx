import Head from 'next/head'
import Link from 'next/link'
import { REGISTER_URL } from '../../constants/marketing'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useLang } from '../../i18n/LanguageContext'

interface CityStrings {
  back: string
  cta: string
  title: string
  badge: string
  h1: string
  h1highlight: string
  intro: string[]
  challengesTitle: string
  challenges: { title: string; desc: string }[]
  solutionsTitle: string
  solutions: { title: string; desc: string }[]
  areasTitle: string
  areasIntro: string
  areas: { title: string; desc: string }[]
  faqTitle: string
  faq: { q: string; a: string }[]
  linksTitle: string
  links: { href: string; label: string }[]
  ctaTitle: string
  ctaSub: string
  ctaBtn: string
  copy: string
  privacy: string
  terms: string
}

export interface CityPageProps {
  content: { sr: CityStrings; en: CityStrings }
  metaDesc: string
  canonicalPath: string
  ogTitle: string
  ogDesc: string
}

export default function CityLandingPage({ content, metaDesc, canonicalPath, ogTitle, ogDesc }: CityPageProps) {
  const { lang } = useLang()
  const c = content[lang]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.sr.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://moj-ulaz.com${canonicalPath}`} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDesc} />
        <meta property="og:url" content={`https://moj-ulaz.com${canonicalPath}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <div className="bg-white min-h-screen">
        <header className="border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              {c.back}
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a href={REGISTER_URL} className="text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-5 py-2.5 transition-colors">{c.cta}</a>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">{c.badge}</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {c.h1}<br /><span className="text-primary-600">{c.h1highlight}</span>
            </h1>
            <div className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-4">
              {c.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          {/* Challenges */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.challengesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.challenges.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.solutionsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.solutions.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* City areas */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.areasTitle}</h2>
            <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">{c.areasIntro}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.areas.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-slate-200 p-5">
                  <summary className="text-base font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                    {item.q}
                    <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{c.linksTitle}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {c.links.map(({ href, label }) => (
                <Link key={href} href={href} className="rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50 p-4 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors text-center">
                  {label} →
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center rounded-2xl bg-primary-600 p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{c.ctaTitle}</h2>
            <p className="text-primary-100 mb-8 max-w-lg mx-auto">{c.ctaSub}</p>
            <a href={REGISTER_URL} className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 bg-white hover:bg-primary-50 rounded-full px-8 py-4 transition-colors">{c.ctaBtn}</a>
          </section>
        </main>

        <footer className="bg-slate-900 py-8 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">{c.copy}</p>
            <div className="flex gap-5">
              <Link href="/politika-privatnosti" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">{c.privacy}</Link>
              <Link href="/uslovi-koriscenja" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">{c.terms}</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
