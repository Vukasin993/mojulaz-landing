import Link from 'next/link'
import { REGISTER_URL } from '../../constants/marketing'

const logoImg = '/logo-icon.png'

const platform = [
  { href: '#features', label: 'Funkcionalnosti' },
  { href: '#how',      label: 'Kako radi'        },
  { href: '#pricing',  label: 'Cene'             },
  { href: '#faq',      label: 'FAQ'              },
]

const company = [
  { href: '/politika-privatnosti', label: 'Politika privatnosti' },
  { href: '/uslovi-koriscenja',    label: 'Uslovi korišćenja'   },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center mb-4">
              <span className="inline-flex items-center bg-white rounded-xl px-3 py-1.5">
                <img src={logoImg} alt="MojUlaz" className="h-8 w-auto object-contain" />
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-4">
              Moderna platforma za upravljanje stambenim zgradama i kondominijumima u Srbiji.
            </p>
            <div className="flex flex-col gap-1.5 mb-4">
              <a href="mailto:zdravo@mojulaz.rs" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                📧 zdravo@mojulaz.rs
              </a>
            </div>
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

          {/* Company + CTA */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Kompanija</h4>
            <ul className="space-y-2.5 mb-6">
              {company.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{label}</Link>
                </li>
              ))}
              <li>
                <a href="mailto:zdravo@mojulaz.rs" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">Kontakt</a>
              </li>
            </ul>
            <a
              href={REGISTER_URL}
              className="text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-4 py-2 transition-colors"
            >
              Počnite besplatno →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">© 2026 MojUlaz. Sva prava zadržana.</p>
          <div className="flex gap-5">
            <Link href="/politika-privatnosti" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">Politika privatnosti</Link>
            <Link href="/uslovi-koriscenja" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">Uslovi korišćenja</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
