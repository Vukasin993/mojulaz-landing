import { useRef, useEffect, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import PhoneMockup from '../ui/PhoneMockup'
import {
  DashboardScreen, MaintenanceScreen,
  NotificationsScreen, FinancesScreen, VotingScreen,
} from '../ui/PhoneScreens'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const steps = [
  {
    painLabel: 'Čest problem',
    painQuote: '"Gde je ta informacija? Zvali su me tri puta danas..."',
    emoji: '🏠', label: 'Pregled',
    title: 'Sve što je važno, na jednom mestu.',
    desc: 'Kvarovi, fond, obaveštenja, glasanja — sve odjednom. Nema traženja po porukama.',
    bullets: ['Aktuelni kvarovi i statusi', 'Stanje rezervnog fonda', 'Poslednje aktivnosti stanara'],
    accent: '#0d9488', bg: '#f0fdfa', screen: DashboardScreen,
  },
  {
    painLabel: 'Što kažu stanari',
    painQuote: '"Prijavio sam kvar pre mesec dana. Niko se nije javio."',
    emoji: '🔧', label: 'Kvarovi',
    title: 'Svaki kvar praćen do rešenja.',
    desc: 'Prijava za 10 sekundi — foto, opis, kategorija. Notifikacija odmah. Tehničar zna prioritete.',
    bullets: ['Foto dokumentacija kvara', 'Automatske notifikacije', 'Status vidljiv svima'],
    accent: '#f59e0b', bg: '#fffbeb', screen: MaintenanceScreen,
  },
  {
    painLabel: 'Čujemo ih često',
    painQuote: '"Važno obaveštenje — a niko ga nije video."',
    emoji: '📢', label: 'Obaveštenja',
    title: 'Poruka koja stigne do svakog stanara.',
    desc: 'Jedno obaveštenje — svi ga prime za sekunde. Vidite ko je pročitao, ko nije.',
    bullets: ['Push notifikacije na iOS i Android', 'Potvrda čitanja za svaki stan', 'Hitna i redovna obaveštenja'],
    accent: '#6366f1', bg: '#f5f3ff', screen: NotificationsScreen,
  },
  {
    painLabel: 'Pitanje na skupštini',
    painQuote: '"Gde ide novac od stanarine? Niko nam ne odgovara."',
    emoji: '💰', label: 'Finansije',
    title: 'Transparentnost koja gradi poverenje.',
    desc: 'Fond, uplate i rashodi u realnom vremenu. Svaki stanar vidi. Nema nagađanja.',
    bullets: ['Fond vidljiv svim stanarima', 'Pregled dugovanja po stanu', 'PDF izveštaji jednim klikom'],
    accent: '#10b981', bg: '#f0fdf4', screen: FinancesScreen,
  },
  {
    painLabel: 'Klasična skupština',
    painQuote: '"Skupština traje 3 sata. Niko se ne dogovori ni oko čega."',
    emoji: '🗳️', label: 'Glasanje',
    title: 'Demokratija koja traje 5 minuta.',
    desc: 'Otvorite glasanje, svaki stanar glasa sa telefona. Rezultati odmah. Skupštine — jedan klik.',
    bullets: ['Glasanje po stanu ili kvadraturi', 'Anonimni rezultati u realnom vremenu', 'Arhiva svih prethodnih anketa'],
    accent: '#8b5cf6', bg: '#faf5ff', screen: VotingScreen,
  },
]

const TILTS = [
  { ry: 0,   rx: 3,  rz: 0    },
  { ry: 4,   rx: 4,  rz: 0.5  },
  { ry: -4,  rx: 2,  rz: -0.5 },
  { ry: 6,   rx: 4,  rz: 0.5  },
  { ry: -3,  rx: 3,  rz: -0.3 },
]

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

/* ── Cities data ─────────────────────────────────────────────────── */
const cities = [
  {
    name: 'Beograd', buildings: 120, color: '#0d9488',
    coordinates: [20.46, 44.82] as [number, number],
    ticket: {
      problem: 'Lift ne radi — treći put ovog meseca',
      location: 'Blok 23, zgrada 14A',
      steps: [
        { label: 'Kvar prijavljen', time: '08:14', icon: '📋' },
        { label: 'Majstor pozvan',  time: '09:45', icon: '🔧' },
        { label: 'Rešeno',          time: '12:22', icon: '✓', final: true },
      ],
      duration: '4h 8min',
    },
  },
  {
    name: 'Novi Sad', buildings: 48, color: '#6366f1',
    coordinates: [19.83, 45.25] as [number, number],
    ticket: {
      problem: 'Curenje vode u podrumu',
      location: 'Liman 3, zgrada B',
      steps: [
        { label: 'Kvar prijavljen',  time: '07:52', icon: '📋' },
        { label: 'Vodoinstalater',   time: '10:10', icon: '🔧' },
        { label: 'Rešeno',           time: '15:40', icon: '✓', final: true },
      ],
      duration: '7h 48min',
    },
  },
  {
    name: 'Niš', buildings: 35, color: '#f59e0b',
    coordinates: [21.9, 43.32] as [number, number],
    ticket: {
      problem: 'Parking — neovlašćeno vozilo blokira rampu',
      location: 'Medijana, zgrada 7',
      steps: [
        { label: 'Prijava poslata',  time: '08:03', icon: '📋' },
        { label: 'Komunalna policija', time: '08:55', icon: '🚔' },
        { label: 'Rešeno',           time: '10:15', icon: '✓', final: true },
      ],
      duration: '2h 12min',
    },
  },
  {
    name: 'Kragujevac', buildings: 28, color: '#10b981',
    coordinates: [20.92, 44.01] as [number, number],
    ticket: {
      problem: 'Interfon ne radi na 1–4. spratu',
      location: 'Aerodrom, zgrada C2',
      steps: [
        { label: 'Prijavili 3 stanara', time: '09:20', icon: '📋' },
        { label: 'Servis pozvan',       time: '11:00', icon: '🔧' },
        { label: 'Rešeno',              time: '13:45', icon: '✓', final: true },
      ],
      duration: '4h 25min',
    },
  },
  {
    name: 'Subotica', buildings: 22, color: '#0891b2',
    coordinates: [19.67, 46.1] as [number, number],
    ticket: {
      problem: 'Grejanje isključeno u delu zgrade',
      location: 'Centar, zgrada 3',
      steps: [
        { label: 'Kvar prijavljen',   time: '06:45', icon: '📋' },
        { label: 'Toplane obaveštene', time: '07:30', icon: '📞' },
        { label: 'Rešeno',             time: '11:50', icon: '✓', final: true },
      ],
      duration: '5h 5min',
    },
  },
  {
    name: 'Zrenjanin', buildings: 18, color: '#8b5cf6',
    coordinates: [20.38, 45.38] as [number, number],
    ticket: {
      problem: 'Osvetljenje u hodniku ne radi',
      location: 'Đerđ Klajn, ulaz 2',
      steps: [
        { label: 'Kvar prijavljen', time: '17:05', icon: '📋' },
        { label: 'Električar pozvan', time: '17:30', icon: '🔧' },
        { label: 'Rešeno',           time: '18:20', icon: '✓', final: true },
      ],
      duration: '1h 15min',
    },
  },
]

// ── Animated number counter hook ─────────────────────────────────
function useCountUp(target: number) {
  const [display, setDisplay] = useState(0)
  const obj = useRef({ val: 0 })

  useEffect(() => {
    gsap.killTweensOf(obj.current)
    obj.current.val = 0
    setDisplay(0)
    gsap.to(obj.current, {
      val: target,
      duration: 1.1,
      ease: 'power3.out',
      onUpdate: () => setDisplay(Math.round(obj.current.val)),
    })
  }, [target])

  return display
}

// ── CitiesSection ─────────────────────────────────────────────────
function CitiesSection() {
  const [idx, setIdx] = useState(0)
  const mapRef  = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const prevIdx = useRef(-1)

  const city  = cities[idx]
  const count = useCountUp(city.buildings)

  // ── Mount: draw outline + stagger city dots in ────────────────
  useEffect(() => {
    const container = mapRef.current
    if (!container) return
    // Draw the Serbia outline path
    const outline = container.querySelector<SVGPathElement>('.serbia-outline')
    if (outline) {
      const len = outline.getTotalLength()
      gsap.set(outline, { strokeDasharray: len, strokeDashoffset: len })
      gsap.to(outline, { strokeDashoffset: 0, duration: 2.8, ease: 'power2.inOut', delay: 0.4 })
    }
    const dots = container.querySelectorAll<SVGCircleElement>('.city-dot')
    gsap.fromTo(
      dots,
      { scale: 0, opacity: 0, transformOrigin: '50% 50%' },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.14, ease: 'back.out(1.7)', delay: 1.8 }
    )
    animateCityIn(0)
  }, [])

  // ── Rotation timer ────────────────────────────────────────────
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          opacity: 0, y: -18, duration: 0.32, ease: 'power2.in',
          onComplete: () => setIdx(i => (i + 1) % cities.length),
        })
      } else {
        setIdx(i => (i + 1) % cities.length)
      }
    }, 3600)
    return () => clearInterval(intervalRef.current)
  }, [])

  // ── Animate city rings + card when idx changes ────────────────
  const animateCityIn = useCallback((i: number) => {
    const container = mapRef.current
    if (!container) return
    // Stop old rings
    cities.forEach((_, j) => {
      const r1 = container.querySelector(`#cr1-${j}`) as SVGCircleElement | null
      const r2 = container.querySelector(`#cr2-${j}`) as SVGCircleElement | null
      const r3 = container.querySelector(`#cr3-${j}`) as SVGCircleElement | null
      ;[r1, r2, r3].forEach(el => { if (el) { gsap.killTweensOf(el); gsap.set(el, { attr: { r: 7 }, opacity: 0 }) } })
    })
    // New rings expand outward infinitely
    const tl = gsap.timeline({ repeat: -1 })
    const rings = [
      container.querySelector(`#cr1-${i}`) as SVGCircleElement | null,
      container.querySelector(`#cr2-${i}`) as SVGCircleElement | null,
      container.querySelector(`#cr3-${i}`) as SVGCircleElement | null,
    ].filter(Boolean) as SVGCircleElement[]
    rings.forEach((el, ri) => {
      tl.fromTo(
        el,
        { attr: { r: 7 }, opacity: 0.75 },
        { attr: { r: 32 + ri * 6 }, opacity: 0, duration: 1.9 + ri * 0.3, ease: 'power2.out' },
        ri * 0.55
      )
    })
    // Dot bump
    const dot = container.querySelector(`#cd-${i}`) as SVGCircleElement | null
    if (dot) gsap.fromTo(dot, { attr: { r: 6 } }, { attr: { r: 9 }, duration: 0.35, ease: 'back.out(3)', yoyo: true, repeat: 1 })
    // Spotlight glow
    const glow = container.querySelector(`#cg-${i}`) as SVGCircleElement | null
    if (glow) gsap.fromTo(glow, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' })
    // Fade previous city glow
    if (prevIdx.current >= 0) {
      const pg = container.querySelector(`#cg-${prevIdx.current}`) as SVGCircleElement | null
      if (pg) gsap.to(pg, { opacity: 0, duration: 0.5 })
    }
  }, [])

  useEffect(() => {
    if (prevIdx.current === idx) return
    // Card slide in
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
    }
    animateCityIn(idx)
    prevIdx.current = idx
  }, [idx, animateCityIn])

  const maxBuildings = Math.max(...cities.map(c => c.buildings))
  const ticket = city.ticket

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #f8fafc 0%, #f0fdfa 55%, #f8fafc 100%)',
      position: 'relative', overflow: 'hidden', padding: '60px 24px',
    }}>
      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1040 }}>

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 14px', borderRadius: 99, background: 'rgba(13,148,136,0.07)', border: '1px solid rgba(13,148,136,0.18)', marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0d9488', display: 'inline-block', animation: 'ciPulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: '#0d9488', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Gde smo prisutni</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', color: '#0f172a', marginBottom: 8 }}>
            Raste u celoj Srbiji.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#64748b', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
            Više od 270 zgrada već koristi MojUlaz. Svake nedelje ih je više.
          </p>
        </div>

        {/* ── Main two-col: content left, map right ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* ── LEFT: city info + resolved ticket ── */}
          <div ref={cardRef} style={{ flex: '0 1 400px', minWidth: 280 }}>

            {/* City + count — bare, no card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: city.color, boxShadow: `0 0 12px ${city.color}` }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: city.color, letterSpacing: '0.04em' }}>{city.name}</span>
            </div>

            <div style={{ fontSize: 'clamp(56px, 9vw, 88px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-4px', color: '#0f172a', marginBottom: 4, fontVariantNumeric: 'tabular-nums' }}>
              {count}<span style={{ color: city.color }}>+</span>
            </div>
            <div style={{ fontSize: 14, color: '#64748b', marginBottom: 8 }}>
              zgrada koristi MojUlaz
            </div>

            {/* Network bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
              <div style={{ flex: 1, height: 3, background: '#e2e8f0', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(city.buildings / maxBuildings) * 100}%`, background: city.color, borderRadius: 99, transition: 'width 1s cubic-bezier(0.16,1,0.3,1), background 0.6s ease' }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: city.color, whiteSpace: 'nowrap' }}>
                {Math.round(city.buildings / 271 * 100)}% mreže
              </span>
            </div>

            {/* ── Resolved ticket ── */}
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: '#94a3b8', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Primer rešenog kvara
              </span>
            </div>

            {/* Problem header */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 2, lineHeight: 1.4 }}>
                {ticket.problem}
              </div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>{ticket.location}</div>
            </div>

            {/* Timeline steps */}
            <div style={{ position: 'relative', paddingLeft: 28 }}>
              {/* Vertical connector line */}
              <div style={{ position: 'absolute', left: 7, top: 10, bottom: 10, width: 2, background: `linear-gradient(to bottom, ${city.color}, ${city.color}20)`, borderRadius: 99, transition: 'background 0.6s ease' }} />

              {ticket.steps.map((step, si) => (
                <div key={si} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: si < ticket.steps.length - 1 ? 20 : 0, position: 'relative' }}>
                  {/* Step dot */}
                  <div style={{
                    position: 'absolute', left: -28, top: 2,
                    width: 16, height: 16, borderRadius: '50%',
                    background: step.final ? city.color : '#fff',
                    border: `2px solid ${step.final ? city.color : '#e2e8f0'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8,
                    boxShadow: step.final ? `0 0 10px ${city.color}60` : 'none',
                    transition: 'background 0.6s, border-color 0.6s, box-shadow 0.6s',
                  }}>
                    {step.final && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3.5 6L6.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>

                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: step.final ? 700 : 500, color: step.final ? city.color : '#334155', lineHeight: 1.3, transition: 'color 0.6s' }}>
                      {step.icon} {step.label}
                    </div>
                    <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 1 }}>{step.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolution time */}
            <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 99, background: `${city.color}0f`, border: `1px solid ${city.color}22`, transition: 'background 0.6s, border-color 0.6s' }}>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke={city.color} strokeWidth="1.3"/>
                <path d="M6 3.5V6L7.5 7.5" stroke={city.color} strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: 12, fontWeight: 700, color: city.color }}>Rešeno za {ticket.duration}</span>
            </div>

            {/* Progress dots */}
            <div style={{ display: 'flex', gap: 7, marginTop: 36 }}>
              {cities.map((c, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (cardRef.current) {
                      gsap.to(cardRef.current, {
                        opacity: 0, y: -14, duration: 0.25, ease: 'power2.in',
                        onComplete: () => setIdx(i),
                      })
                    } else setIdx(i)
                  }}
                  style={{ height: 5, borderRadius: 99, background: i === idx ? c.color : 'rgba(0,0,0,0.1)', width: i === idx ? 24 : 5, border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Serbia map ── */}
          <div ref={mapRef} style={{ flexShrink: 0, width: 300, height: 360 }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [20.9, 44.15], scale: 4200 }}
              width={300}
              height={360}
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: Array<{ id: string | number; rsmKey: string }> }) =>
                  geographies
                    .filter((geo) => Number(geo.id) === 688)
                    .map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        className="serbia-outline"
                        fill="rgba(13,148,136,0.05)"
                        stroke="rgba(13,148,136,0.3)"
                        strokeWidth={1.2}
                        style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                      />
                    ))
                }
              </Geographies>

              {cities.map((c, i) => (
                <Marker key={i} coordinates={c.coordinates}>
                  {/* Spotlight glow */}
                  <circle id={`cg-${i}`} r={20} fill={c.color} opacity={0} style={{ filter: 'blur(8px)' }} />
                  {/* Expanding rings */}
                  <circle id={`cr1-${i}`} r={7} fill="none" stroke={c.color} strokeWidth={1.5} opacity={0} />
                  <circle id={`cr2-${i}`} r={7} fill="none" stroke={c.color} strokeWidth={1}   opacity={0} />
                  <circle id={`cr3-${i}`} r={7} fill="none" stroke={c.color} strokeWidth={0.7} opacity={0} />
                  {/* City dot */}
                  <circle
                    id={`cd-${i}`}
                    className="city-dot"
                    r={i === idx ? 7 : 4}
                    fill={c.color}
                    opacity={i === idx ? 1 : 0.3}
                    style={{ transition: 'opacity 0.5s ease' }}
                  />
                  {/* Label */}
                  <text
                    textAnchor="middle"
                    y={-13}
                    fontSize={i === idx ? 9.5 : 8}
                    fontWeight={i === idx ? 800 : 500}
                    fill={c.color}
                    opacity={i === idx ? 1 : 0.4}
                    fontFamily="system-ui, sans-serif"
                    style={{ transition: 'opacity 0.5s', pointerEvents: 'none' }}
                  >
                    {c.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, marginTop: 48, opacity: 0.35 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Pogledajte aplikaciju</span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ animation: 'ciArrow 2s ease-in-out infinite' }}>
            <path d="M10 4v12M4 10l6 6 6-6" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes ciPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.5)} }
        @keyframes ciArrow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
      `}</style>
    </div>
  )
}

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

      {/* ── Cities section ── */}
      <CitiesSection />

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
