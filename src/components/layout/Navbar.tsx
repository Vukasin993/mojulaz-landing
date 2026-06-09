import { useState, useEffect } from 'react'
import { X, Menu } from '../ui/icons'
import logoImg from '../../assets/logo-icon.png'

const links = [
  { href: '#features',  label: 'Funkcionalnosti' },
  { href: '#how',       label: 'Kako radi'        },
  { href: '#pricing',   label: 'Cene'             },
  { href: '#footer',    label: 'Kontakt'          },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })

    const onFullscreen = (e: Event) => setHidden((e as CustomEvent<boolean>).detail)
    window.addEventListener('phone-fullscreen', onFullscreen)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('phone-fullscreen', onFullscreen)
    }
  }, [])

  const close = () => setOpen(false)

  const scrollTo = (href: string) => {
    close()
    if (href === '#') return
    const el = document.querySelector(href)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.07)]'
          : 'bg-white/80'
      }`}
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? 'none' : 'auto',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" onClick={() => scrollTo('#')} className="flex items-center flex-shrink-0">
            <img src={logoImg} alt="MojUlaz" className="h-9 w-auto object-contain" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-5 py-2.5 transition-all hover:shadow-[0_4px_14px_rgba(13,148,136,0.32)] hover:-translate-y-px"
            >
              Počnite besplatno
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Meni"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 bg-white ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); scrollTo(href) }}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 mt-2">
            <a href="#" className="block text-center text-sm font-semibold text-white bg-primary-600 rounded-full px-5 py-3 hover:bg-primary-700 transition-colors">
              Počnite besplatno
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
