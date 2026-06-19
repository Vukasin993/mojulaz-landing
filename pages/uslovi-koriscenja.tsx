import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

const TermsPage: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Uslovi korišćenja — MojUlaz</title>
      </Head>
      <div className="bg-white min-h-screen">
        <header className="border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Nazad na početnu
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10 flex items-center gap-4">
            <img src="/logo-icon.png" alt="MojUlaz" className="h-10 w-auto" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Uslovi korišćenja</h1>
              <p className="text-sm text-slate-400 mt-1">Poslednje ažuriranje: jun 2025.</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>Dobrodošli na MojUlaz. Korišćenjem naše aplikacije i sajta (mojulaz.rs) prihvatate ove uslove. Pažljivo ih pročitajte.</p>

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
            <p>Sav softver, dizajn i sadržaj platforme su vlasništvo MojUlaz d.o.o. Dozvoljena je isključivo upotreba u okviru pretplaćene usluge.</p>

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
        </main>
      </div>
    </>
  )
}

export default TermsPage
