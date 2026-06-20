import { useState, useEffect, useRef, useCallback } from 'react'
import BrowserMockup from '../ui/BrowserMockup'
import PhoneMockup from '../ui/PhoneMockup'
import { ArrowRight, Play, Check, Lock, Star } from '../ui/icons'
import homeDashboardImg from '../../assets/section/home-dashbaord.png'
const adminOverview = '/screenshots/admin-overview.png'

/* ── Floating particles ─────────────────────────────────────────────── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 3 + (i % 3) * 2,
  x: 5 + (i * 5.2) % 90,
  duration: 6 + (i % 4) * 2,
  delay: (i * 0.45) % 8,
  px: ((i % 5) - 2) * 14,
}))

function Particles() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {PARTICLES.map(({ id, size, x, duration, delay, px }) => (
        <div
          key={id}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: `${x}%`,
            width: size,
            height: size,
            borderRadius: '50%',
            background: `rgba(13,148,136,${0.25 + (id % 3) * 0.12})`,
            '--px': `${px}px`,
            animation: `particleRise ${duration}s ease-out ${delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

/* ── Hero ───────────────────────────────────────────────────────────── */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2
    setMouse({ x, y })
  }, [])

  const resetMouse = useCallback(() => setMouse({ x: 0, y: 0 }), [])

  const mockupTransform = `perspective(1100px) rotateY(${mouse.x * -6}deg) rotateX(${mouse.y * 3}deg) translateZ(0)`

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 relative"
      style={{ background: 'linear-gradient(155deg, #f0fdfa 0%, #ffffff 55%)' }}
    >
      {/* Animated blobs */}
      <div
        className="animate-blob"
        style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      <div
        className="animate-blob-alt"
        style={{
          position: 'absolute', bottom: '-100px', left: '-60px',
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,184,166,0.09) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      <Particles />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(13,148,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.3) 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.3) 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">

          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 bg-primary-50 text-primary-700 border border-primary-100"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
              Softver za upravljanje stambenim zajednicama
            </div>

            <h1
              className="text-[clamp(40px,6vw,68px)] font-extrabold text-ink leading-[1.08] tracking-[-2px] mb-6"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(28px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s',
              }}
            >
              Prestanite da vodite<br />
              <span className="grad-text-animated">stambenu zajednicu</span><br />
              kroz Viber grupe.
            </h1>

            <p
              className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s',
              }}
            >
              Obaveštenja, prijava kvarova, finansije, dokumentacija i glasanja —
              sve za upravljanje zgradom na jednom mestu. Bez Viber grupa i papira.
            </p>

            <div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.7s ease 0.3s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s',
              }}
            >
              <a
                href="https://app.moj-ulaz.com/register"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-full px-6 py-3.5 transition-all hover:shadow-[0_4px_20px_rgba(13,148,136,0.45)] hover:-translate-y-1 active:translate-y-0"
              >
                Registrujte se besplatno
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink bg-white hover:bg-primary-50 border border-slate-200 hover:border-primary-300 rounded-full px-6 py-3.5 transition-all hover:-translate-y-1 active:translate-y-0 hover:shadow-md"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Play className="w-4 h-4 text-primary-600" />
                Pogledajte demo
              </a>
            </div>

            {/* App store buttons */}
            <div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
              style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.38s' }}
            >
              <a href="https://apps.apple.com/us/app/mojulaz/id6776008803" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 18px', borderRadius: 12, background: '#000', color: '#fff', textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.18)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.22)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(0,0,0,0.18)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: 9, opacity: 0.75, fontWeight: 500 }}>Preuzmite na</div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>App Store</div>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.mojulaz" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 18px', borderRadius: 12, background: '#000', color: '#fff', textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.18)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.22)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(0,0,0,0.18)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76c.3.17.65.18.97.05l12.44-7.18-2.63-2.63-10.78 9.76z" fill="#EA4335"/><path d="M20.82 9.73c-.42-.57-1.02-.96-1.73-1.08L4.15.28C3.83.1 3.48.1 3.18.27L13.96 11.05l6.86-1.32z" fill="#FBBC04"/><path d="M2.01 1.14c-.13.24-.2.52-.2.82v19.08c0 .3.07.58.2.82l.14.13L13.1 11.05v-.1L2.15 1z" fill="#4285F4"/><path d="M20.82 14.27l-3.23 1.87-2.63-2.63 2.63-2.63 3.23 1.87c.92.53.92 1.99 0 2.52z" fill="#34A853"/></svg>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: 9, opacity: 0.75, fontWeight: 500 }}>Dostupno na</div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Google Play</div>
                </div>
              </a>
            </div>

            <div
              className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-slate-500"
              style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.45s' }}
            >
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-primary-500" />
                30 dana besplatno
              </span>
              <span className="text-slate-300 hidden sm:block">·</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-primary-500" />
                Bez kreditne kartice
              </span>
              <span className="text-slate-300 hidden sm:block">·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary-500" />
                Podrška na srpskom
              </span>
            </div>
          </div>

          {/* Right: device mockups */}
          <div
            className="flex-1 w-full max-w-2xl relative"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? mockupTransform : `perspective(1100px) translateY(40px) scale(0.94)`,
              transition: loaded
                ? 'transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease 0.25s'
                : 'opacity 0.8s ease 0.25s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s',
            }}
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-primary-100/50 blur-3xl pointer-events-none animate-float-slow" />
            <div className="absolute -bottom-12 -left-8 w-72 h-72 rounded-full bg-primary-50/60 blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

            <div className="relative z-10">
              <BrowserMockup
                src={adminOverview}
                alt="MojUlaz softver za upravljanje stambenim zajednicama — admin panel sa pregledom zgrade, stanara i kvarova"
                className="w-full"
              />
              <div
                className="absolute -bottom-4 right-2 sm:right-0 lg:-right-10 z-20 w-[120px] sm:w-[138px] lg:w-[155px] animate-float"
                style={{ animationDelay: '1s' }}
              >
                <PhoneMockup>
                  <img
                    src={homeDashboardImg.src}
                    alt="MojUlaz mobilna aplikacija za stanare — početni ekran sa obaveštenjima, kvarovima i stanjem fonda"
                    draggable={false}
                    className="block h-full w-full object-cover"
                  />
                </PhoneMockup>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="absolute -top-5 -left-4 z-30 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="glass rounded-2xl px-4 py-3 shadow-lg">
                <div className="text-xs font-bold text-slate-500 mb-0.5">Aktivnih zgrada</div>
                <div className="text-2xl font-extrabold text-primary-600 leading-none">500+</div>
              </div>
            </div>
            <div className="absolute bottom-16 -left-6 z-30 animate-float" style={{ animationDelay: '3s' }}>
              <div className="glass rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[0,1,2,3,4].map(i => <Star key={i} className="w-3 h-3 text-amber-400" />)}
                </div>
                <div className="text-xs font-bold text-slate-600">98% zadovoljnih</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
