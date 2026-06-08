import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo-icon.png'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Simple header */}
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
        {/* Logo + title */}
        <div className="mb-10 flex items-center gap-4">
          <img src={logoImg} alt="MojUlaz" className="h-10 w-auto" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Politika privatnosti</h1>
            <p className="text-sm text-slate-400 mt-1">Poslednje ažuriranje: jun 2025.</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Ko smo mi</h2>
            <p>
              MojUlaz je softverska platforma za upravljanje stambenim zgradama i kondominijumima,
              razvijena i u vlasništvu kompanije MojUlaz d.o.o., Srbija. Ova politika privatnosti
              opisuje kako prikupljamo, koristimo i štitimo vaše lične podatke.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Koji podaci se prikupljaju</h2>
            <p>Prikupljamo sledeće vrste podataka:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Podaci o nalogu:</strong> ime, prezime, email adresa, broj telefona.</li>
              <li><strong>Podaci o zgradi:</strong> adresa, broj stanova, podaci o stanovima i stanарima koje vi unesete.</li>
              <li><strong>Podaci o plaćanjima:</strong> istorija troškova i naknada — kartični podaci se obrađuju isključivo putem Stripe i mi ih ne čuvamo.</li>
              <li><strong>Tehnički podaci:</strong> IP adresa, tip pretraživača, vreme pristupa (standardni serverski logovi).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Kako koristimo vaše podatke</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pružanje i unapređivanje usluge MojUlaz.</li>
              <li>Slanje obaveštenja vezanih za vašu zgradu i nalog.</li>
              <li>Odgovaranje na vaše upite i pružanje korisničke podrške.</li>
              <li>Ispunjavanje zakonskih obaveza.</li>
            </ul>
            <p className="mt-3">Vaše podatke <strong>ne prodajemo</strong> i ne delimo ih sa trećim stranama u marketinške svrhe.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Čuvanje i bezbednost podataka</h2>
            <p>
              Podaci se čuvaju na serverima unutar EU. Koristimo enkripciju u prenosu (HTTPS/TLS)
              i u mirovanju. Pristup podacima je ograničen samo na zaposlene koji ga zahtevaju
              za obavljanje posla.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Kolačići (Cookies)</h2>
            <p>
              Koristimo isključivo neophodne kolačiće za funkcionisanje aplikacije (sesija, autentifikacija).
              Ne koristimo reklamne kolačiće niti alate za praćenje trećih strana.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Vaša prava</h2>
            <p>U skladu sa GDPR i srpskim Zakonom o zaštiti podataka o ličnosti, imate pravo da:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Zatražite uvid u podatke koje čuvamo o vama.</li>
              <li>Ispravite netačne podatke.</li>
              <li>Zatražite brisanje vaših podataka.</li>
              <li>Uložite prigovor na obradu podataka.</li>
            </ul>
            <p className="mt-3">Za ostvarivanje prava pišite na: <a href="mailto:privacy@mojulaz.com" className="text-primary-600 hover:underline">privacy@mojulaz.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Promene politike</h2>
            <p>
              Zadržavamo pravo izmene ove politike. O značajnim promenama bićete obavešteni
              putem email-a ili unutar same aplikacije. Nastavkom korišćenja usluge prihvatate
              ažuriranu politiku.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Kontakt</h2>
            <p>
              Za sva pitanja u vezi sa privatnošću:<br />
              <strong>MojUlaz d.o.o.</strong><br />
              Email: <a href="mailto:privacy@mojulaz.com" className="text-primary-600 hover:underline">privacy@mojulaz.com</a>
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
