import { useEffect, useMemo, useRef, useState } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { APP_STORE_URL, PLAY_STORE_URL, ADMIN_PANEL_URL } from '../../lib/links'
import { useLang } from '../../i18n/LanguageContext'

/* ── Chat messages — structure here, texts in i18n/translations.ts ──── */
interface ChatMsg {
  id: number; sender: string; text: string; time: string
  type: 'normal' | 'angry' | 'offtopic' | 'admin'
  avatar: string; own?: boolean
  annotation?: { label: string; color: string }
}
interface MsgMeta {
  sender: string; time: string
  type: ChatMsg['type']; avatar: string; own?: boolean
  annColor?: string
}
const MSG_META: MsgMeta[] = [
  { sender: 'Petar K.',       time: '07:12', type: 'normal',  avatar: '#0891b2', annColor: '#ef4444' },
  { sender: 'Dragica K.',     time: '07:31', type: 'angry',   avatar: '#dc2626' },
  { sender: 'Žarko M.',       time: '07:33', type: 'normal',  avatar: '#92400e', annColor: '#f59e0b' },
  { sender: 'Snežana V.',     time: '07:38', type: 'offtopic', avatar: '#db2777' },
  { sender: 'Upravnik Zoran', time: '07:45', type: 'admin',   avatar: '#0d9488', own: true, annColor: '#6366f1' },
  { sender: 'Petar K.',       time: '07:45', type: 'normal',  avatar: '#0891b2' },
  { sender: 'Upravnik Zoran', time: '07:46', type: 'admin',   avatar: '#0d9488', own: true },
  { sender: 'Milica P.',      time: '07:47', type: 'normal',  avatar: '#7c3aed' },
  { sender: 'Upravnik Zoran', time: '07:49', type: 'admin',   avatar: '#0d9488', own: true, annColor: '#dc2626' },
  { sender: 'Boban R.',       time: '07:49', type: 'offtopic', avatar: '#16a34a' },
  { sender: 'Tatjana K.',     time: '07:51', type: 'angry',   avatar: '#b45309' },
  { sender: 'Dragica K.',     time: '07:52', type: 'angry',   avatar: '#dc2626' },
  { sender: 'Branko Ć.',      time: '07:54', type: 'normal',  avatar: '#475569' },
  { sender: 'Đorđe P.',       time: '07:55', type: 'normal',  avatar: '#6366f1', annColor: '#f59e0b' },
  { sender: 'Branko Ć.',      time: '07:55', type: 'normal',  avatar: '#475569' },
  { sender: 'Upravnik Zoran', time: '08:10', type: 'admin',   avatar: '#0d9488', own: true, annColor: '#ef4444' },
  { sender: 'Milica P.',      time: '08:11', type: 'angry',   avatar: '#7c3aed' },
  { sender: 'Mara B.',        time: '08:12', type: 'angry',   avatar: '#be185d' },
  { sender: 'Petar K.',       time: '08:12', type: 'normal',  avatar: '#0891b2' },
  { sender: 'Snežana V.',     time: '08:13', type: 'normal',  avatar: '#db2777' },
  { sender: 'Branko Ć.',      time: '08:13', type: 'normal',  avatar: '#475569' },
  { sender: 'Upravnik Zoran', time: '08:14', type: 'admin',   avatar: '#0d9488', own: true, annColor: '#6366f1' },
  { sender: 'Boban R.',       time: '08:16', type: 'offtopic', avatar: '#16a34a' },
  { sender: 'Dragica K.',     time: '08:17', type: 'angry',   avatar: '#dc2626' },
  { sender: 'Žarko M.',       time: '08:19', type: 'normal',  avatar: '#92400e' },
  { sender: 'Ana T.',         time: '08:20', type: 'normal',  avatar: '#0d9488' },
  { sender: 'Upravnik Zoran', time: '08:28', type: 'admin',   avatar: '#0d9488', own: true, annColor: '#ef4444' },
  { sender: 'Dragica K.',     time: '08:28', type: 'angry',   avatar: '#dc2626' },
  { sender: 'Tatjana K.',     time: '08:29', type: 'angry',   avatar: '#b45309' },
  { sender: 'Petar K.',       time: '08:31', type: 'normal',  avatar: '#0891b2', annColor: '#ef4444' },
  { sender: 'Upravnik Zoran', time: '08:33', type: 'admin',   avatar: '#0d9488', own: true },
  { sender: 'Milica P.',      time: '08:33', type: 'normal',  avatar: '#7c3aed', annColor: '#6366f1' },
]
const INITIAL_SHOW = 6

/* ── Chat window ───────────────────────────────────────────────────── */
function ChatWindow() {
  const { lang, t } = useLang()
  const [count, setCount]   = useState(INITIAL_SHOW)
  const [typing, setTyping] = useState(false)
  const chatRef             = useRef<HTMLDivElement>(null)
  const timersRef           = useRef<ReturnType<typeof setTimeout>[]>([])

  const MESSAGES: ChatMsg[] = useMemo(() => MSG_META.map((m, i) => ({
    ...m,
    id: i + 1,
    text: t.building.chat[i]?.text ?? '',
    annotation: t.building.chat[i]?.ann
      ? { label: t.building.chat[i].ann!, color: m.annColor ?? '#6366f1' }
      : undefined,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })), [lang])

  const clear = () => { timersRef.current.forEach(clearTimeout); timersRef.current = [] }
  const add   = (fn: () => void, ms: number) => { timersRef.current.push(setTimeout(fn, ms)) }

  useEffect(() => {
    let cur = INITIAL_SHOW
    const next = () => {
      if (cur >= MESSAGES.length) {
        add(() => { setCount(INITIAL_SHOW); cur = INITIAL_SHOW; add(next, 800) }, 2500)
        return
      }
      add(() => setTyping(true), 300)
      add(() => { setTyping(false); cur++; setCount(cur); add(next, 1900) }, 1300)
    }
    add(next, 1400)
    return clear
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
  }, [count, typing])

  const visible = MESSAGES.slice(0, count)

  return (
    <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)', width: '100%', border: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Header */}
      <div style={{ background: '#075E54', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏢</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{t.building.chatHeader}</div>
          <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.65)', marginTop: 1 }}>{t.building.chatSub}</div>
        </div>
        <div style={{ display: 'flex', gap: 18, color: 'rgba(255,255,255,0.6)', fontSize: 18 }}><span>📞</span><span>⋮</span></div>
      </div>

      {/* Messages */}
      <div ref={chatRef} style={{ background: '#efeae2', backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0' fill='%23d3cbc3' fill-opacity='0.3'/%3E%3C/svg%3E")`, height: 'clamp(340px, 40vh, 460px)', overflowY: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 2, scrollbarWidth: 'thin' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
          <span style={{ background: 'rgba(255,255,255,0.7)', padding: '3px 12px', borderRadius: 8, fontSize: 11, color: '#54656f', fontWeight: 500 }}>{t.building.chatToday}</span>
        </div>
        {visible.map((msg) => (
          <div key={msg.id} style={{ display: 'flex', flexDirection: msg.own ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: 6, animation: 'msgIn 0.28s cubic-bezier(0.22,1,0.36,1)', marginBottom: msg.annotation ? 4 : 1 }}>
            {!msg.own && (
              <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: msg.avatar, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800 }}>
                {msg.sender.charAt(0)}
              </div>
            )}
            <div style={{ maxWidth: '72%', display: 'flex', flexDirection: 'column', alignItems: msg.own ? 'flex-end' : 'flex-start', gap: 0 }}>
              {msg.annotation && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 6, marginBottom: 3, background: `${msg.annotation.color}12`, border: `1px solid ${msg.annotation.color}30`, alignSelf: msg.own ? 'flex-end' : 'flex-start' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: msg.annotation.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 9.5, fontWeight: 700, color: msg.annotation.color, whiteSpace: 'nowrap' }}>{msg.annotation.label}</span>
                </div>
              )}
              <div style={{ padding: '7px 10px 5px', background: msg.own ? '#dcf8c6' : msg.type === 'angry' ? '#fff5f5' : '#fff', borderRadius: msg.own ? '12px 3px 12px 12px' : '3px 12px 12px 12px', boxShadow: `0 1px 3px rgba(0,0,0,0.1)${msg.annotation ? `, 0 0 0 1.5px ${msg.annotation.color}20` : ''}` }}>
                {!msg.own && (
                  <div style={{ fontSize: 11, fontWeight: 700, color: msg.avatar, marginBottom: 2, lineHeight: 1 }}>
                    {msg.sender}
                    {msg.type === 'offtopic' && <span style={{ marginLeft: 5, fontSize: 9, fontWeight: 600, color: '#94a3b8', background: 'rgba(0,0,0,0.06)', padding: '1px 5px', borderRadius: 4 }}>{t.building.chatOfftopic}</span>}
                  </div>
                )}
                <div style={{ fontSize: 13.5, lineHeight: 1.45, color: msg.type === 'angry' ? '#991b1b' : '#111b21', fontWeight: msg.type === 'angry' ? 600 : 400 }}>{msg.text}</div>
                <div style={{ fontSize: 9.5, color: '#8696a0', textAlign: 'right', marginTop: 2 }}>{msg.time}{msg.own ? ' ✓✓' : ''}</div>
              </div>
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, animation: 'msgIn 0.25s ease' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', fontWeight: 800 }}>?</div>
            <div style={{ padding: '10px 14px', background: '#fff', borderRadius: '3px 12px 12px 12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {[0, 1, 2].map((i) => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#8696a0', animation: `typingDot 1.2s ease-in-out ${i * 0.18}s infinite` }} />)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{ background: '#f0f2f5', padding: '8px 10px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>😊</div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '8px 14px', fontSize: 13.5, color: '#8696a0' }}>{t.building.chatInput}</div>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#00a884', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🎤</div>
      </div>

      <style>{`
        @keyframes msgIn     { from { opacity: 0; transform: translateY(6px) scale(0.97); } to { opacity: 1; transform: none; } }
        @keyframes typingDot { 0%, 60%, 100% { opacity: 0.3; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-4px); } }
      `}</style>
    </div>
  )
}

/* ── Store buttons (shared) ────────────────────────────────────────── */
function StoreButtons() {
  const { t } = useLang()
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {[
        { label: 'App Store',   sub: t.building.storeAppleSub, href: APP_STORE_URL,  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
        { label: 'Google Play', sub: t.building.storeGoogleSub, href: PLAY_STORE_URL, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76c.3.17.65.18.97.05l12.44-7.18-2.63-2.63-10.78 9.76z" fill="#EA4335"/><path d="M20.82 9.73c-.42-.57-1.02-.96-1.73-1.08L4.15.28C3.83.1 3.48.1 3.18.27L13.96 11.05l6.86-1.32z" fill="#FBBC04"/><path d="M2.01 1.14c-.13.24-.2.52-.2.82v19.08c0 .3.07.58.2.82l.14.13L13.1 11.05v-.1L2.15 1z" fill="#4285F4"/><path d="M20.82 14.27l-3.23 1.87-2.63-2.63 2.63-2.63 3.23 1.87c.92.53.92 1.99 0 2.52z" fill="#34A853"/></svg> },
      ].map(({ label, sub, href, icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '9px 16px', borderRadius: 12, background: '#0f172a', color: '#fff', textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.14)', transition: 'transform 0.2s, box-shadow 0.2s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(0,0,0,0.14)' }}>
          {icon}
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: 9, opacity: 0.6, fontWeight: 500 }}>{sub}</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{label}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

/* ── Main ──────────────────────────────────────────────────────────── */
export default function BuildingSection() {
  const { t } = useLang()
  const containerRef = useRef<HTMLDivElement>(null)
  const { activeStep, isActive } = useScrollProgress(containerRef, 2)

  // Hide navbar while sticky panels are active (same pattern as PhoneScrollSection)
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('phone-fullscreen', { detail: isActive }))
    return () => { window.dispatchEvent(new CustomEvent('phone-fullscreen', { detail: false })) }
  }, [isActive])

  return (
    <section id="how" style={{ position: 'relative', overflowX: 'clip' }}>

      {/* ── Tall scroll container: 2 sticky panels ── */}
      <div ref={containerRef} style={{ position: 'relative', height: '350vh' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

          {/* ── Panel 0: Problem ──────────────────────── */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdfa 50%, #f8fafc 100%)',
            opacity: activeStep === 0 ? 1 : 0,
            transform: activeStep === 0 ? 'translateY(0)' : 'translateY(-40px)',
            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)',
            pointerEvents: activeStep === 0 ? 'auto' : 'none',
          }}>
            {/* Subtle grid */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(32px, 6vw, 80px)' }}>

              {/* Left: problem copy */}
              <div style={{ flex: '0 0 auto', maxWidth: 520 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 99, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', marginBottom: 20 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', display: 'inline-block', animation: 'pulseRed 1.5s ease-in-out infinite' }} />
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#ef4444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.building.badge}</span>
                </div>

                <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 60px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 8 }}>
                  {t.building.titleLine1}
                </h1>
                <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 60px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 24, background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 55%, #0f766e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {t.building.titleLine2}
                </h1>

                <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.75, marginBottom: 28, maxWidth: 460 }}>
                  {t.building.subtitle}
                </p>

                <StoreButtons />

                {/* Admin panel callout for managers */}
                <a href={ADMIN_PANEL_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16, padding: '12px 16px', borderRadius: 14, background: 'rgba(13,148,136,0.06)', border: '1.5px solid rgba(13,148,136,0.25)', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s', maxWidth: 460 }}
                  onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.transform = 'translateY(-2px)'; t.style.boxShadow = '0 8px 24px rgba(13,148,136,0.16)'; t.style.borderColor = 'rgba(13,148,136,0.5)' }}
                  onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.transform = ''; t.style.boxShadow = ''; t.style.borderColor = 'rgba(13,148,136,0.25)' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>🧑‍💼</span>
                  <span style={{ flex: 1, fontSize: 13, color: '#475569', lineHeight: 1.5 }}>
                    <strong style={{ color: '#0f172a' }}>{t.building.adminBold}</strong> {t.building.adminText}
                  </span>
                  <span style={{ flexShrink: 0, fontSize: 12.5, fontWeight: 800, color: '#fff', background: '#0d9488', padding: '8px 14px', borderRadius: 99, whiteSpace: 'nowrap' }}>
                    {t.building.adminCta}
                  </span>
                </a>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {t.building.chips.map(chip => (
                    <div key={chip} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 99, background: '#fff', border: '1px solid rgba(13,148,136,0.15)', fontSize: 12, fontWeight: 600, color: '#0f172a', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                      <span style={{ color: '#0d9488' }}>{chip.charAt(0)}</span>{chip.slice(2)}
                    </div>
                  ))}
                </div>

                {/* Scroll hint */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24, opacity: 0.4 }}>
                  <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #64748b, transparent)' }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.building.scrollHint}</span>
                </div>
              </div>

              {/* Right: chat window */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <ChatWindow />
              </div>
            </div>
          </div>

          {/* ── Panel 1: Steps ────────────────────────── */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: '#fff',
            opacity: activeStep === 1 ? 1 : 0,
            transform: activeStep === 1 ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)',
            pointerEvents: activeStep === 1 ? 'auto' : 'none',
            padding: '0 24px',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontSize: 11, fontWeight: 800, color: '#0d9488', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>{t.building.stepsKicker}</p>
              <h2 style={{ fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 16 }}>
                {t.building.stepsTitle1}<br />
                <span style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t.building.stepsTitle2}</span>
              </h2>
              <p style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                {t.building.stepsSub}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 3vw, 40px)', width: '100%', maxWidth: 960 }} className="steps-grid">
              {[
                { n: '01', color: '#0d9488', bg: '#f0fdfa', border: 'rgba(13,148,136,0.15)', icon: '🏢' },
                { n: '02', color: '#6366f1', bg: '#f5f3ff', border: 'rgba(99,102,241,0.15)',  icon: '📱' },
                { n: '03', color: '#f59e0b', bg: '#fffbeb', border: 'rgba(245,158,11,0.15)',  icon: '✅' },
              ].map(({ n, color, bg, border, icon }, i) => {
                const { title, desc, time } = t.building.steps[i]
                return (
                <div key={n} style={{ position: 'relative' }}>
                  {i < 2 && <div className="step-arrow hidden md:flex" style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, color: '#cbd5e1', fontSize: 20, pointerEvents: 'none' }}>→</div>}
                  <div style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 24, padding: 'clamp(24px, 3vw, 36px)', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                    onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.transform = 'translateY(-5px)'; t.style.boxShadow = `0 14px 36px rgba(0,0,0,0.08), 0 0 0 1.5px ${color}25` }}
                    onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.transform = ''; t.style.boxShadow = '' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                      <div style={{ fontSize: 38, fontWeight: 900, color: `${color}20`, fontFamily: 'monospace', lineHeight: 1, letterSpacing: '-2px' }}>{n}</div>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: `${color}15`, border: `1.5px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{icon}</div>
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, flex: 1 }}>{desc}</p>
                    <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 99, background: `${color}10`, border: `1px solid ${color}28` }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
                      <span style={{ fontSize: 11, fontWeight: 800, color }}>{time}</span>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulseRed { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.4); } }
        @media (max-width: 1023px) {
          .w-full.max-w-7xl { flex-direction: column !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  )
}
