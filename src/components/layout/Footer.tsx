import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo-icon.png'
import { useLang } from '../../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  const platform = [
    { href: '/#features', label: t.footer.links.features },
    { href: '/#how',      label: t.footer.links.how      },
    { href: '/#pricing',  label: t.footer.links.pricing  },
  ]

  const company = [
    { href: '/o-nama',               label: t.footer.links.about   },
    { href: '/politika-privatnosti', label: t.footer.links.privacy },
    { href: '/uslovi-koriscenja',    label: t.footer.links.terms   },
    { href: '/#contact',             label: t.footer.links.contact },
  ]

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
              {t.footer.tagline}
            </p>
            <p className="text-sm text-slate-500">{t.footer.madeIn}</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{t.footer.platformTitle}</h4>
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
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{t.footer.companyTitle}</h4>
            <ul className="space-y-2.5">
              {company.map(({ href, label }) => (
                <li key={label}>
                  {href.startsWith('/') && !href.includes('#') ? (
                    <Link to={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{label}</Link>
                  ) : (
                    <a href={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">© 2026 MojUlaz. {t.footer.copyright}</p>
          <div className="flex gap-5">
            <Link to="/politika-privatnosti" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">{t.footer.links.privacy}</Link>
            <Link to="/uslovi-koriscenja" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">{t.footer.links.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
