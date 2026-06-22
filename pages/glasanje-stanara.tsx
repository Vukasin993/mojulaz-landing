import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { REGISTER_URL } from '../src/constants/marketing'
import LanguageSwitcher from '../src/components/ui/LanguageSwitcher'
import { useLang } from '../src/i18n/LanguageContext'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno', title: 'Online glasanje stanara — MojUlaz aplikacija',
    badge: 'Glasanje stanara', h1: 'Online glasanje stanara', h1highlight: 'bez sazivanja skupštine',
    subtitle: 'Pokrenite anketu, stanari glasaju sa telefona, a rezultati stižu za par minuta. Transparentno donošenje odluka bez višečasovnih sastanaka.',
    problemTitle: 'Zašto su klasične skupštine problem?',
    problems: [
      { title: 'Trajanje', desc: 'Tipična skupština traje 2–3 sata. Većina stanara nema toliko vremena, pa se odluke donose sa malim brojem prisutnih.' },
      { title: 'Nedolazak', desc: 'Prosečna posećenost skupštine je 20–30%. Odluke koje se donesu nemaju podršku većine i često izazivaju nezadovoljstvo.' },
      { title: 'Netransparentnost', desc: 'Ko je glasao, kako i za šta — sve zavisi od zapisničara. Kasnije se često pojavljuju sporovi oko toga šta je zapravo odlučeno.' },
    ],
    howTitle: 'Kako funkcioniše glasanje u MojUlazu',
    steps: [
      { step: '1', title: 'Kreirajte anketu', desc: 'Upravnik kreira pitanje sa opcijama za glasanje. Može dodati opis, rok trajanja i oznaku prioriteta.' },
      { step: '2', title: 'Stanari glasaju', desc: 'Svi stanari dobijaju push notifikaciju. Glasaju direktno iz aplikacije sa jednim tapom — bilo kad, bilo gde.' },
      { step: '3', title: 'Rezultati odmah', desc: 'Rezultati su vidljivi u realnom vremenu. Upravnik i svi stanari vide procenat glasova i ko je glasao.' },
      { step: '4', title: 'Evidencija odluka', desc: 'Svaka anketa i rezultati ostaju u istoriji. Kompletna evidencija za dokumentaciju i eventualne sporove.' },
    ],
    useCasesTitle: 'Primeri glasanja u stambenim zajednicama',
    useCases: [
      { title: 'Popravka krova ili fasade', desc: 'Stanari glasaju o ponudi majstora, obimu radova i raspodeli troškova. Odluka za par sati umesto mesec dana.' },
      { title: 'Ugradnja lifta ili video nadzora', desc: 'Velika investicija zahteva saglasnost većine. Online glasanje obezbeđuje veću participaciju.' },
      { title: 'Izbor upravnika ili predsednika', desc: 'Tajno ili javno glasanje za izbor upravnika, predsednika skupštine ili članova saveta.' },
      { title: 'Pravila kućnog reda', desc: 'Glasanje o pravilima za kućne ljubimce, radno vreme za buku, korišćenje zajedničkih prostorija.' },
    ],
    faqTitle: 'Često postavljana pitanja',
    faq: [
      { q: 'Kako funkcioniše online glasanje stanara?', a: 'Upravnik kreira anketu sa pitanjem i opcijama. Stanari dobijaju push notifikaciju i glasaju direktno iz aplikacije. Rezultati su vidljivi u realnom vremenu.' },
      { q: 'Da li je online glasanje pravno validno?', a: 'MojUlaz je alat za donošenje odluka i prikupljanje mišljenja stanara. Za pravno obavezujuće skupštinske odluke, preporučujemo konsultaciju sa pravnim savetnikom u skladu sa Zakonom o stanovanju.' },
      { q: 'Mogu li da vidim ko je glasao?', a: 'Da. Upravnik vidi koji stanari su glasali i kako, što obezbeđuje transparentnost. Rezultati su dostupni svim stanarima.' },
      { q: 'Koliko anketa mogu da kreiram?', a: 'Neograničen broj. Možete kreirati ankete za bilo koju temu — od izbora boje fasade do odluke o ugradnji lifta.' },
      { q: 'Da li stanari moraju da instaliraju aplikaciju da bi glasali?', a: 'Da. Stanari glasaju putem MojUlaz mobilne aplikacije (iOS i Android). Instalacija je besplatna i traje manje od minut.' },
    ],
    linksTitle: 'Istražite ostale funkcionalnosti',
    links: [
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
      { href: '/stambene-zajednice', label: 'Stambene zajednice' },
      { href: '/prijava-kvarova', label: 'Prijava kvarova' },
      { href: '/finansije-zgrade', label: 'Finansije zgrade' },
    ],
    ctaTitle: 'Uvedite online glasanje u vašu zgradu', ctaSub: 'Besplatno 30 dana. Stanari glasaju sa telefona, rezultati za par minuta.', ctaBtn: 'Isprobajte besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free', title: 'Online resident voting — MojUlaz app',
    badge: 'Resident voting', h1: 'Online resident voting', h1highlight: 'without calling a meeting',
    subtitle: 'Start a poll, residents vote from their phones, and results arrive in minutes. Transparent decision-making without multi-hour meetings.',
    problemTitle: 'Why are traditional meetings a problem?',
    problems: [
      { title: 'Duration', desc: 'A typical meeting lasts 2–3 hours. Most residents don\'t have the time, so decisions are made by a small group.' },
      { title: 'Low turnout', desc: 'Average meeting attendance is 20–30%. Decisions lack majority support and often cause dissatisfaction.' },
      { title: 'Lack of transparency', desc: 'Who voted, how and for what — it all depends on the minutes-taker. Disputes about what was actually decided are common.' },
    ],
    howTitle: 'How voting works in MojUlaz',
    steps: [
      { step: '1', title: 'Create a poll', desc: 'The manager creates a question with voting options. Can add a description, deadline and priority label.' },
      { step: '2', title: 'Residents vote', desc: 'All residents receive a push notification. They vote directly in the app with a single tap — anytime, anywhere.' },
      { step: '3', title: 'Instant results', desc: 'Results are visible in real time. The manager and all residents see vote percentages and who voted.' },
      { step: '4', title: 'Decision records', desc: 'Every poll and its results stay in the history. Complete records for documentation and any future disputes.' },
    ],
    useCasesTitle: 'Voting examples in residential communities',
    useCases: [
      { title: 'Roof or facade repair', desc: 'Residents vote on contractor quotes, scope of work and cost distribution. Decision in hours instead of a month.' },
      { title: 'Lift or CCTV installation', desc: 'Major investments require majority consent. Online voting ensures higher participation.' },
      { title: 'Choosing a manager or president', desc: 'Secret or open ballot for choosing the manager, assembly president or council members.' },
      { title: 'House rules', desc: 'Voting on rules for pets, noise hours, use of common areas.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How does online resident voting work?', a: 'The manager creates a poll with a question and options. Residents receive a push notification and vote directly in the app. Results are visible in real time.' },
      { q: 'Is online voting legally valid?', a: 'MojUlaz is a tool for making decisions and gathering resident opinions. For legally binding assembly decisions, we recommend consulting a legal advisor.' },
      { q: 'Can I see who voted?', a: 'Yes. The manager sees which residents voted and how, ensuring transparency. Results are available to all residents.' },
      { q: 'How many polls can I create?', a: 'Unlimited. You can create polls on any topic — from choosing a facade colour to deciding on a lift installation.' },
      { q: 'Do residents need to install the app to vote?', a: 'Yes. Residents vote via the MojUlaz mobile app (iOS and Android). Installation is free and takes less than a minute.' },
    ],
    linksTitle: 'Explore other features',
    links: [
      { href: '/upravnici-zgrada', label: 'Manager software' },
      { href: '/stambene-zajednice', label: 'Residential communities' },
      { href: '/prijava-kvarova', label: 'Issue reporting' },
      { href: '/finansije-zgrade', label: 'Building finances' },
    ],
    ctaTitle: 'Introduce online voting in your building', ctaSub: 'Free for 30 days. Residents vote from their phones, results in minutes.', ctaBtn: 'Try for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: content.sr.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
}

const GlasanjeStanara: NextPage = () => {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content="Online glasanje stanara u stambenoj zajednici. Pokrenite anketu, stanari glasaju sa telefona, rezultati odmah. Bez višečasovnih skupština. Besplatno 30 dana." />
        <link rel="canonical" href="https://www.moj-ulaz.com/glasanje-stanara/" />
        <meta property="og:title" content="Online glasanje stanara — MojUlaz aplikacija" />
        <meta property="og:description" content="Online glasanje stanara u stambenoj zajednici. Ankete, odluke i rezultati — sve digitalno." />
        <meta property="og:url" content="https://www.moj-ulaz.com/glasanje-stanara/" />
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
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.howTitle}</h2>
            <div className="space-y-6">
              {c.steps.map((item) => (
                <div key={item.step} className="flex gap-5 items-start rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white text-lg font-bold flex items-center justify-center">{item.step}</span>
                  <div><h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.useCasesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.useCases.map((item) => (<div key={item.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>))}
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

export default GlasanjeStanara
