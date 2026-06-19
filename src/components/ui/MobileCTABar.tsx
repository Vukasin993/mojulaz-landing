import { useEffect, useState } from 'react'
import { REGISTER_URL } from '../../constants/marketing'

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('pocetna')

    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0, rootMargin: '-8px 0px 0px 0px' },
      )
      observer.observe(hero)
      return () => observer.disconnect()
    } else {
      const onScroll = () => setVisible(window.scrollY > 200)
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-[1010] px-4 transition-all duration-300 ease-out ${
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      <div
        className="pointer-events-auto mx-auto max-w-md rounded-2xl border border-slate-200/80 bg-white/92 p-3 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl"
        style={{ boxShadow: '0 8px 32px rgba(15,23,42,0.08), 0 1px 0 rgba(255,255,255,0.8) inset' }}
      >
        <a
          href={REGISTER_URL}
          className="block w-full rounded-xl bg-primary-600 px-4 py-3 text-center transition-colors hover:bg-primary-700 active:bg-primary-800"
        >
          <span className="block text-sm font-semibold text-white">
            Počnite besplatno
          </span>
          <span className="block text-[11px] font-medium text-teal-100/90">
            30 dana · bez kartice
          </span>
        </a>
      </div>
    </div>
  )
}
