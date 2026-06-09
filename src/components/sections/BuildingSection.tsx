import { useEffect, useRef, useState } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'

/* ── Chat messages ─────────────────────────────────────────────────── */
interface ChatMsg {
  id: number; sender: string; text: string; time: string
  type: 'normal' | 'angry' | 'offtopic' | 'admin'
  avatar: string; own?: boolean
  annotation?: { label: string; color: string }
}
const MESSAGES: ChatMsg[] = [
  { id: 1,  sender: 'Petar K.',        text: 'Lift opet ne radi od jutros 😅 već treći put ovog meseca', time: '07:12', type: 'normal',  avatar: '#0891b2', annotation: { label: 'Kvar #1 — niko ne evidentira', color: '#ef4444' } },
  { id: 2,  sender: 'Dragica K.',      text: 'KO JE PARKIRAO BELI PUNTO ISPRED RAMPE?! NE MOGU DA IZAĐEM VEĆ 20 MINUTA!!!', time: '07:31', type: 'angry',   avatar: '#dc2626' },
  { id: 3,  sender: 'Žarko M.',        text: '🎤 Glasovna poruka (0:47)', time: '07:33', type: 'normal',  avatar: '#92400e', annotation: { label: 'Niko neće slušati 47 sekundi', color: '#f59e0b' } },
  { id: 4,  sender: 'Snežana V.',      text: 'Ej da li neko ima recept za sarmu? Pitam jer moja svekrva dolazi 😬', time: '07:38', type: 'offtopic', avatar: '#db2777' },
  { id: 5,  sender: 'Upravnik Zoran',  text: 'Dobro jutro svima! Prosleđujem Petru u vezi lifta 👍', time: '07:45', type: 'admin',   avatar: '#0d9488', own: true, annotation: { label: 'Petar je u grupi...', color: '#6366f1' } },
  { id: 6,  sender: 'Petar K.',        text: 'Zoran, ja sam tu 😂', time: '07:45', type: 'normal',  avatar: '#0891b2' },
  { id: 7,  sender: 'Upravnik Zoran',  text: 'A da, vidim 😅 e pa nazovi majstora Mišu', time: '07:46', type: 'admin',   avatar: '#0d9488', own: true },
  { id: 8,  sender: 'Milica P.',       text: 'Ko je Miša i koji je njegov broj?', time: '07:47', type: 'normal',  avatar: '#7c3aed' },
  { id: 9,  sender: 'Upravnik Zoran',  text: '0641234567, a čekaj to je broj moje žene 😳 ovo je: 0698765432', time: '07:49', type: 'admin',   avatar: '#0d9488', own: true, annotation: { label: 'Zoran šalje broj žene 💀', color: '#dc2626' } },
  { id: 10, sender: 'Boban R.',        text: 'hahahahaha Zoran MAJSTORE 😂😂😂', time: '07:49', type: 'offtopic', avatar: '#16a34a' },
  { id: 11, sender: 'Tatjana K.',      text: 'Molim sve da ne pišu ovde pre 9h, beba spava 🙏', time: '07:51', type: 'angry',   avatar: '#b45309' },
  { id: 12, sender: 'Dragica K.',      text: 'TATJANA MENI NE ODGOVARA DA LI ĆE NEKO MAKNUTI TEN PUNTO', time: '07:52', type: 'angry',   avatar: '#dc2626' },
  { id: 13, sender: 'Branko Ć.',       text: 'Ja mislim da je to Đorđeta kola iz 14ke, vidim ja svašta sa svog balkona 🧐', time: '07:54', type: 'normal',  avatar: '#475569' },
  { id: 14, sender: 'Đorđe P.',        text: 'deda Branko to je tvoj auto', time: '07:55', type: 'normal',  avatar: '#6366f1', annotation: { label: '😭', color: '#f59e0b' } },
  { id: 15, sender: 'Branko Ć.',       text: 'Ah da, parkirao sam da uzmem hleb, idem odmah 😇', time: '07:55', type: 'normal',  avatar: '#475569' },
  { id: 16, sender: 'Upravnik Zoran',  text: 'U redu, u redu. Dakle: lift, parking, i... šta je još bilo?', time: '08:10', type: 'admin',   avatar: '#0d9488', own: true, annotation: { label: 'Nema evidencije — ništa se ne prati', color: '#ef4444' } },
  { id: 17, sender: 'Milica P.',       text: 'Hodnik? Mesec i po? Metla? 🧹🧹🧹', time: '08:11', type: 'angry',   avatar: '#7c3aed' },
  { id: 18, sender: 'Mara B.',         text: 'I rupa na parkingu kod stuba 3, ja sam pala prošle nedelje!!!', time: '08:12', type: 'angry',   avatar: '#be185d' },
  { id: 19, sender: 'Petar K.',        text: 'I curenje u podrumu od pre 3 meseca', time: '08:12', type: 'normal',  avatar: '#0891b2' },
  { id: 20, sender: 'Snežana V.',      text: 'I žarulje na 4. spratu', time: '08:13', type: 'normal',  avatar: '#db2777' },
  { id: 21, sender: 'Branko Ć.',       text: 'I interfon od 2019. godine ne radi', time: '08:13', type: 'normal',  avatar: '#475569' },
  { id: 22, sender: 'Upravnik Zoran',  text: 'Ok ok ok, zapisujem... čekajte da nađem papir', time: '08:14', type: 'admin',   avatar: '#0d9488', own: true, annotation: { label: 'Papir. 2024. godina.', color: '#6366f1' } },
  { id: 23, sender: 'Boban R.',        text: 'Ej ima li ko kartu za Zvezda-Partizan? Pitam za druga 🙈⚽', time: '08:16', type: 'offtopic', avatar: '#16a34a' },
  { id: 24, sender: 'Dragica K.',      text: 'BOBAN NIJE OVO BUVLJAK NEGO GRUPA ZGRADE!!!', time: '08:17', type: 'angry',   avatar: '#dc2626' },
  { id: 25, sender: 'Žarko M.',        text: '🎤 Glasovna poruka (1:23)', time: '08:19', type: 'normal',  avatar: '#92400e' },
  { id: 26, sender: 'Ana T.',          text: '👀', time: '08:20', type: 'normal',  avatar: '#0d9488' },
  { id: 27, sender: 'Upravnik Zoran',  text: 'Našao papir! Dakle lift — to je bio kvar ili plansko isključenje?', time: '08:28', type: 'admin',   avatar: '#0d9488', own: true, annotation: { label: 'Lift ne radi od 07:12...', color: '#ef4444' } },
  { id: 28, sender: 'Dragica K.',      text: 'ZORAN. JE. LI. OVO. OZBILJNO.', time: '08:28', type: 'angry',   avatar: '#dc2626' },
  { id: 29, sender: 'Tatjana K.',      text: 'Beba se probudila. Hvala svima 😤', time: '08:29', type: 'angry',   avatar: '#b45309' },
  { id: 30, sender: 'Petar K.',        text: 'Možemo li nekako sve ovo organizovano pratiti? Ovo je haos 😩', time: '08:31', type: 'normal',  avatar: '#0891b2', annotation: { label: '8 kvarova, 0 rešenih', color: '#ef4444' } },
  { id: 31, sender: 'Upravnik Zoran',  text: 'Imaš pravo Petare. Pravim novu grupu "KVAROVI ZGRADA" 💪', time: '08:33', type: 'admin',   avatar: '#0d9488', own: true },
  { id: 32, sender: 'Milica P.',       text: 'Zoran već imamo 4 grupe. I sve su mrtve 🙃', time: '08:33', type: 'normal',  avatar: '#7c3aed', annotation: { label: 'Već 4 mrtve grupe 🪦', color: '#6366f1' } },
]
const INITIAL_SHOW = 6

/* ── Chat window ───────────────────────────────────────────────────── */
function ChatWindow() {
  const [count, setCount]   = useState(INITIAL_SHOW)
  const [typing, setTyping] = useState(false)
  const chatRef             = useRef<HTMLDivElement>(null)
  const timersRef           = useRef<ReturnType<typeof setTimeout>[]>([])

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
          <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>Palmira Toljatija 5 — Stan. zgr.</div>
          <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.65)', marginTop: 1 }}>40 stanova · 73 člana · haos 24/7</div>
        </div>
        <div style={{ display: 'flex', gap: 18, color: 'rgba(255,255,255,0.6)', fontSize: 18 }}><span>📞</span><span>⋮</span></div>
      </div>

      {/* Messages */}
      <div ref={chatRef} style={{ background: '#efeae2', backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0' fill='%23d3cbc3' fill-opacity='0.3'/%3E%3C/svg%3E")`, height: 'clamp(340px, 40vh, 460px)', overflowY: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 2, scrollbarWidth: 'thin' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
          <span style={{ background: 'rgba(255,255,255,0.7)', padding: '3px 12px', borderRadius: 8, fontSize: 11, color: '#54656f', fontWeight: 500 }}>Danas</span>
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
                    {msg.type === 'offtopic' && <span style={{ marginLeft: 5, fontSize: 9, fontWeight: 600, color: '#94a3b8', background: 'rgba(0,0,0,0.06)', padding: '1px 5px', borderRadius: 4 }}>van teme</span>}
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
        <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '8px 14px', fontSize: 13.5, color: '#8696a0' }}>Poruka</div>
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
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {[
        { label: 'App Store',   sub: 'Preuzmite na', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
        { label: 'Google Play', sub: 'Dostupno na',  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76c.3.17.65.18.97.05l12.44-7.18-2.63-2.63-10.78 9.76z" fill="#EA4335"/><path d="M20.82 9.73c-.42-.57-1.02-.96-1.73-1.08L4.15.28C3.83.1 3.48.1 3.18.27L13.96 11.05l6.86-1.32z" fill="#FBBC04"/><path d="M2.01 1.14c-.13.24-.2.52-.2.82v19.08c0 .3.07.58.2.82l.14.13L13.1 11.05v-.1L2.15 1z" fill="#4285F4"/><path d="M20.82 14.27l-3.23 1.87-2.63-2.63 2.63-2.63 3.23 1.87c.92.53.92 1.99 0 2.52z" fill="#34A853"/></svg> },
      ].map(({ label, sub, icon }) => (
        <a key={label} href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '9px 16px', borderRadius: 12, background: '#0f172a', color: '#fff', textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.14)', transition: 'transform 0.2s, box-shadow 0.2s' }}
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
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#ef4444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Problem koji poznajete</span>
                </div>

                <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 8 }}>
                  Vi gubite vreme.
                </h1>
                <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 24, background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 55%, #0f766e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Svaki jedini dan.
                </h1>

                <p style={{ fontSize: 17, color: '#64748b', lineHeight: 1.75, marginBottom: 32, maxWidth: 420 }}>
                  WhatsApp grupe, Excel tabele, zagubljeni kvarovi — upravljanje zgradom bez pravog alata košta vas sate i živce.
                </p>

                <StoreButtons />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                  {['✓ 500+ zgrada', '✓ Besplatno 30 dana', '✓ Počnite za 5 min'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 99, background: '#fff', border: '1px solid rgba(13,148,136,0.15)', fontSize: 12, fontWeight: 600, color: '#0f172a', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                      <span style={{ color: '#0d9488' }}>{t.charAt(0)}</span>{t.slice(2)}
                    </div>
                  ))}
                </div>

                {/* Scroll hint */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 40, opacity: 0.4 }}>
                  <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #64748b, transparent)' }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Skrolujte</span>
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
              <p style={{ fontSize: 11, fontWeight: 800, color: '#0d9488', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>Počnite za 5 minuta</p>
              <h2 style={{ fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 16 }}>
                Od haosa do reda<br />
                <span style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>u jednoj registraciji.</span>
              </h2>
              <p style={{ fontSize: 16, color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                Bez dugog podešavanja, bez tehničkog znanja.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 3vw, 40px)', width: '100%', maxWidth: 960 }} className="steps-grid">
              {[
                { n: '01', color: '#0d9488', bg: '#f0fdfa', border: 'rgba(13,148,136,0.15)', icon: '🏢', title: 'Registrujete zgradu', desc: 'Unesete naziv i adresu — dobijate jedinstveni kod. Bukvalno jedan minut posla.', time: '1 min' },
                { n: '02', color: '#6366f1', bg: '#f5f3ff', border: 'rgba(99,102,241,0.15)',  icon: '📱', title: 'Stanari se pridružuju', desc: 'Delite kod stanarima. Preuzmu aplikaciju, ukucaju kod — odmah su unutra.', time: '5 min' },
                { n: '03', color: '#f59e0b', bg: '#fffbeb', border: 'rgba(245,158,11,0.15)',  icon: '✅', title: 'Platforma radi odmah', desc: 'Kvarovi, finansije, glasanja, chat — sve aktivno od prvog dana.', time: 'Odmah!' },
              ].map(({ n, color, bg, border, icon, title, desc, time }, i) => (
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
              ))}
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
