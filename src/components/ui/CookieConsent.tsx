import { useState, useEffect } from 'react'
import { useLang } from '../../i18n/LanguageContext'

const KEY = 'mojulaz-cookies-accepted'

export default function CookieConsent() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      setTimeout(() => setVisible(true), 1800)
    }
  }, [])

  const accept = () => { localStorage.setItem(KEY, '1'); setVisible(false) }
  const decline = () => { localStorage.setItem(KEY, '0'); setVisible(false) }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[999] flex w-[calc(100%-32px)] max-w-[560px] -translate-x-1/2 flex-wrap items-center gap-4 max-md:bottom-24"
      style={{
      background: '#0f172a', borderRadius: 16,
      padding: '18px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      animation: 'cookieSlideUp 0.4s cubic-bezier(0.34,1.4,0.64,1)',
    }}>
      <p style={{ flex: 1, fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, margin: 0, minWidth: 200 }}>
        {t.cookie.text}{' '}
        <a href="/politika-privatnosti" style={{ color: '#14b8a6', textDecoration: 'underline' }}>{t.cookie.privacy}</a>
      </p>
      <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{ padding: '8px 16px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
        >
          {t.cookie.decline}
        </button>
        <button
          onClick={accept}
          style={{ padding: '8px 16px', borderRadius: 99, border: 'none', background: '#0d9488', color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}
        >
          {t.cookie.accept}
        </button>
      </div>
      <style>{`@keyframes cookieSlideUp { from { opacity:0; transform:translateX(-50%) translateY(20px) } to { opacity:1; transform:translateX(-50%) translateY(0) } }`}</style>
    </div>
  )
}
