import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import LanguageSwitcher from '../src/components/ui/LanguageSwitcher'
import { useLang } from '../src/i18n/LanguageContext'

const TermsPage: NextPage = () => {
  const { lang } = useLang()
  const isEnglish = lang === 'en'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>{isEnglish ? 'Terms of Service — MojUlaz' : 'Uslovi korišćenja — MojUlaz'}</title>
        <meta name="description" content={isEnglish ? 'Terms of service for MojUlaz residential community management software.' : 'Uslovi korišćenja za MojUlaz softver za upravljanje stambenim zajednicama.'} />
        <link rel="canonical" href="https://www.moj-ulaz.com/uslovi-koriscenja/" />
      </Head>
      <div className="bg-white min-h-screen">
        <header className="border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isEnglish ? 'Back to home' : 'Nazad na početnu'}
            </Link>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10 flex items-center gap-4">
            <img src="/logo-icon.png" alt="MojUlaz" className="h-10 w-auto" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{isEnglish ? 'Terms of Service' : 'Uslovi korišćenja'}</h1>
              <p className="text-sm text-slate-400 mt-1">{isEnglish ? 'Last updated: June 2025.' : 'Poslednje ažuriranje: jun 2025.'}</p>
            </div>
          </div>

          {isEnglish ? (
          <div className="prose prose-slate max-w-none">
            <p>Welcome to MojUlaz. By using our application and website (moj-ulaz.com), you agree to these terms. Please read them carefully.</p>

            <h2>1. Service</h2>
            <p>MojUlaz provides a software platform for managing residential buildings, including issue reporting, announcements, voting and financial tracking.</p>

            <h2>2. Trial period and payment</h2>
            <p>The first 30 days are free and no credit card is required. After the trial, continued use requires an active license under the current price list. Prices are stated in RSD and exclude VAT.</p>

            <h2>3. User responsibilities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>use the platform to send unsolicited messages or false information;</li>
              <li>attempt unauthorized access to another person’s account or the system;</li>
              <li>use the service for purposes that violate applicable law.</li>
            </ul>

            <h2>4. Intellectual property</h2>
            <p>All software, design and platform content are owned by ConvertixDigital d.o.o. Use is permitted solely within the subscribed service.</p>

            <h2>5. Service availability</h2>
            <p>We aim to keep the platform available 24/7 but do not guarantee uninterrupted operation. Planned maintenance will be announced in advance.</p>

            <h2>6. Limitation of liability</h2>
            <p>MojUlaz is not liable for indirect damage arising from the use or inability to use the platform, except in cases of gross negligence or intent.</p>

            <h2>7. Termination</h2>
            <p>You may cancel your subscription at any time through your account settings. Payments for the current period are non-refundable unless required otherwise by law.</p>

            <h2>8. Governing law</h2>
            <p>The laws of the Republic of Serbia apply. Disputes are subject to the competent court in Belgrade.</p>

            <h2>9. Changes to these terms</h2>
            <p>We may amend these terms by notifying users by email at least 14 days in advance.</p>

            <h2>10. Contact</h2>
            <p>For questions, contact <a href="mailto:info@moj-ulaz.com">info@moj-ulaz.com</a>.</p>
          </div>
          ) : (
          <div className="prose prose-slate max-w-none">
            <p>Dobrodošli na MojUlaz. Korišćenjem naše aplikacije i sajta (moj-ulaz.com) prihvatate ove uslove. Pažljivo ih pročitajte.</p>

            <h2>1. Usluga</h2>
            <p>MojUlaz pruža softversku platformu za upravljanje stambenim zgradama, uključujući prijavu kvarova, obaveštenja, glasanje i finansijsko praćenje.</p>

            <h2>2. Probni period i plaćanje</h2>
            <p>Prvih 30 dana je besplatno, bez potrebe za kreditnom karticom. Nakon isteka probnog perioda, nastavak korišćenja zahteva aktivnu licencu prema aktuelnom cenovniku. Cene su iskazane u RSD i bez PDV-a.</p>

            <h2>3. Odgovornost korisnika</h2>
            <p>Saglasni ste da nećete:</p>
            <ul>
              <li>koristiti platformu za slanje neželjenih poruka ili lažnih informacija;</li>
              <li>pokušavati neovlašćen pristup tuđim nalozima ili sistemu;</li>
              <li>koristiti uslugu u svrhe suprotne važećim propisima.</li>
            </ul>

            <h2>4. Intelektualna svojina</h2>
            <p>Sav softver, dizajn i sadržaj platforme su vlasništvo ConvertixDigital d.o.o. Dozvoljena je isključivo upotreba u okviru pretplaćene usluge.</p>

            <h2>5. Dostupnost usluge</h2>
            <p>Nastojimo da platforma bude dostupna 24/7, ali ne garantujemo neprekidni rad. Planirano održavanje najavljivаmo unapred.</p>

            <h2>6. Ograničenje odgovornosti</h2>
            <p>MojUlaz nije odgovoran za posrednu štetu nastalu korišćenjem ili nemogućnošću korišćenja platforme, osim u slučajevima grube nepažnje ili namere.</p>

            <h2>7. Raskid</h2>
            <p>Pretplatu možete otkazati u bilo kom trenutku iz podešavanja naloga. Nemate pravo na povraćaj plaćenih iznosa za tekući period, osim ako zakon ne nalaže drugačije.</p>

            <h2>8. Merodavno pravo</h2>
            <p>Primenjuje se pravo Republike Srbije. Sporovi se rešavaju pred nadležnim sudom u Beogradu.</p>

            <h2>9. Izmene uslova</h2>
            <p>Zadržavamo pravo izmene ovih uslova uz obaveštenje korisnika najmanje 14 dana unapred putem e-maila.</p>

            <h2>10. Kontakt</h2>
            <p>Za pitanja: <a href="mailto:info@moj-ulaz.com">info@moj-ulaz.com</a></p>
          </div>
          )}
        </main>
      </div>
    </>
  )
}

export default TermsPage
