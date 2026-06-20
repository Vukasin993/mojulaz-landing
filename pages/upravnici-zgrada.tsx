import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { REGISTER_URL } from '../src/constants/marketing'
import LanguageSwitcher from '../src/components/ui/LanguageSwitcher'
import { useLang } from '../src/i18n/LanguageContext'

const content = {
  sr: {
    back: 'Nazad na početnu',
    cta: 'Počnite besplatno',
    title: 'Softver za upravnike zgrada — MojUlaz',
    badge: 'Softver za upravnike',
    h1: 'Alati za upravljanje zgradama',
    h1highlight: 'koji zaista rade za vas',
    subtitle: 'Kao upravnik, vaše vreme je najvrednije. MojUlaz automatizuje prijavu kvarova, obaveštenja, finansije i skupštine — da vi upravljate zgradama, ne Viber grupama.',
    painTitle: 'Problemi koje upravnici poznaju',
    pains: [
      { title: 'Viber haos', desc: 'Prijave kvarova, obaveštenja i pritužbe — sve u istom chatu. Nemoguće pratiti ko je šta rekao i šta je rešeno.' },
      { title: 'Papirologija', desc: 'Ugovori, zapisnici, računi — rasuti po fasciklama, mailovima i fiokama. Trošite sate na traženje dokumenta.' },
      { title: 'Pozivi non-stop', desc: 'Stanari zovu za svaku sitnicu jer nemaju drugi način da prijave problem ili provere status kvara.' },
    ],
    solutionTitle: 'Kako MojUlaz pomaže upravnicima',
    solutions: [
      { title: 'Prijava kvarova', desc: 'Stanari prijavljuju kvar sa fotografijom za 30 sekundi. Vi dobijate notifikaciju, dodeljujete tehničara i pratite status do rešenja.' },
      { title: 'Obaveštenja i komunikacija', desc: 'Jedno obaveštenje stiže svim stanarima odmah. Bez Viber grupa i papira na ulazu.' },
      { title: 'Finansije i fond', desc: 'Stanje fonda, uplate i rashodi u realnom vremenu — vidljivi svim stanarima. Transparentnost koja gradi poverenje.' },
      { title: 'Dokumentacija', desc: 'Ugovori, zapisnici i tehnička dokumentacija — centralno čuvanje sa brzim pretraživanjem. Uvek dostupno svima.' },
      { title: 'Glasanje i odluke', desc: 'Pokrenite anketu, stanari glasaju sa telefona. Rezultati za 5 minuta — bez tročasovnih skupština.' },
      { title: 'Upravljanje više zgrada', desc: 'Sve zgrade iz jednog naloga. Svaka ima sopstvenu ploču, stanare i istoriju. Idealno za agencije.' },
    ],
    faqTitle: 'Često postavljana pitanja',
    faq: [
      { q: 'Šta je MojUlaz?', a: 'MojUlaz je softver za upravljanje stambenim zgradama koji zamenjuje Viber grupe, papir i Excel tabele jednom platformom. Namenjen je upravnicima zgrada, predsednicima skupštine stanara i profesionalnim agencijama.' },
      { q: 'Da li mi treba tehničko znanje za korišćenje?', a: 'Ne. MojUlaz je dizajniran za upravnike bez tehničkog iskustva. Interfejs je intuitivan, a podrška na srpskom jeziku je dostupna radnim danima.' },
      { q: 'Koliko zgrada mogu da upravljam?', a: 'Neograničen broj. Svaka zgrada ima sopstvenu ploču, stanare, finansije i istoriju. Sve upravljate iz jednog naloga.' },
      { q: 'Koliko košta MojUlaz za upravnike?', a: 'MojUlaz košta 2.190 RSD po zgradi godišnje za upravnike sa 1–75 zgrada. Sve funkcionalnosti su uključene. Za veće agencije nudimo posebne uslove.' },
      { q: 'Kako funkcioniše probni period?', a: 'Prvih 30 dana je potpuno besplatno, bez kreditne kartice. Dobijate pristup svim funkcijama. Nakon toga se odlučujete da li želite da nastavite.' },
    ],
    linksTitle: 'Istražite MojUlaz funkcionalnosti',
    links: [
      { href: '/stambene-zajednice', label: 'Stambene zajednice' },
      { href: '/prijava-kvarova', label: 'Prijava kvarova' },
      { href: '/glasanje-stanara', label: 'Glasanje stanara' },
      { href: '/finansije-zgrade', label: 'Finansije zgrade' },
    ],
    ctaTitle: 'Spremni da upravljate zgradama profesionalno?',
    ctaSub: 'Pridružite se 500+ zgrada u Srbiji. Besplatno 30 dana, bez kreditne kartice.',
    ctaBtn: 'Registrujte se besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.',
    privacy: 'Politika privatnosti',
    terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home',
    cta: 'Start for free',
    title: 'Building management software — MojUlaz',
    badge: 'Manager software',
    h1: 'Building management tools',
    h1highlight: 'that actually work for you',
    subtitle: 'As a manager, your time is your most valuable asset. MojUlaz automates issue reporting, announcements, finances and meetings — so you manage buildings, not Viber groups.',
    painTitle: 'Problems every manager knows',
    pains: [
      { title: 'Viber chaos', desc: 'Issue reports, announcements and complaints — all in the same chat. Impossible to track who said what and what was resolved.' },
      { title: 'Paperwork', desc: 'Contracts, minutes, invoices — scattered across folders, emails and drawers. You spend hours searching for a single document.' },
      { title: 'Non-stop calls', desc: 'Residents call for every little thing because they have no other way to report a problem or check the status of a repair.' },
    ],
    solutionTitle: 'How MojUlaz helps managers',
    solutions: [
      { title: 'Issue reporting', desc: 'Residents report an issue with a photo in 30 seconds. You get a notification, assign a technician and track the status to resolution.' },
      { title: 'Announcements', desc: 'One announcement reaches every resident instantly. No Viber groups and no paper notices on the door.' },
      { title: 'Finances and fund', desc: 'Fund balance, payments and expenses in real time — visible to all residents. Transparency that builds trust.' },
      { title: 'Documents', desc: 'Contracts, minutes and technical documents — centrally stored with fast search. Always accessible to everyone.' },
      { title: 'Voting and decisions', desc: 'Start a poll, residents vote from their phones. Results in 5 minutes — no three-hour meetings.' },
      { title: 'Multi-building management', desc: 'All buildings from one account. Each has its own dashboard, residents and history. Ideal for agencies.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'What is MojUlaz?', a: 'MojUlaz is building management software that replaces Viber groups, paper and Excel with a single platform. Built for building managers, assembly presidents and professional agencies.' },
      { q: 'Do I need technical knowledge?', a: 'No. MojUlaz is designed for managers without technical experience. The interface is intuitive and support is available on business days.' },
      { q: 'How many buildings can I manage?', a: 'Unlimited. Each building has its own dashboard, residents, finances and history. You manage everything from one account.' },
      { q: 'How much does MojUlaz cost?', a: 'MojUlaz costs 2,190 RSD per building per year for managers with 1–75 buildings. All features are included. For larger agencies we offer custom terms.' },
      { q: 'How does the trial work?', a: 'The first 30 days are completely free, no credit card required. You get access to all features. After that, you decide whether to continue.' },
    ],
    linksTitle: 'Explore MojUlaz features',
    links: [
      { href: '/stambene-zajednice', label: 'Residential communities' },
      { href: '/prijava-kvarova', label: 'Issue reporting' },
      { href: '/glasanje-stanara', label: 'Resident voting' },
      { href: '/finansije-zgrade', label: 'Building finances' },
    ],
    ctaTitle: 'Ready to manage buildings professionally?',
    ctaSub: 'Join 500+ buildings in Serbia. Free for 30 days, no credit card.',
    ctaBtn: 'Register for free →',
    copy: '© 2026 MojUlaz. All rights reserved.',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: content.sr.faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const UpravniciZgrada: NextPage = () => {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content="MojUlaz je softver za upravnike stambenih zgrada u Srbiji. Prijava kvarova, obaveštenja, finansije i dokumentacija — sve na jednom mestu. Besplatno 30 dana." />
        <link rel="canonical" href="https://moj-ulaz.com/upravnici-zgrada/" />
        <meta property="og:title" content="Softver za upravnike zgrada — MojUlaz" />
        <meta property="og:description" content="Alati za upravljanje zgradama koji zamenjuju Viber grupe, papir i Excel. Besplatno 30 dana." />
        <meta property="og:url" content="https://moj-ulaz.com/upravnici-zgrada/" />
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
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.painTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.pains.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.solutionTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.solutions.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

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

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{c.linksTitle}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {c.links.map(({ href, label }) => (
                <Link key={href} href={href} className="rounded-xl border border-slate-200 hover:border-primary-300 hover:bg-primary-50 p-4 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors text-center">{label} →</Link>
              ))}
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

export default UpravniciZgrada
