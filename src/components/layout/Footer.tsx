import logoImg from '../../assets/logo-icon.png'

const platform = [
  { href: '#features', label: 'Funkcionalnosti' },
  { href: '#how',      label: 'Kako radi'        },
  { href: '#pricing',  label: 'Cene'             },
]

const company = [
  { href: '#', label: 'O nama'              },
  { href: '#', label: 'Politika privatnosti' },
  { href: '#', label: 'Uslovi korišćenja'   },
  { href: '#', label: 'Kontakt'             },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center mb-4">
              {/* White bg pill so the logo reads on dark footer */}
              <span className="inline-flex items-center bg-white rounded-xl px-3 py-1.5">
                <img src={logoImg} alt="MojUlaz" className="h-8 w-auto object-contain" />
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-4">
              Moderna platforma za upravljanje stambenim zgradama i kondominijumima na Balkanu.
            </p>
            <p className="text-sm text-slate-500">Napravljeno u Srbiji 🇷🇸</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Platforma</h4>
            <ul className="space-y-2.5">
              {platform.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Kompanija</h4>
            <ul className="space-y-2.5">
              {company.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">© 2025 MojUlaz. Sva prava zadržana.</p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">Politika privatnosti</a>
            <a href="#" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">Uslovi korišćenja</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
