import { useState } from 'react'

const channels = [
  {
    icon: '✉️',
    title: 'Email',
    desc: 'Odgovaramo u roku od 24 sata, radnim danima.',
    action: 'info@moj-ulaz.com',
    href: 'mailto:info@moj-ulaz.com',
  },
  {
    icon: '🎯',
    title: 'Zakažite demo',
    desc: 'Pokazaćemo vam platformu uživo — 20 minuta, bez obaveza.',
    action: 'Zakažite termin',
    href: 'mailto:info@moj-ulaz.com?subject=Zahtev%20za%20demo%20prezentaciju',
  },
  {
    icon: '🛟',
    title: 'Podrška za korisnike',
    desc: 'Već koristite MojUlaz? Tu smo za svako pitanje.',
    action: 'podrska@moj-ulaz.com',
    href: 'mailto:podrska@moj-ulaz.com',
  },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Upit sa sajta — ${name || 'novi korisnik'}`)
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`)
    window.location.href = `mailto:info@moj-ulaz.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary-50 text-primary-700 border border-primary-100">
            Kontakt
          </div>
          <h2 className="reveal reveal-d1 text-4xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
            Imate pitanje? Tu smo.
          </h2>
          <p className="reveal reveal-d2 text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Bilo da upravljate jednom zgradom ili stotinom, javite nam se —
            odgovaramo brzo i bez komplikovanja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: contact channels */}
          <div className="flex flex-col gap-4">
            {channels.map(({ icon, title, desc, action, href }) => (
              <a
                key={title}
                href={href}
                className="reveal group flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary-200 hover:shadow-[0_12px_32px_rgba(13,148,136,0.1)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-xl flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink mb-1">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-2">{desc}</p>
                  <span className="text-sm font-semibold text-primary-600 group-hover:underline">{action} →</span>
                </div>
              </a>
            ))}

            <div className="reveal flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary-50/60 border border-primary-100">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
              </span>
              <p className="text-sm text-slate-600">
                Prosečno vreme odgovora: <strong className="text-ink">manje od 24 sata</strong>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="reveal reveal-d2 p-7 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-600 mb-1.5">Ime i prezime</label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Petar Petrović"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-600 mb-1.5">Email adresa</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="petar@primer.rs"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-600 mb-1.5">Poruka</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Upravljam zgradom od 30 stanova i zanima me kako MojUlaz može da mi pomogne..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl px-5 py-3.5 transition-all hover:shadow-[0_6px_20px_rgba(13,148,136,0.35)] hover:-translate-y-px"
            >
              Pošaljite poruku
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              Slanjem poruke otvoriće se vaš email klijent. Ne čuvamo podatke iz forme.
            </p>
          </form>
        </div>

      </div>
    </section>
  )
}
