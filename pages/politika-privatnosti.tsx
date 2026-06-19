import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import LanguageSwitcher from '../src/components/ui/LanguageSwitcher'
import { useLang } from '../src/i18n/LanguageContext'

const PrivacyPolicyPage: NextPage = () => {
  const { lang } = useLang()
  const isEnglish = lang === 'en'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>{isEnglish ? 'Privacy Policy — MojUlaz' : 'Politika privatnosti — MojUlaz'}</title>
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
              <h1 className="text-3xl font-bold text-slate-900">{isEnglish ? 'Privacy Policy' : 'Politika privatnosti'}</h1>
              <p className="text-sm text-slate-400 mt-1">{isEnglish ? 'Last updated: June 2025.' : 'Poslednje ažuriranje: jun 2025.'}</p>
            </div>
          </div>

          {isEnglish ? (
          <div className="prose prose-slate max-w-none">
            <p>ConvertixDigital d.o.o. (“MojUlaz”, “we”, “us”) respects your privacy and is committed to protecting the personal data collected from users of its application and website (moj-ulaz.com).</p>

            <h2>1. Data we collect</h2>
            <p>We collect the following categories of data:</p>
            <ul>
              <li><strong>Account data:</strong> first name, last name, email address, building name and role (manager or resident).</li>
              <li><strong>Usage data:</strong> issue reports, notice-board messages and voting activity.</li>
              <li><strong>Technical data:</strong> IP address, device type, browser and session cookies.</li>
              <li><strong>Financial data:</strong> amounts paid into the building fund. We do not store payment-card details; payments are handled by a third-party processor.</li>
            </ul>

            <h2>2. Purpose of processing</h2>
            <p>We use your data solely to:</p>
            <ul>
              <li>provide the building-management service;</li>
              <li>send notifications within the application;</li>
              <li>improve functionality and resolve errors;</li>
              <li>meet our legal obligations.</li>
            </ul>

            <h2>3. Legal basis</h2>
            <p>Data is processed to perform our contract with you and, where applicable, on the basis of your consent, in accordance with the Serbian Personal Data Protection Act and EU Regulation 2016/679 (GDPR).</p>

            <h2>4. Sharing data</h2>
            <p>We do not sell your data to third parties. We share it only with:</p>
            <ul>
              <li>infrastructure providers, such as hosting and email services, bound by confidentiality obligations;</li>
              <li>competent authorities where required by law.</li>
            </ul>

            <h2>5. Data retention</h2>
            <p>We retain data while an account is active and for 12 months after deactivation, unless a longer period is required by law.</p>

            <h2>6. Your rights</h2>
            <p>You have the right to access, correct, erase and transfer your data, and the right to object to processing. Send requests to <a href="mailto:info@moj-ulaz.com">info@moj-ulaz.com</a>.</p>

            <h2>7. Cookies</h2>
            <p>We use essential session cookies and, with your consent, analytics cookies. You can manage cookies through the website banner or your browser settings.</p>

            <h2>8. Contact</h2>
            <p>For privacy-related questions, contact <a href="mailto:info@moj-ulaz.com">info@moj-ulaz.com</a>.</p>
          </div>
          ) : (
          <div className="prose prose-slate max-w-none">
            <p>CovertixDigital d.o.o. (u daljem tekstu „MojUlaz", „mi", „nas") poštuje vašu privatnost i opredeljen je da zaštiti lične podatke koje prikuplja od korisnika svoje aplikacije i veb-sajta (moj-ulaz.com).</p>

            <h2>1. Koje podatke prikupljamo</h2>
            <p>Prikupljamo sledeće kategorije podataka:</p>
            <ul>
              <li><strong>Podaci o nalogu:</strong> ime, prezime, e-mail adresa, naziv zgrade, uloga (upravnik / stanar).</li>
              <li><strong>Podaci o korišćenju:</strong> prijave kvarova, poruke na oglasnoj tabli, glasačke aktivnosti.</li>
              <li><strong>Tehnički podaci:</strong> IP adresa, tip uređaja, pregledač, kolačići sesije.</li>
              <li><strong>Finansijski podaci:</strong> iznosi uplata u fond (ne čuvamo podatke platnih kartica — plaćanje obavlja procesor treće strane).</li>
            </ul>

            <h2>2. Svrha obrade</h2>
            <p>Vaše podatke koristimo isključivo za:</p>
            <ul>
              <li>pružanje usluge upravljanja zgradom;</li>
              <li>slanje obaveštenja unutar aplikacije;</li>
              <li>poboljšanje funkcionalnosti i otklanjanje grešaka;</li>
              <li>ispunjenje zakonskih obaveza.</li>
            </ul>

            <h2>3. Pravni osnov obrade</h2>
            <p>Obrada se vrši na osnovu izvršenja ugovora (pružanje usluge) i vašeg pristanka gde je primenjivo, u skladu sa Zakonom o zaštiti podataka o ličnosti (ZZPL) i Uredbom EU 2016/679 (GDPR).</p>

            <h2>4. Deljenje podataka</h2>
            <p>Vaše podatke ne prodajemo trećim stranama. Podatke delimo jedino sa:</p>
            <ul>
              <li>pružaocima infrastrukture (hosting, e-mail) vezanim ugovorima o poverljivosti;</li>
              <li>nadležnim organima na osnovu zakonske obaveze.</li>
            </ul>

            <h2>5. Čuvanje podataka</h2>
            <p>Podatke čuvamo dok postoji aktivan nalog i 12 meseci nakon deaktivacije, osim gde zakon nalaže duži rok.</p>

            <h2>6. Vaša prava</h2>
            <p>Imate pravo na pristup, ispravku, brisanje i prenosivost podataka, kao i pravo na prigovor. Zahteve šaljite na: <a href="mailto:info@moj-ulaz.com">info@moj-ulaz.com</a>.</p>

            <h2>7. Kolačići</h2>
            <p>Koristimo neophodne kolačiće sesije i, uz vaš pristanak, analitičke kolačiće. Možete upravljati kolačićima kroz baner na sajtu ili podešavanja pregledača.</p>

            <h2>8. Kontakt</h2>
            <p>Za sva pitanja o privatnosti: <a href="mailto:info@moj-ulaz.com">info@moj-ulaz.com</a></p>
          </div>
          )}
        </main>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
