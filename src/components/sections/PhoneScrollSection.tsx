import { useRef, useEffect, useState } from 'react'
import type { StaticImageData } from 'next/image'
import PhoneMockup from '../ui/PhoneMockup'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import homeDashboardImg from '../../assets/section/home-dashbaord.png'
import zahtev2Img from '../../assets/section/zahtev2.png'
import obavestenjaImg from '../../assets/section/obavestenja.png'
import finance2Img from '../../assets/section/finance2.png'
import pollImg from '../../assets/section/poll.png'

/* ── Screenshot screens ────────────────────────────────────────────── */
function ScreenImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return <img src={src.src} alt={alt} draggable={false} style={{ width: '100%', display: 'block' }} />
}

const DashboardScreen     = () => <ScreenImage src={homeDashboardImg} alt="MojUlaz — početni ekran sa pregledom zgrade" />
const RequestsScreen      = () => <ScreenImage src={zahtev2Img} alt="MojUlaz — zahtev sa istorijom statusa i komentarima" />
const NotificationsScreen = () => <ScreenImage src={obavestenjaImg} alt="MojUlaz — obaveštenja sa oznakama važnosti" />
const FinancesScreen      = () => <ScreenImage src={finance2Img} alt="MojUlaz — finansije sa stanjem fonda i mesečnim pregledom" />
const PollScreen          = () => <ScreenImage src={pollImg} alt="MojUlaz — anketa sa glasanjem stanara" />

const steps = [
  {
    painLabel: 'Čest problem',
    painQuote: '"Koliko imamo u fondu? Šta je sa liftom? Kad je sastanak? — svi pitaju mene."',
    label: 'Pregled',
    title: 'Ceo ulaz u jednom pogledu.',
    desc: 'Otvorite aplikaciju i odmah vidite šta se dešava: nova obaveštenja, aktivni zahtevi, ankete u toku i stanje fonda.',
    bullets: ['Obaveštenja, zahtevi i ankete na broju', 'Stanje fonda na početnom ekranu', 'Brzi pristup održavanju i dokumentima'],
    emoji: '🏠', accent: '#0d9488', bg: '#f0fdfa', screen: DashboardScreen,
  },
  {
    painLabel: 'Šta kažu stanari',
    painQuote: '"Prijavio sam kvar pre mesec dana. Niko se nije javio."',
    label: 'Zahtevi',
    title: 'Svaki zahtev praćen do rešenja.',
    desc: 'Stanar prijavi problem za par sekundi, a status se prati od prijave do rešenja — uz istoriju i komentare.',
    bullets: ['Istorija statusa za svaki zahtev', 'Komentari i dogovor na jednom mestu', 'Status vidljiv svim stanarima'],
    emoji: '🔧', accent: '#f59e0b', bg: '#fffbeb', screen: RequestsScreen,
  },
  {
    painLabel: 'Čujemo ih često',
    painQuote: '"Važno obaveštenje — a niko ga nije video."',
    label: 'Obaveštenja',
    title: 'Poruka koja stigne do svakog stanara.',
    desc: 'Jedno obaveštenje i svi ga prime istog trenutka — uz jasnu oznaku koliko je hitno.',
    bullets: ['Push notifikacije na iOS i Android', 'Oznake važnosti: kritično, važno, normalno', 'Kategorije — održavanje, sastanci, rokovi'],
    emoji: '📢', accent: '#6366f1', bg: '#f5f3ff', screen: NotificationsScreen,
  },
  {
    painLabel: 'Pitanje na skupštini',
    painQuote: '"Gde ide novac od stanarine? Niko nam ne odgovara."',
    label: 'Finansije',
    title: 'Transparentnost koja gradi poverenje.',
    desc: 'Stanje fonda, prihodi i rashodi u realnom vremenu. Svaki stanar vidi na šta novac odlazi.',
    bullets: ['Stanje fonda vidljivo svim stanarima', 'Prihodi i rashodi jasno razdvojeni', 'Mesečni pregled za celu godinu'],
    emoji: '💰', accent: '#10b981', bg: '#f0fdf4', screen: FinancesScreen,
  },
  {
    painLabel: 'Klasična skupština',
    painQuote: '"Skupština traje 3 sata. Niko se ne dogovori ni oko čega."',
    label: 'Ankete',
    title: 'Odluke bez sazivanja skupštine.',
    desc: 'Pokrenete anketu, stanari glasaju sa telefona, a rezultati stižu odmah — bez tročasovnih sastanaka.',
    bullets: ['Glasanje direktno iz aplikacije', 'Rezultati vidljivi u realnom vremenu', 'Anketa iz zahteva — kad treba odluka stanara'],
    emoji: '🗳️', accent: '#8b5cf6', bg: '#faf5ff', screen: PollScreen,
  },
]

const TILTS = [
  { ry: 0,   rx: 3,  rz: 0    },
  { ry: 4,   rx: 4,  rz: 0.5  },
  { ry: -4,  rx: 2,  rz: -0.5 },
  { ry: 6,   rx: 4,  rz: 0.5  },
  { ry: -3,  rx: 3,  rz: -0.3 },
]

export default function PhoneScrollSection() {
  const sectionRef   = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { activeStep, isActive } = useScrollProgress(containerRef, steps.length)
  const [phoneVisible, setPhoneVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setPhoneVisible(true); obs.disconnect() } },
      { threshold: 0.05 },
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('phone-fullscreen', { detail: isActive }))
    return () => { window.dispatchEvent(new CustomEvent('phone-fullscreen', { detail: false })) }
  }, [isActive])

  const step = steps[activeStep]
  const tilt = TILTS[activeStep] ?? TILTS[0]

  const scrollToStep = (i: number) => {
    const el = containerRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const max = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + (i / steps.length) * max + 40, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="features"
      style={{ position: 'relative', background: '#ffffff', overflowX: 'clip' }}
    >

      {/* ── Dark chapter break — visual separator before phone features ── */}
      <div style={{
        height: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(160deg, #0f172a 0%, #0d2d26 50%, #0f172a 100%)',
        position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '0 24px',
      }}>
        {/* Decorative grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(20,184,166,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.05) 1px, transparent 1px)', backgroundSize: '72px 72px', pointerEvents: 'none' }} />
        {/* Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', maxWidth: 800, maxHeight: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px', borderRadius: 99, border: '1px solid rgba(20,184,166,0.3)', background: 'rgba(20,184,166,0.08)', marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#14b8a6', display: 'inline-block', animation: 'chapterPulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: '#14b8a6', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Rešenje</span>
          </div>

          <h2 style={{ fontSize: 'clamp(40px, 7vw, 88px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-3px', color: '#fff', marginBottom: 20, animation: 'chapterFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both' }}>
            Jedna aplikacija.
          </h2>
          <h2 style={{ fontSize: 'clamp(40px, 7vw, 88px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-3px', marginBottom: 32, background: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 50%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'chapterFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.12s both' }}>
            Sve pod kontrolom.
          </h2>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.7, animation: 'chapterFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.24s both' }}>
            Pogledajte kako MojUlaz rešava sve što vas muči.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, animation: 'chapterFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.36s both' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: s.accent, opacity: 0.5 }} />
              ))}
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{steps.length} funkcija</span>
          </div>

          {/* Scroll arrow */}
          <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, animation: 'chapterArrow 2s ease-in-out infinite' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(20,184,166,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        <style>{`
          @keyframes chapterPulse   { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.5); } }
          @keyframes chapterFadeUp  { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes chapterArrow   { 0%, 100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(8px); opacity: 1; } }
        `}</style>
      </div>

      <div ref={containerRef} style={{ position: 'relative', height: `${(steps.length + 1.2) * 100}vh` }}>

        <div style={{
          position: 'sticky', top: 0, height: '100vh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>

          {/* Background tint */}
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 55%, ${step.bg} 0%, #ffffff 60%)`, transition: 'background 0.8s ease', pointerEvents: 'none' }} />

          {/* Step title — centered, one at a time */}
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <div key={activeStep} style={{ display: 'flex', alignItems: 'center', gap: 12, animation: 'titleIn 0.45s cubic-bezier(0.22,1,0.36,1) forwards' }}>
              <span style={{ fontSize: 'clamp(28px, 3.5vw, 38px)' }}>{step.emoji}</span>
              <span style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 900, color: step.accent, letterSpacing: '-0.5px' }}>{step.label}</span>
            </div>
            <div style={{ display: 'flex', gap: 5 }}>
              {steps.map((_, i) => (
                <button key={i} onClick={() => scrollToStep(i)} style={{ width: i === activeStep ? 20 : 6, height: 6, borderRadius: 99, border: 'none', cursor: 'pointer', padding: 0, background: i === activeStep ? step.accent : 'rgba(0,0,0,0.12)', transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)', outline: 'none' }} />
              ))}
            </div>
          </div>

          {/* Three-column: left | phone | right */}
          <div className="phone-3col w-full" style={{ position: 'relative', zIndex: 1, maxWidth: 1200, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 0 }}>

            {/* LEFT PANEL */}
            <div className="phone-left-panel" key={`left-${activeStep}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: 40, animation: 'panelFromLeft 0.55s cubic-bezier(0.22,1,0.36,1) forwards' }}>
              <div style={{ maxWidth: 260, textAlign: 'right' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 99, background: `${step.accent}10`, border: `1px solid ${step.accent}25`, marginBottom: 14 }}>
                  <span style={{ fontSize: 9, fontWeight: 800, color: step.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{step.painLabel}</span>
                </div>
                <div style={{ position: 'relative', padding: '16px 18px', background: step.bg, border: `1px solid ${step.accent}20`, borderRight: `3px solid ${step.accent}`, borderRadius: '12px 3px 12px 12px', marginBottom: 16 }}>
                  <span style={{ fontSize: 16, position: 'absolute', top: -8, left: 14 }}>💬</span>
                  <p style={{ fontSize: 14, fontStyle: 'italic', color: '#475569', lineHeight: 1.6, margin: 0 }}>{step.painQuote}</p>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', background: `${step.accent}12`, border: `1.5px solid ${step.accent}35`, color: step.accent, fontSize: 11, fontWeight: 900, fontFamily: 'monospace' }}>
                  {String(activeStep + 1).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* CENTER PHONE */}
            <div style={{ flexShrink: 0, perspective: 1400, display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: -40, borderRadius: 72, background: `radial-gradient(ellipse at center, ${step.accent}28 0%, transparent 65%)`, filter: 'blur(22px)', transition: 'background 0.7s ease', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: -16, borderRadius: 60, border: `1px solid ${step.accent}18`, transition: 'border-color 0.7s ease', pointerEvents: 'none' }} />
                <div style={{
                  width: 270,
                  transform: phoneVisible
                    ? `rotateY(${tilt.ry}deg) rotateX(${tilt.rx}deg) rotateZ(${tilt.rz}deg)`
                    : 'translateY(80px) scale(0.88) rotateX(18deg)',
                  opacity: phoneVisible ? 1 : 0,
                  transition: 'transform 1.1s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease',
                  filter: `drop-shadow(0 32px 52px rgba(0,0,0,0.13)) drop-shadow(0 0 30px ${step.accent}35)`,
                }}>
                  <PhoneMockup>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      {steps.map(({ screen: SC }, i) => (
                        <div key={i} style={{
                          position: i === 0 ? 'relative' : 'absolute', inset: 0,
                          opacity: i === activeStep ? 1 : 0,
                          transform: i === activeStep ? 'translateY(0) scale(1)' : i < activeStep ? 'translateY(-10px) scale(0.97)' : 'translateY(10px) scale(0.97)',
                          transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)',
                          pointerEvents: i === activeStep ? 'auto' : 'none',
                        }}><SC /></div>
                      ))}
                    </div>
                  </PhoneMockup>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="phone-right-panel" key={`right-${activeStep}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 40, animation: 'panelFromRight 0.55s cubic-bezier(0.22,1,0.36,1) forwards' }}>
              <div style={{ maxWidth: 280 }}>
                <h3 style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: 10 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.7, marginBottom: 18 }}>
                  {step.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {step.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: `${step.accent}12`, border: `1px solid ${step.accent}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                          <path d="M1 3.5L3 5.5L6 1.5" stroke={step.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: 13.5, color: '#334155', fontWeight: 500 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical dot nav */}
          <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 8, zIndex: 20 }}>
            {steps.map((st, i) => (
              <button key={i} onClick={() => scrollToStep(i)} title={st.label} style={{ width: 5, height: i === activeStep ? 24 : 5, borderRadius: 99, border: 'none', cursor: 'pointer', padding: 0, background: i === activeStep ? step.accent : i < activeStep ? `${step.accent}45` : 'rgba(0,0,0,0.14)', transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)', outline: 'none' }} />
            ))}
          </div>

          {/* Scroll hint */}
          {activeStep === 0 && (
            <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.45, animation: 'fadeInUp 1s ease 1s both' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Skrolujte</span>
              <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, #64748b, transparent)' }} />
            </div>
          )}

        </div>
      </div>

      <style>{`
        @keyframes panelFromLeft  { from { opacity: 0; transform: translateX(-36px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes panelFromRight { from { opacity: 0; transform: translateX(36px);  } to { opacity: 1; transform: translateX(0); } }
        @keyframes titleIn        { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0);   } }
        @keyframes fadeInUp       { from { opacity: 0; transform: translateX(-50%) translateY(10px); } to { opacity: 0.45; transform: translateX(-50%) translateY(0); } }
        @media (max-width: 1023px) {
          .phone-3col { flex-direction: column !important; gap: 24px !important; align-items: center !important; }
          .phone-left-panel { display: none !important; }
          .phone-right-panel { align-items: center !important; padding-left: 0 !important; }
          .phone-right-panel > div { text-align: center; max-width: 360px !important; }
          .phone-right-panel h3 { font-size: 20px !important; }
        }
      `}</style>
    </section>
  )
}
