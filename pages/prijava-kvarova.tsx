import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { REGISTER_URL } from '../src/constants/marketing'
import LanguageSwitcher from '../src/components/ui/LanguageSwitcher'
import { useLang } from '../src/i18n/LanguageContext'

const content = {
  sr: {
    back: 'Nazad na početnu', cta: 'Počnite besplatno', title: 'Prijava kvarova u zgradi — MojUlaz softver',
    badge: 'Prijava kvarova', h1: 'Prijava kvarova u zgradi', h1highlight: 'od prijave do rešenja',
    subtitle: 'Stanari prijavljuju kvar za 30 sekundi sa fotografijom. Upravnici prate svaki zahtev do rešenja — uz notifikacije, komentare i kompletnu istoriju.',
    problemTitle: 'Kako se kvarovi trenutno prijavljuju?',
    problems: [
      { title: 'Viber poruka', desc: 'Prijava kvara se izgubi među 47 poruka pre 8 ujutru. Niko ne zna ko je odgovoran i kada će biti rešeno.' },
      { title: 'Poziv telefonu', desc: 'Upravnik dobija pozive u bilo koje doba dana. Nema evidencije, nema prioriteta, nema sistema.' },
      { title: 'Papir na ulazu', desc: 'Stanar ostavi ceduljicu na tabli. Kiša, vetar ili komšije — poruka retko stigne do upravnika.' },
    ],
    howTitle: 'Kako funkcioniše prijava kvarova u MojUlazu',
    steps: [
      { step: '1', title: 'Stanar prijavi kvar', desc: 'Otvori aplikaciju, tapne "Prijavi kvar", doda fotografiju i kratak opis. Bira kategoriju — lift, vodoinstalacija, elektrika, zajednički prostor.' },
      { step: '2', title: 'Upravnik dobije notifikaciju', desc: 'Push notifikacija stiže odmah. Kvar se pojavljuje na kontrolnoj tabli sa svim detaljima, fotografijom i prioritetom.' },
      { step: '3', title: 'Dodeljivanje i praćenje', desc: 'Upravnik dodeli tehničara, postavi rok i dodaje komentare. Stanar vidi ko je odgovoran i kada se očekuje rešenje.' },
      { step: '4', title: 'Rešenje i evidencija', desc: 'Kada je kvar rešen, status se ažurira. Kompletna istorija — fotografije, komentari i datumi — ostaje u evidenciji.' },
    ],
    benefitsTitle: 'Prednosti sistema za prijavu kvarova',
    benefits: [
      { title: 'Foto dokumentacija', desc: 'Svaka prijava sadrži fotografiju kvara. Nema nesporazuma oko toga šta je problem i gde se nalazi.' },
      { title: 'Automatske notifikacije', desc: 'Upravnik, tehničar i stanar dobijaju obaveštenja pri svakoj promeni statusa. Niko ne mora da pita "šta je sa kvarom".' },
      { title: 'Kompletna istorija', desc: 'Svaki kvar ima evidenciju od prijave do rešenja. Korisno za godišnje izveštaje, osiguravajuće kuće i inspekcije.' },
      { title: 'Prioriteti i rokovi', desc: 'Hitni kvarovi se obeležavaju i rešavaju prvo. Rokovi pomažu da se ništa ne zaboravi.' },
    ],
    faqTitle: 'Često postavljana pitanja',
    faq: [
      { q: 'Kako stanari prijavljuju kvarove u MojUlazu?', a: 'Stanar otvori aplikaciju, tapne "Prijavi kvar", doda fotografiju, izabere kategoriju i napiše kratak opis. Ceo proces traje manje od 30 sekundi.' },
      { q: 'Kako upravnik vidi prijavljene kvarove?', a: 'Upravnik dobija push notifikaciju odmah po prijavi. Svi kvarovi su vidljivi na kontrolnoj tabli, filtrirani po statusu, prioritetu i zgradi.' },
      { q: 'Mogu li da pratim status kvara?', a: 'Da. Svaki kvar ima istoriju statusa — od prijave, preko dodeljenog tehničara, do rešenja. I stanar i upravnik vide ažuriranja u realnom vremenu.' },
      { q: 'Da li mogu da dodelim tehničara za kvar?', a: 'Da. Upravnik može dodeliti odgovornu osobu, postaviti rok i dodati komentare. Tehničar dobija notifikaciju sa svim detaljima.' },
      { q: 'Da li se kvarovi čuvaju za evidenciju?', a: 'Da. Kompletna istorija svih kvarova je dostupna — sa fotografijama, komentarima i datumima. Korisno za godišnje izveštaje i pregled održavanja.' },
    ],
    linksTitle: 'Istražite ostale funkcionalnosti',
    links: [
      { href: '/upravnici-zgrada', label: 'Softver za upravnike' },
      { href: '/stambene-zajednice', label: 'Stambene zajednice' },
      { href: '/glasanje-stanara', label: 'Glasanje stanara' },
      { href: '/finansije-zgrade', label: 'Finansije zgrade' },
    ],
    ctaTitle: 'Uvedite sistem za prijavu kvarova', ctaSub: 'Stanari prijavljuju kvar za 30 sekundi. Vi pratite sve do rešenja. Besplatno 30 dana.', ctaBtn: 'Isprobajte besplatno →',
    copy: '© 2026 MojUlaz. Sva prava zadržana.', privacy: 'Politika privatnosti', terms: 'Uslovi korišćenja',
  },
  en: {
    back: 'Back to home', cta: 'Start for free', title: 'Building issue reporting — MojUlaz software',
    badge: 'Issue reporting', h1: 'Building issue reporting', h1highlight: 'from report to resolution',
    subtitle: 'Residents report an issue in 30 seconds with a photo. Managers track every request to resolution — with notifications, comments and a complete history.',
    problemTitle: 'How are issues currently reported?',
    problems: [
      { title: 'Viber message', desc: 'The issue report gets lost among 47 messages before 8 am. Nobody knows who is responsible or when it will be fixed.' },
      { title: 'Phone call', desc: 'The manager gets calls at all hours. No records, no priorities, no system.' },
      { title: 'Paper on the door', desc: 'A resident leaves a note on the board. Rain, wind or neighbours — the message rarely reaches the manager.' },
    ],
    howTitle: 'How issue reporting works in MojUlaz',
    steps: [
      { step: '1', title: 'Resident reports an issue', desc: 'Opens the app, taps "Report issue", adds a photo and a short description. Picks a category — lift, plumbing, electrical, common area.' },
      { step: '2', title: 'Manager gets notified', desc: 'A push notification arrives immediately. The issue appears on the dashboard with all details, photo and priority.' },
      { step: '3', title: 'Assignment and tracking', desc: 'The manager assigns a technician, sets a deadline and adds comments. The resident sees who is responsible and when to expect a fix.' },
      { step: '4', title: 'Resolution and records', desc: 'When the issue is resolved, the status is updated. The complete history — photos, comments and dates — stays on record.' },
    ],
    benefitsTitle: 'Benefits of a proper issue reporting system',
    benefits: [
      { title: 'Photo documentation', desc: 'Every report includes a photo of the issue. No misunderstandings about what the problem is or where it is located.' },
      { title: 'Automatic notifications', desc: 'Manager, technician and resident are notified on every status change. Nobody has to ask "what about that issue?".' },
      { title: 'Complete history', desc: 'Every issue has a record from report to resolution. Useful for annual reports, insurance and inspections.' },
      { title: 'Priorities and deadlines', desc: 'Urgent issues are flagged and resolved first. Deadlines help ensure nothing is forgotten.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How do residents report issues in MojUlaz?', a: 'A resident opens the app, taps "Report issue", adds a photo, picks a category and writes a short description. The whole process takes under 30 seconds.' },
      { q: 'How does the manager see reported issues?', a: 'The manager receives a push notification immediately. All issues are visible on the dashboard, filtered by status, priority and building.' },
      { q: 'Can I track the status of an issue?', a: 'Yes. Every issue has a status history — from report, through technician assignment, to resolution. Both residents and managers see updates in real time.' },
      { q: 'Can I assign a technician to an issue?', a: 'Yes. The manager can assign a responsible person, set a deadline and add comments. The technician receives a notification with all the details.' },
      { q: 'Are issues saved for records?', a: 'Yes. The complete history of all issues is available — with photos, comments and dates. Useful for annual reports and maintenance reviews.' },
    ],
    linksTitle: 'Explore other features',
    links: [
      { href: '/upravnici-zgrada', label: 'Manager software' },
      { href: '/stambene-zajednice', label: 'Residential communities' },
      { href: '/glasanje-stanara', label: 'Resident voting' },
      { href: '/finansije-zgrade', label: 'Building finances' },
    ],
    ctaTitle: 'Introduce a proper issue reporting system', ctaSub: 'Residents report issues in 30 seconds. You track everything to resolution. Free for 30 days.', ctaBtn: 'Try for free →',
    copy: '© 2026 MojUlaz. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms of service',
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: content.sr.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
}

const PrijavaKvarova: NextPage = () => {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content="Sistem za prijavu i praćenje kvarova u stambenim zgradama. Stanari prijavljuju kvar za 30 sekundi, upravnici prate status do rešenja. Besplatno 30 dana." />
        <link rel="canonical" href="https://moj-ulaz.com/prijava-kvarova/" />
        <meta property="og:title" content="Prijava kvarova u zgradi — MojUlaz softver" />
        <meta property="og:description" content="Sistem za prijavu i praćenje kvarova u stambenim zgradama. Foto, opis, status — sve na jednom mestu." />
        <meta property="og:url" content="https://moj-ulaz.com/prijava-kvarova/" />
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
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{c.benefitsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.benefits.map((item) => (<div key={item.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>))}
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

export default PrijavaKvarova
