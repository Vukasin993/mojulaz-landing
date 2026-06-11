import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-icon.png'
import { useLang } from '../i18n/LanguageContext'
import LangSwitcher from '../components/ui/LangSwitcher'
import type { Lang } from '../i18n/translations'

const EMAIL = 'info@moj-ulaz.com'
const emailLink = <a href={`mailto:${EMAIL}`} className="text-primary-600 hover:underline">{EMAIL}</a>

function PriceTable({ buildingsHeader, priceHeader, rows }: { buildingsHeader: string; priceHeader: string; rows: string[] }) {
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left px-4 py-3 font-semibold text-slate-700">{buildingsHeader}</th>
            <th className="text-right px-4 py-3 font-semibold text-slate-700">{priceHeader}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-100">
            <td className="px-4 py-3 text-slate-600">{rows[0]}</td>
            <td className="px-4 py-3 text-right font-medium text-slate-800">7.600 RSD</td>
          </tr>
          <tr className="border-b border-slate-100 bg-primary-50">
            <td className="px-4 py-3 text-primary-700 font-medium">{rows[1]}</td>
            <td className="px-4 py-3 text-right font-semibold text-primary-600">6.600 RSD</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-slate-600">{rows[2]}</td>
            <td className="px-4 py-3 text-right font-medium text-slate-800">4.999 RSD</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

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
    title: 'Uslovi korišćenja',
    updated: 'Poslednje ažuriranje: jun 2026.',
    copyright: 'Sva prava zadržana.',
    sections: [
      {
        title: '1. Prihvatanje uslova',
        body: (
          <p>
            Korišćenjem platforme MojUlaz prihvatate ove Uslove korišćenja u celosti.
            Ukoliko se ne slažete sa bilo kojim delom, molimo vas da prestanete sa korišćenjem usluge.
            Uslove korišćenja možemo menjati uz obaveštenje korisnika najmanje 14 dana unapred.
          </p>
        ),
      },
      {
        title: '2. Opis usluge',
        body: (
          <p>
            MojUlaz je softverska platforma za digitalno upravljanje stambenim zgradama i kondominijumima.
            Usluga omogućava evidentiranje stanara, praćenje troškova, upravljanje dokumentima i
            komunikaciju između upravnika i stanara.
          </p>
        ),
      },
      {
        title: '3. Registracija i nalog',
        body: (
          <ul className="list-disc pl-6 space-y-1">
            <li>Za korišćenje platforme potrebno je kreirati nalog sa tačnim podacima.</li>
            <li>Odgovorni ste za čuvanje pristupnih podataka i sve aktivnosti na vašem nalogu.</li>
            <li>Jedan nalog može upravljati više zgrada prema odabranom cenovnom nivou.</li>
            <li>Zabranjeno je kreiranje više naloga radi zaobilaženja probnog perioda.</li>
          </ul>
        ),
      },
      {
        title: '4. Probni period i plaćanje',
        body: (
          <>
            <p>
              MojUlaz nudi <strong>30 dana besplatnog korišćenja</strong> bez kreditne kartice.
              Nakon isteka probnog perioda, usluga se naplaćuje godišnje po sledećem cenovniku:
            </p>
            <PriceTable
              buildingsHeader="Broj zgrada"
              priceHeader="Cena / god (po zgradi)"
              rows={['1–5 zgrada', '6–20 zgrada', '21+ zgrada']}
            />
            <p className="mt-3 text-sm text-slate-500">Sve cene su bez PDV-a. Plaćanje se vrši unapred za godišnji period.</p>
          </>
        ),
      },
      {
        title: '5. Otkazivanje i povrat',
        body: (
          <p>
            Pretplatu možete otkazati u bilo kom trenutku iz podešavanja naloga. Otkazivanjem se
            sprečava obnavljanje, a pristup ostaje aktivan do kraja plaćenog perioda.
            Povrat novca za neiskorišćeni period nije moguć, osim u slučaju tehničkih grešaka
            na našoj strani.
          </p>
        ),
      },
      {
        title: '6. Zabranjena upotreba',
        body: (
          <>
            <p>Zabranjeno je:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Koristiti platformu za nezakonite aktivnosti.</li>
              <li>Unositi lažne podatke o zgradama ili stanarima.</li>
              <li>Pokušavati neovlašćen pristup tuđim nalozima ili podacima.</li>
              <li>Prenositi pristupne podatke trećim licima.</li>
            </ul>
          </>
        ),
      },
      {
        title: '7. Odgovornost',
        body: (
          <p>
            MojUlaz se trudi da obezbedi neprekidnu dostupnost usluge, ali ne garantuje
            100% uptime. Nismo odgovorni za indirektne štete nastale usled prekida rada.
            Naša ukupna odgovornost ograničena je na iznos koji ste platili u poslednjih
            12 meseci korišćenja.
          </p>
        ),
      },
      {
        title: '8. Intelektualna svojina',
        body: (
          <p>
            Sav softver, dizajn, logotipi i sadržaj platforme su vlasništvo MojUlaz d.o.o.
            Podaci koje vi unosite ostaju vaše vlasništvo. Dajete nam pravo da ih obrađujemo
            isključivo u svrhu pružanja usluge.
          </p>
        ),
      },
      {
        title: '9. Merodavno pravo',
        body: (
          <p>
            Na ove uslove primenjuje se pravo Republike Srbije. Za rešavanje sporova
            nadležan je sud u Beogradu.
          </p>
        ),
      },
      {
        title: '10. Kontakt',
        body: (
          <p>
            Za pitanja u vezi sa uslovima korišćenja:<br />
            <strong>MojUlaz d.o.o.</strong><br />
            Email: {emailLink}
          </p>
        ),
      },
    ],
  },

  en: {
    back: 'Back to home',
    title: 'Terms of Service',
    updated: 'Last updated: June 2026',
    copyright: 'All rights reserved.',
    sections: [
      {
        title: '1. Acceptance of terms',
        body: (
          <p>
            By using the MojUlaz platform you accept these Terms of Service in full.
            If you disagree with any part, please stop using the service.
            We may change these Terms with at least 14 days' notice to users.
          </p>
        ),
      },
      {
        title: '2. Description of the service',
        body: (
          <p>
            MojUlaz is a software platform for the digital management of residential buildings and condominiums.
            The service enables keeping records of residents, tracking costs, managing documents and
            communication between managers and residents.
          </p>
        ),
      },
      {
        title: '3. Registration and account',
        body: (
          <ul className="list-disc pl-6 space-y-1">
            <li>Using the platform requires creating an account with accurate information.</li>
            <li>You are responsible for safeguarding your credentials and for all activity on your account.</li>
            <li>One account can manage multiple buildings according to the selected pricing tier.</li>
            <li>Creating multiple accounts to circumvent the trial period is prohibited.</li>
          </ul>
        ),
      },
      {
        title: '4. Trial period and payment',
        body: (
          <>
            <p>
              MojUlaz offers <strong>30 days of free use</strong> with no credit card required.
              After the trial period expires, the service is billed annually according to the following price list:
            </p>
            <PriceTable
              buildingsHeader="Number of buildings"
              priceHeader="Price / yr (per building)"
              rows={['1–5 buildings', '6–20 buildings', '21+ buildings']}
            />
            <p className="mt-3 text-sm text-slate-500">All prices exclude VAT. Payment is made in advance for an annual period.</p>
          </>
        ),
      },
      {
        title: '5. Cancellation and refunds',
        body: (
          <p>
            You can cancel your subscription at any time from your account settings. Cancelling
            prevents renewal, and access remains active until the end of the paid period.
            Refunds for unused time are not possible, except in the case of technical errors
            on our side.
          </p>
        ),
      },
      {
        title: '6. Prohibited use',
        body: (
          <>
            <p>It is prohibited to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use the platform for unlawful activities.</li>
              <li>Enter false information about buildings or residents.</li>
              <li>Attempt unauthorized access to other accounts or data.</li>
              <li>Share your credentials with third parties.</li>
            </ul>
          </>
        ),
      },
      {
        title: '7. Liability',
        body: (
          <p>
            MojUlaz strives to keep the service continuously available but does not guarantee
            100% uptime. We are not liable for indirect damages caused by service interruptions.
            Our total liability is limited to the amount you have paid in the last
            12 months of use.
          </p>
        ),
      },
      {
        title: '8. Intellectual property',
        body: (
          <p>
            All software, design, logos and content of the platform are the property of MojUlaz d.o.o.
            The data you enter remains your property. You grant us the right to process it
            solely for the purpose of providing the service.
          </p>
        ),
      },
      {
        title: '9. Governing law',
        body: (
          <p>
            These terms are governed by the law of the Republic of Serbia. The court in Belgrade
            has jurisdiction over any disputes.
          </p>
        ),
      },
      {
        title: '10. Contact',
        body: (
          <p>
            For questions regarding these terms of service:<br />
            <strong>MojUlaz d.o.o.</strong><br />
            Email: {emailLink}
          </p>
        ),
      },
    ],
  },
}

export default function TermsOfService() {
  const { lang } = useLang()
  const c = content[lang]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
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
