import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-icon.png'
import { useLang } from '../i18n/LanguageContext'
import LangSwitcher from '../components/ui/LangSwitcher'
import type { Lang } from '../i18n/translations'

const EMAIL = 'info@moj-ulaz.com'
const emailLink = <a href={`mailto:${EMAIL}`} className="text-primary-600 hover:underline">{EMAIL}</a>

interface Section { title: string; body: ReactNode }
interface PageContent {
  back: string
  title: string
  updated: string
  copyright: string
  sections: Section[]
}

const content: Record<Lang, PageContent> = {
  sr: {
    back: 'Nazad na početnu',
    title: 'Politika privatnosti',
    updated: 'Poslednje ažuriranje: jun 2026.',
    copyright: 'Sva prava zadržana.',
    sections: [
      {
        title: '1. Ko smo mi',
        body: (
          <p>
            MojUlaz je softverska platforma za upravljanje stambenim zgradama i kondominijumima,
            razvijena i u vlasništvu kompanije MojUlaz d.o.o., Srbija. Ova politika privatnosti
            opisuje kako prikupljamo, koristimo i štitimo vaše lične podatke.
          </p>
        ),
      },
      {
        title: '2. Koji podaci se prikupljaju',
        body: (
          <>
            <p>Prikupljamo sledeće vrste podataka:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Podaci o nalogu:</strong> ime, prezime, email adresa, broj telefona.</li>
              <li><strong>Podaci o zgradi:</strong> adresa, broj stanova, podaci o stanovima i stanarima koje vi unesete.</li>
              <li><strong>Podaci o plaćanjima:</strong> istorija troškova i naknada — kartični podaci se obrađuju isključivo putem Stripe i mi ih ne čuvamo.</li>
              <li><strong>Tehnički podaci:</strong> IP adresa, tip pretraživača, vreme pristupa (standardni serverski logovi).</li>
            </ul>
          </>
        ),
      },
      {
        title: '3. Kako koristimo vaše podatke',
        body: (
          <>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pružanje i unapređivanje usluge MojUlaz.</li>
              <li>Slanje obaveštenja vezanih za vašu zgradu i nalog.</li>
              <li>Odgovaranje na vaše upite i pružanje korisničke podrške.</li>
              <li>Ispunjavanje zakonskih obaveza.</li>
            </ul>
            <p className="mt-3">Vaše podatke <strong>ne prodajemo</strong> i ne delimo ih sa trećim stranama u marketinške svrhe.</p>
          </>
        ),
      },
      {
        title: '4. Čuvanje i bezbednost podataka',
        body: (
          <p>
            Podaci se čuvaju na serverima unutar EU. Koristimo enkripciju u prenosu (HTTPS/TLS)
            i u mirovanju. Pristup podacima je ograničen samo na zaposlene koji ga zahtevaju
            za obavljanje posla.
          </p>
        ),
      },
      {
        title: '5. Kolačići (Cookies)',
        body: (
          <>
            <p>
              Koristimo neophodne kolačiće za funkcionisanje aplikacije (sesija, autentifikacija) i —
              isključivo uz vašu saglasnost — analitičke kolačiće (Google Analytics) koji nam pomažu
              da razumemo kako se sajt koristi. Ne koristimo reklamne kolačiće.
            </p>
            <p className="mt-3">
              Saglasnošću upravljate putem Cookiebot banera pri prvoj poseti, a izbor možete
              izmeniti ili povući u bilo kom trenutku. Bez vaše saglasnosti analitički kolačići
              se ne postavljaju.
            </p>
          </>
        ),
      },
      {
        title: '6. Vaša prava',
        body: (
          <>
            <p>U skladu sa GDPR i srpskim Zakonom o zaštiti podataka o ličnosti, imate pravo da:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Zatražite uvid u podatke koje čuvamo o vama.</li>
              <li>Ispravite netačne podatke.</li>
              <li>Zatražite brisanje vaših podataka.</li>
              <li>Uložite prigovor na obradu podataka.</li>
            </ul>
            <p className="mt-3">Za ostvarivanje prava pišite na: {emailLink}</p>
          </>
        ),
      },
      {
        title: '7. Promene politike',
        body: (
          <p>
            Zadržavamo pravo izmene ove politike. O značajnim promenama bićete obavešteni
            putem email-a ili unutar same aplikacije. Nastavkom korišćenja usluge prihvatate
            ažuriranu politiku.
          </p>
        ),
      },
      {
        title: '8. Kontakt',
        body: (
          <p>
            Za sva pitanja u vezi sa privatnošću:<br />
            <strong>MojUlaz d.o.o.</strong><br />
            Email: {emailLink}
          </p>
        ),
      },
    ],
  },

  en: {
    back: 'Back to home',
    title: 'Privacy Policy',
    updated: 'Last updated: June 2026',
    copyright: 'All rights reserved.',
    sections: [
      {
        title: '1. Who we are',
        body: (
          <p>
            MojUlaz is a software platform for managing residential buildings and condominiums,
            developed and owned by MojUlaz d.o.o., Serbia. This privacy policy describes how we
            collect, use and protect your personal data.
          </p>
        ),
      },
      {
        title: '2. What data we collect',
        body: (
          <>
            <p>We collect the following types of data:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Account data:</strong> first name, last name, email address, phone number.</li>
              <li><strong>Building data:</strong> address, number of flats, and the flat and resident details you enter.</li>
              <li><strong>Payment data:</strong> history of costs and fees — card details are processed exclusively through Stripe and we never store them.</li>
              <li><strong>Technical data:</strong> IP address, browser type, access times (standard server logs).</li>
            </ul>
          </>
        ),
      },
      {
        title: '3. How we use your data',
        body: (
          <>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing and improving the MojUlaz service.</li>
              <li>Sending notifications related to your building and account.</li>
              <li>Responding to your inquiries and providing customer support.</li>
              <li>Meeting our legal obligations.</li>
            </ul>
            <p className="mt-3">We <strong>do not sell</strong> your data and do not share it with third parties for marketing purposes.</p>
          </>
        ),
      },
      {
        title: '4. Data storage and security',
        body: (
          <p>
            Data is stored on servers within the EU. We use encryption in transit (HTTPS/TLS)
            and at rest. Access to data is restricted to employees who need it to do their job.
          </p>
        ),
      },
      {
        title: '5. Cookies',
        body: (
          <>
            <p>
              We use cookies necessary for the application to function (session, authentication) and —
              only with your consent — analytics cookies (Google Analytics) that help us understand
              how the site is used. We do not use advertising cookies.
            </p>
            <p className="mt-3">
              You manage your consent through the Cookiebot banner on your first visit, and you can
              change or withdraw your choice at any time. Without your consent, analytics cookies
              are never set.
            </p>
          </>
        ),
      },
      {
        title: '6. Your rights',
        body: (
          <>
            <p>In accordance with the GDPR and the Serbian Law on Personal Data Protection, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Request access to the data we hold about you.</li>
              <li>Correct inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Object to the processing of your data.</li>
            </ul>
            <p className="mt-3">To exercise your rights, write to: {emailLink}</p>
          </>
        ),
      },
      {
        title: '7. Changes to this policy',
        body: (
          <p>
            We reserve the right to amend this policy. You will be notified of significant changes
            by email or within the application itself. By continuing to use the service, you accept
            the updated policy.
          </p>
        ),
      },
      {
        title: '8. Contact',
        body: (
          <p>
            For any privacy-related questions:<br />
            <strong>MojUlaz d.o.o.</strong><br />
            Email: {emailLink}
          </p>
        ),
      },
    ],
  },
}

export default function PrivacyPolicy() {
  const { lang } = useLang()
  const c = content[lang]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Simple header */}
      <header className="border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {c.back}
          </Link>
          <LangSwitcher />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo + title */}
        <div className="mb-10 flex items-center gap-4">
          <img src={logoImg} alt="MojUlaz" className="h-10 w-auto" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{c.title}</h1>
            <p className="text-sm text-slate-400 mt-1">{c.updated}</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          {c.sections.map(({ title, body }) => (
            <section key={title}>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{title}</h2>
              {body}
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-100 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-slate-400">© 2026 MojUlaz. {c.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
