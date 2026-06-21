import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { REGISTER_URL } from '../src/constants/marketing'
import LanguageSwitcher from '../src/components/ui/LanguageSwitcher'
import { useLang } from '../src/i18n/LanguageContext'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno', title: 'Finansije stambene zajednice — MojUlaz softver',
    badge: 'Finansije zgrade', h1: 'Finansije stambene zajednice', h1highlight: 'transparentne svim stanarima',
    subtitle: 'Stanje fonda, uplate i rashodi u realnom vremenu. Svaki stanar vidi na šta novac odlazi — bez Excel tabela, bez sumnji, bez pitanja "gde ide novac".',
    problemTitle: 'Zašto su finansije zgrade čest izvor sukoba?',
    problems: [
      { title: 'Netransparentnost', desc: 'Stanari ne znaju koliko je u fondu, na šta se troši i ko duguje. To stvara nepoverenje i konflikte na skupštinama.' },
      { title: 'Zastareli podaci', desc: 'Excel tabele zastarevaju čim se naprave. Upravnik ih ažurira jednom mesečno — ako uopšte stigne.' },
      { title: 'Pitanja non-stop', desc: '"Koliko imam dugovanje?" "Kad je poslednja uplata?" — upravnik troši sate na odgovaranje pitanja koja bi aplikacija rešila.' },
    ],
    featuresTitle: 'Finansijske funkcionalnosti MojUlaza',
    features: [
      { title: 'Stanje fonda u realnom vremenu', desc: 'Trenutno stanje fonda vidljivo na početnom ekranu. Ažurira se automatski pri svakoj transakciji.' },
      { title: 'Prihodi i rashodi', desc: 'Jasno razdvojeni prihodi (uplate stanara) i rashodi (održavanje, komunalije, popravke). Mesečni pregled za celu godinu.' },
      { title: 'Dugovanja po stanovima', desc: 'Upravnik vidi dugovanja svakog stana. Stanari vide sopstveni status — koliko duguju i za koji period.' },
      { title: 'PDF finansijski izveštaji', desc: 'Generišite mesečne i godišnje izveštaje jednim klikom. Korisno za skupštine, inspekcije i poreske obaveze.' },
      { title: 'Transparentnost za stanare', desc: 'Svi stanari vide na šta se novac troši. Manje pitanja, manje sporova, više poverenja u upravu.' },
      { title: 'Istorija transakcija', desc: 'Kompletna evidencija svih uplata i rashoda. Pretraživo po datumu, kategoriji i iznosu.' },
    ],
    faqTitle: 'Često postavljana pitanja',
    faq: [
      { q: 'Kako funkcionišu finansije zgrade u MojUlazu?', a: 'MojUlaz prikazuje stanje fonda, uplate i rashode u realnom vremenu. Upravnik unosi transakcije, a svi stanari vide na šta se novac troši. Potpuna transparentnost bez Excel tabela.' },
      { q: 'Da li stanari vide stanje fonda?', a: 'Da. Stanje fonda je vidljivo svim stanarima na početnom ekranu aplikacije. Prihodi i rashodi su jasno razdvojeni sa mesečnim pregledom.' },
      { q: 'Mogu li da vidim dugovanja po stanovima?', a: 'Da. Upravnik ima pregled dugovanja po svakom stanu. Stanari vide sopstveni status — koliko duguju i za koji period.' },
      { q: 'Da li mogu da generišem finansijske izveštaje?', a: 'Da. MojUlaz omogućava generisanje mesečnih i godišnjih finansijskih izveštaja u PDF formatu. Korisno za skupštine i inspekcije.' },
      { q: 'Da li MojUlaz zamenjuje računovodstveni softver?', a: 'MojUlaz je alat za transparentno praćenje finansija stambene zajednice. Za detaljno knjigovodstvo i poreske obaveze, preporučujemo korišćenje sa profesionalnim računovodstvenim softverom.' },
    ],
    linksTitle: 'Istražite ostale funkcionalnosti',
    links: [
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
      { href: '/stambene-zajednice', label: 'Stambene zajednice' },
      { href: '/prijava-kvarova', label: 'Prijava kvarova' },
      { href: '/glasanje-stanara', label: 'Glasanje stanara' },
    ],
    ctaTitle: 'Uvedite transparentne finansije u vašu zgradu', ctaSub: 'Fond, uplate i rashodi vidljivi svim stanarima. Besplatno 30 dana, bez kreditne kartice.', ctaBtn: 'Isprobajte besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free', title: 'Building finances — MojUlaz software',
    badge: 'Building finances', h1: 'Residential community finances', h1highlight: 'transparent to all residents',
    subtitle: 'Fund balance, payments and expenses in real time. Every resident sees where the money goes — no spreadsheets, no doubts, no "where does the money go?".',
    problemTitle: 'Why are building finances a common source of conflict?',
    problems: [
      { title: 'Lack of transparency', desc: 'Residents don\'t know the fund balance, what money is spent on or who owes what. This breeds mistrust and meeting conflicts.' },
      { title: 'Outdated data', desc: 'Spreadsheets go stale the moment they\'re created. Managers update them monthly — if they get around to it.' },
      { title: 'Non-stop questions', desc: '"How much do I owe?" "When was the last payment?" — managers spend hours answering questions an app could handle.' },
    ],
    featuresTitle: 'MojUlaz financial features',
    features: [
      { title: 'Real-time fund balance', desc: 'Current fund balance visible on the home screen. Updates automatically with every transaction.' },
      { title: 'Income and expenses', desc: 'Clearly separated income (resident payments) and expenses (maintenance, utilities, repairs). Monthly overview for the full year.' },
      { title: 'Balances by flat', desc: 'Managers see each flat\'s balance. Residents see their own status — how much they owe and for which period.' },
      { title: 'PDF financial reports', desc: 'Generate monthly and annual reports with one click. Useful for meetings, inspections and tax obligations.' },
      { title: 'Transparency for residents', desc: 'All residents see what the money is spent on. Fewer questions, fewer disputes, more trust in management.' },
      { title: 'Transaction history', desc: 'Complete record of all payments and expenses. Searchable by date, category and amount.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How do building finances work in MojUlaz?', a: 'MojUlaz displays the fund balance, payments and expenses in real time. The manager enters transactions and all residents see where the money goes. Full transparency without spreadsheets.' },
      { q: 'Can residents see the fund balance?', a: 'Yes. The fund balance is visible to all residents on the app\'s home screen. Income and expenses are clearly separated with a monthly overview.' },
      { q: 'Can I see balances by flat?', a: 'Yes. Managers have a balance overview for every flat. Residents see their own status — how much they owe and for which period.' },
      { q: 'Can I generate financial reports?', a: 'Yes. MojUlaz lets you generate monthly and annual financial reports in PDF format. Useful for meetings and inspections.' },
      { q: 'Does MojUlaz replace accounting software?', a: 'MojUlaz is a tool for transparent financial tracking of residential communities. For detailed bookkeeping and tax obligations, we recommend pairing it with professional accounting software.' },
    ],
    linksTitle: 'Explore other features',
    links: [
      { href: '/upravnici-zgrada', label: 'Manager software' },
      { href: '/stambene-zajednice', label: 'Residential communities' },
      { href: '/prijava-kvarova', label: 'Issue reporting' },
      { href: '/glasanje-stanara', label: 'Resident voting' },
    ],
    ctaTitle: 'Introduce transparent finances in your building', ctaSub: 'Fund, payments and expenses visible to all residents. Free for 30 days, no credit card.', ctaBtn: 'Try for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: content.sr.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
}

const FinansijeZgrade: NextPage = () => {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content="Transparentno praćenje finansija stambene zajednice. Fond zgrade, uplate, rashodi i dugovanja — sve vidljivo stanarima u realnom vremenu. Besplatno 30 dana." />
        <link rel="canonical" href="https://www.moj-ulaz.com/finansije-zgrade/" />
        <meta property="og:title" content="Finansije stambene zajednice — MojUlaz softver" />
        <meta property="og:description" content="Transparentno praćenje finansija zgrade. Fond, uplate i rashodi — vidljivo svim stanarima u realnom vremenu." />
        <meta property="og:url" content="https://www.moj-ulaz.com/finansije-zgrade/" />
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
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">{c.badge}</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">{c.h1}<br /><span className="text-primary-600">{c.h1highlight}</span></h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.problemTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.problems.map((item) => (<div key={item.title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.featuresTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.features.map((item) => (<div key={item.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.faqTitle}</h2>
            <div className="space-y-4">
              {c.faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-slate-200 p-5">
                  <summary className="text-base font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between">{item.q}<svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{c.linksTitle}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {c.links.map(({ href, label }) => (<Link key={href} href={href} className="rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50 p-4 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors text-center">{label} →</Link>))}
            </div>
          </section>

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

export default FinansijeZgrade
