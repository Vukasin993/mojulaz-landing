import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { REGISTER_URL } from '../src/constants/marketing'
import LanguageSwitcher from '../src/components/ui/LanguageSwitcher'
import { useLang } from '../src/i18n/LanguageContext'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno', title: 'Upravljanje stambenim zajednicama — MojUlaz',
    badge: 'Stambene zajednice',
    h1: 'Digitalizacija stambene zajednice', h1highlight: 'koja zaista funkcioniše',
    subtitle: 'MojUlaz povezuje stanare i upravnike u jednoj platformi. Obaveštenja, prijava kvarova, finansije i glasanja — transparentno i dostupno svima.',
    whyTitle: 'Zašto digitalizovati stambenu zajednicu?',
    whyItems: [
      { title: 'Transparentnost', desc: 'Svi stanari vide stanje fonda, rashode i odluke. Nema više pitanja "gde ide novac" jer je svaki dinar vidljiv.' },
      { title: 'Bolja komunikacija', desc: 'Obaveštenja stižu svim stanarima istog trenutka sa potvrdom čitanja. Kraj papirima na ulazu i nepročitanim Viber porukama.' },
      { title: 'Brže rešavanje problema', desc: 'Kvarovi se prijavljuju sa fotografijom, prate do rešenja, a svi zainteresovani vide status u realnom vremenu.' },
    ],
    whatTitle: 'Šta dobija vaša stambena zajednica',
    whatItems: [
      { title: 'Obaveštenja za sve stanare', desc: 'Push notifikacije na telefon. Kategorije po hitnosti — kritično, važno, normalno. Potvrda ko je pročitao.' },
      { title: 'Prijava i praćenje kvarova', desc: 'Stanar prijavi kvar za 30 sekundi. Upravnik dobije notifikaciju, dodeli tehničara, a stanar prati status.' },
      { title: 'Online glasanje', desc: 'Ankete i glasanja direktno iz aplikacije. Rezultati odmah vidljivi. Bez višečasovnih skupština stanara.' },
      { title: 'Fond i finansije', desc: 'Stanje fonda, prihodi i rashodi u realnom vremenu. Mesečni pregled za celu godinu. Vidljivo svim stanarima.' },
      { title: 'Dokumentacija zgrade', desc: 'Ugovori, zapisnici, tehnička dokumentacija. Centralno, pretraživo, dostupno sa bilo kog uređaja.' },
      { title: 'Mobilna aplikacija za stanare', desc: 'Stanari koriste besplatnu mobilnu aplikaciju na iOS-u i Android-u. Admin panel je namenjen isključivo upravnicima.' },
    ],
    faqTitle: 'Često postavljana pitanja',
    faq: [
      { q: 'Šta znači digitalizacija stambene zajednice?', a: 'Digitalizacija stambene zajednice znači prelazak sa papira, Viber grupa i ličnih dolazaka na jednu platformu gde se sve obavlja digitalno — prijava kvarova, obaveštenja, glasanja, finansije i dokumentacija.' },
      { q: 'Da li stanari moraju da instaliraju aplikaciju?', a: 'Da. Stanari koriste MojUlaz mobilnu aplikaciju (iOS i Android) za prijavu kvarova, glasanje i pregled obaveštenja. Admin panel je namenjen isključivo upravnicima.' },
      { q: 'Kako stambena zajednica počinje sa korišćenjem?', a: 'Upravnik se registruje, dodaje zgradu i dobija kod za ulaz u zgradu. Stanari preuzmu aplikaciju i ukucaju kod prilikom prijave. Ceo proces traje par minuta.' },
      { q: 'Da li stariji stanari mogu da koriste MojUlaz?', a: 'Da. Mobilna aplikacija je dizajnirana da bude jednostavna za sve uzraste. Instalacija traje manje od minut, a interfejs je intuitivan i na srpskom jeziku.' },
      { q: 'Koliko košta digitalizacija stambene zajednice?', a: 'MojUlaz košta 2.190 RSD + PDV po zgradi godišnje (2.628 RSD sa PDV-om). Probni period od 30 dana je besplatan, bez kreditne kartice. Sve funkcionalnosti su uključene od prvog dana.' },
    ],
    linksTitle: 'Saznajte više',
    links: [
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
      { href: '/prijava-kvarova', label: 'Prijava kvarova' },
      { href: '/glasanje-stanara', label: 'Glasanje stanara' },
      { href: '/finansije-zgrade', label: 'Finansije zgrade' },
    ],
    ctaTitle: 'Digitalizujte vašu stambenu zajednicu', ctaSub: 'Besplatno 30 dana, bez kreditne kartice. Podešavanje za 10 minuta.', ctaBtn: 'Registrujte se besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free', title: 'Residential community management — MojUlaz',
    badge: 'Residential communities',
    h1: 'Residential community digitalization', h1highlight: 'that actually works',
    subtitle: 'MojUlaz connects residents and managers in one platform. Announcements, issue reporting, finances and voting — transparent and accessible to everyone.',
    whyTitle: 'Why digitalize your residential community?',
    whyItems: [
      { title: 'Transparency', desc: 'All residents see the fund balance, expenses and decisions. No more "where does the money go" — every dinar is visible.' },
      { title: 'Better communication', desc: 'Announcements reach every resident instantly with read receipts. No more paper notices or unread Viber messages.' },
      { title: 'Faster problem resolution', desc: 'Issues are reported with a photo, tracked to resolution, and everyone can see the status in real time.' },
    ],
    whatTitle: 'What your residential community gets',
    whatItems: [
      { title: 'Announcements for all residents', desc: 'Push notifications to phones. Priority categories — critical, important, normal. Read confirmations included.' },
      { title: 'Issue reporting and tracking', desc: 'Residents report an issue in 30 seconds. Managers get notified, assign a technician, and residents track the status.' },
      { title: 'Online voting', desc: 'Polls and voting directly in the app. Results visible immediately. No multi-hour resident meetings.' },
      { title: 'Fund and finances', desc: 'Fund balance, income and expenses in real time. Monthly overview for the full year. Visible to all residents.' },
      { title: 'Building documents', desc: 'Contracts, minutes, technical documentation. Central, searchable, accessible from any device.' },
      { title: 'Mobile app for residents', desc: 'Residents use the free mobile app on iOS and Android. The admin panel is for managers only.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'What does digitalizing a residential community mean?', a: 'It means switching from paper, Viber groups and in-person visits to a single platform where everything is handled digitally — issue reporting, announcements, voting, finances and documents.' },
      { q: 'Do residents have to install the app?', a: 'Yes. Residents use the MojUlaz mobile app (iOS and Android) to report issues, vote and read announcements. The admin panel is for managers only.' },
      { q: 'How does a residential community get started?', a: 'The manager registers, adds a building and receives a building entry code. Residents download the app and enter the code when signing in. The entire process takes a few minutes.' },
      { q: 'Can older residents use MojUlaz?', a: 'Yes. The mobile app is designed to be simple for all ages. Installation takes less than a minute and the interface is intuitive.' },
      { q: 'How much does it cost?', a: 'MojUlaz costs 2,190 RSD plus VAT per building per year (2,628 RSD including VAT). The 30-day trial is free, no credit card required. All features are included from day one.' },
    ],
    linksTitle: 'Learn more',
    links: [
      { href: '/upravnici-zgrada', label: 'Manager software' },
      { href: '/prijava-kvarova', label: 'Issue reporting' },
      { href: '/glasanje-stanara', label: 'Resident voting' },
      { href: '/finansije-zgrade', label: 'Building finances' },
    ],
    ctaTitle: 'Digitalize your residential community', ctaSub: 'Free for 30 days, no credit card. Set up in 10 minutes.', ctaBtn: 'Register for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: content.sr.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
}

const StambeneZajednice: NextPage = () => {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content="Digitalizujte upravljanje stambenom zajednicom. Komunikacija stanara, obaveštenja, prijava kvarova i glasanja — sve u jednoj aplikaciji. Besplatno 30 dana." />
        <link rel="canonical" href="https://www.moj-ulaz.com/stambene-zajednice/" />
        <meta property="og:title" content="Upravljanje stambenim zajednicama — MojUlaz" />
        <meta property="og:description" content="Digitalizujte upravljanje stambenom zajednicom. Komunikacija, obaveštenja i glasanja u jednoj aplikaciji." />
        <meta property="og:url" content="https://www.moj-ulaz.com/stambene-zajednice/" />
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
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.whyTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.whyItems.map((item) => (<div key={item.title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.whatTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.whatItems.map((item) => (<div key={item.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>))}
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
            <p className="text-xs text-slate-500">
              {c.copy}{' '}
              <a href="https://convertixdigital.com/en" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-400 hover:text-primary-400 transition-colors">ConvertixDigital</a>
            </p>
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

export default StambeneZajednice
