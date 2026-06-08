import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-icon.png'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      <header className="border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Nazad na početnu
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 flex items-center gap-4">
          <img src={logoImg} alt="MojUlaz" className="h-10 w-auto" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Uslovi korišćenja</h1>
            <p className="text-sm text-slate-400 mt-1">Poslednje ažuriranje: jun 2025.</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Prihvatanje uslova</h2>
            <p>
              Korišćenjem platforme MojUlaz prihvatate ove Uslove korišćenja u celosti.
              Ukoliko se ne slažete sa bilo kojim delom, molimo vas da prestanete sa korišćenjem usluge.
              Uslove korišćenja možemo menjati uz obaveštenje korisnika najmanje 14 dana unapred.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Opis usluge</h2>
            <p>
              MojUlaz je softverska platforma za digitalno upravljanje stambenim zgradama i kondominijumima.
              Usluga omogućava evidentiranje stanara, praćenje troškova, upravljanje dokumentima i
              komunikaciju između upravnika i stanara.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Registracija i nalog</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Za korišćenje platforme potrebno je kreirati nalog sa tačnim podacima.</li>
              <li>Odgovorni ste za čuvanje pristupnih podataka i sve aktivnosti na vašem nalogu.</li>
              <li>Jedan nalog može upravljati više zgrada prema odabranom cenovnom nivou.</li>
              <li>Zabranjeno je kreiranje više naloga radi zaobilaženja probnog perioda.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Probni period i plaćanje</h2>
            <p>
              MojUlaz nudi <strong>30 dana besplatnog korišćenja</strong> bez kreditne kartice.
              Nakon isteka probnog perioda, usluga se naplaćuje godišnje po sledećem cenovniku:
            </p>
            <div className="mt-4 rounded-xl overflow-hidden border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Broj zgrada</th>
                    <th className="text-right px-4 py-3 font-semibold text-slate-700">Cena / god (po zgradi)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 text-slate-600">1–5 zgrada</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-800">7.600 RSD</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-primary-50">
                    <td className="px-4 py-3 text-primary-700 font-medium">6–20 zgrada</td>
                    <td className="px-4 py-3 text-right font-semibold text-primary-600">6.600 RSD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-600">21+ zgrada</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-800">4.999 RSD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-slate-500">Sve cene su bez PDV-a. Plaćanje se vrši unapred za godišnji period.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Otkazivanje i povrat</h2>
            <p>
              Pretplatu možete otkazati u bilo kom trenutku iz podešavanja naloga. Otkazivanjem se
              sprečava obnavljanje, a pristup ostaje aktivan do kraja plaćenog perioda.
              Povrat novca za neiskorišćeni period nije moguć, osim u slučaju tehničkih grešaka
              na našoj strani.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Zabranjena upotreba</h2>
            <p>Zabranjeno je:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Koristiti platformu za nezakonite aktivnosti.</li>
              <li>Unositi lažne podatke o zgradama ili stanarima.</li>
              <li>Pokušavati neovlašćen pristup tuđim nalozima ili podacima.</li>
              <li>Prenositi pristupne podatke trećim licima.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Odgovornost</h2>
            <p>
              MojUlaz se trudi da obezbedi neprekidnu dostupnost usluge, ali ne garantuje
              100% uptime. Nismo odgovorni za indirektne štete nastale usled prekida rada.
              Naša ukupna odgovornost ograničena je na iznos koji ste platili u poslednjih
              12 meseci korišćenja.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Intelektualna svojina</h2>
            <p>
              Sav softver, dizajn, logotipi i sadržaj platforme su vlasništvo MojUlaz d.o.o.
              Podaci koje vi unosite ostaju vaše vlasništvo. Dajete nam pravo da ih obrađujemo
              isključivo u svrhu pružanja usluge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Merodavno pravo</h2>
            <p>
              Na ove uslove primenjuje se pravo Republike Srbije. Za rešavanje sporova
              nadležan je sud u Beogradu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Kontakt</h2>
            <p>
              Za pitanja u vezi sa uslovima korišćenja:<br />
              <strong>MojUlaz d.o.o.</strong><br />
              Email: <a href="mailto:info@mojulaz.com" className="text-primary-600 hover:underline">info@mojulaz.com</a>
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-slate-100 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-slate-400">© 2025 MojUlaz. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  )
}
