import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/layout/Footer'
import logoImg from '../assets/logo-icon.png'
import { ADMIN_PANEL_URL } from '../lib/links'

const values = [
  {
    icon: '🔍',
    title: 'Transparentnost',
    desc: 'Verujemo da svaki stanar ima pravo da zna kako se troši zajednički novac i šta se dešava u njegovoj zgradi. Zato je sve u MojUlazu vidljivo — fond, zahtevi, odluke.',
  },
  {
    icon: '✨',
    title: 'Jednostavnost',
    desc: 'Aplikaciju koriste i studenti i penzioneri. Ako nešto nije jasno na prvi pogled, za nas je to greška — i popravljamo je.',
  },
  {
    icon: '🤝',
    title: 'Partnerstvo',
    desc: 'Ne prodajemo softver pa nestanemo. Slušamo upravnike i stanare svakog dana i platformu gradimo zajedno sa njima.',
  },
]

const stats = [
  { value: '500+',    label: 'zgrada pod upravljanjem' },
  { value: '12.000+', label: 'aktivnih stanara' },
  { value: '98%',     label: 'zadovoljnih korisnika' },
]

export default function AboutUs() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* Simple header */}
      <header className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Nazad na početnu
          </Link>
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="MojUlaz" className="h-8 w-auto object-contain" />
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white" style={{ paddingBottom: '0' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 bg-primary-50 text-primary-700 border border-primary-100">
              O nama
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-tight mb-6">
              Verujemo da život u zgradi može da bude{' '}
              <span className="text-primary-600">jednostavan.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              MojUlaz je nastao iz jednostavnog pitanja: zašto se zgrade u Srbiji i danas
              vode preko papira, Viber grupa i Excel tabela?
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="reveal text-3xl font-extrabold text-ink tracking-tight mb-6">Naša priča</h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="reveal">
                Sve je počelo u jednoj sasvim običnoj novosadskoj zgradi: lift koji ne radi
                nedeljama, obaveštenja zalepljena selotejpom na ulazna vrata i Viber grupa
                u kojoj se važna prijava kvara izgubi između recepta za sarmu i rasprave o parkingu.
              </p>
              <p className="reveal">
                Shvatili smo da problem nije u ljudima — ni u upravnicima, ni u stanarima.
                Problem je u alatima. Niko ne može da vodi zgradu od 40 stanova preko
                četiri mrtve grupe i sveske koja se stalno gubi.
              </p>
              <p className="reveal">
                Zato smo napravili MojUlaz: platformu na kojoj svaki kvar ima svoj status,
                svaki dinar fonda je vidljiv, a odluke se donose glasanjem sa telefona —
                bez tročasovnih sastanaka u ulaznom holu.
              </p>
              <p className="reveal">
                Danas MojUlaz koriste zgrade širom Srbije, a mi i dalje radimo po istom
                principu kao prvog dana: slušamo korisnike i svake nedelje izbacujemo
                poboljšanja koja su oni tražili.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-ink">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {stats.map(({ value, label }) => (
                <div key={label} className="reveal">
                  <div className="text-4xl font-extrabold text-primary-400 mb-1">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
                Vrednosti koje nas vode
              </h2>
              <p className="reveal reveal-d1 text-slate-500 max-w-xl mx-auto">
                Tri principa po kojima donosimo svaku odluku — od dizajna dugmeta do cene pretplate.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="reveal p-7 rounded-2xl border border-slate-200 bg-white hover:border-primary-200 hover:shadow-[0_16px_40px_rgba(13,148,136,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-2xl mb-5">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-primary-50/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
              Hajde da sredimo i vašu zgradu.
            </h2>
            <p className="reveal reveal-d1 text-slate-500 mb-8 max-w-xl mx-auto">
              Isprobajte MojUlaz besplatno 30 dana — bez kreditne kartice i bez obaveza.
            </p>
            <div className="reveal reveal-d2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={ADMIN_PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-7 py-3.5 transition-all hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)] hover:-translate-y-px"
              >
                Počnite besplatno
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center text-sm font-semibold text-primary-700 bg-white border border-primary-200 hover:bg-primary-50 rounded-full px-7 py-3.5 transition-all"
              >
                Kontaktirajte nas
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
