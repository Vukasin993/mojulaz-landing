import Link from 'next/link'
import { REGISTER_URL } from '../../constants/marketing'
import { useLang } from '../../i18n/LanguageContext'

const logoImg = '/logo-icon.png'

const platform = ['#features', '#how', '#pricing', '#faq']

export default function Footer() {
  const { t } = useLang()
  const company = [
    { href: '/politika-privatnosti', label: t.footer.privacy },
    { href: '/uslovi-koriscenja', label: t.footer.terms },
  ]
  return (
    <footer id="footer" className="bg-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center mb-4">
              <span className="inline-flex items-center bg-white rounded-xl px-3 py-1.5">
                <img src={logoImg} alt="MojUlaz" className="h-8 w-auto object-contain" />
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-4">
              {t.footer.tagline}
            </p>
            <div className="flex flex-col gap-1.5 mb-4">
              <a href="mailto:info@moj-ulaz.com" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                📧 info@moj-ulaz.com
              </a>
            </div>
            <p className="text-sm text-slate-500">{t.footer.madeIn}</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{t.footer.platform}</h4>
            <ul className="space-y-2.5">
              {platform.map((href, index) => (
                <li key={href}>
                  <a href={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{t.footer.links[index]}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2.5 mb-6">
              {['/upravnici-zgrada', '/stambene-zajednice', '/prijava-kvarova', '/glasanje-stanara', '/finansije-zgrade'].map((href, index) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{t.footer.resourceLinks[index]}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{t.footer.company}</h4>
            <ul className="space-y-2.5 mb-6">
              {company.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{label}</Link>
                </li>
              ))}
              <li>
                <a href="mailto:info@moj-ulaz.com" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{t.footer.contact}</a>
              </li>
            </ul>
            <a
              href={REGISTER_URL}
              className="text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-4 py-2 transition-colors"
            >
              {t.common.startArrow}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">© 2026 MojUlaz. {t.footer.rights}</p>
          <div className="flex gap-5">
            <Link href="/politika-privatnosti" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">{t.footer.privacy}</Link>
            <Link href="/uslovi-koriscenja" className="text-xs text-slate-500 hover:text-primary-400 transition-colors">{t.footer.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
