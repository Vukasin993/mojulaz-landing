import { useState, useEffect, useRef, useCallback } from 'react'
import BrowserMockup from '../ui/BrowserMockup'
import PhoneMockup from '../ui/PhoneMockup'
import MobileAppPreview from '../ui/MobileAppPreview'
import { ArrowRight, Check, Lock, Star } from '../ui/icons'
import { PRIMARY_CTA, REGISTER_URL } from '../../constants/marketing'
const adminOverview = '/screenshots/admin-overview.png'

const trustItems = [
  { icon: Star, text: '270+ zgrada u Srbiji' },
  { icon: Check, text: '30 dana besplatno' },
  { icon: Lock, text: 'Bez kreditne kartice' },
  { icon: Check, text: 'Podešavanje za 10 min' },
]

export default function ChatSection() {
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
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    })
  }, [])

  const resetMouse = useCallback(() => setMouse({ x: 0, y: 0 }), [])

  const mockupTransform = `perspective(1100px) rotateY(${mouse.x * -5}deg) rotateX(${mouse.y * 2.5}deg) translateZ(0)`

  const fade = (delay: string) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'none' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}`,
  })

  return (
    <section
      id="pocetna"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28"
      style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #f0fdfa 55%, #f8fafc 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        className="pointer-events-none absolute top-[8%] right-[6%] h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[4%] h-[360px] w-[360px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            {/* Live activity badge */}
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{
                background: 'rgba(13,148,136,0.08)',
                borderColor: 'rgba(13,148,136,0.2)',
                ...fade('0s'),
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600"
                style={{ animation: 'bsPulse 2s ease-in-out infinite' }}
              />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-primary-700">
                270+ zgrada koristi MojUlaz
              </span>
            </div>

            <h1
              className="mb-5 text-[clamp(36px,5.5vw,64px)] font-black leading-[1.05] tracking-[-2px] text-ink"
              style={fade('0.08s')}
            >
              Aplikacija za upravljanje{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                zgradom.
              </span>
            </h1>

            <p
              className="mx-auto mb-8 max-w-xl text-[clamp(15px,1.8vw,18px)] leading-relaxed text-slate-600 lg:mx-0"
              style={fade('0.16s')}
            >
              Stanari vas pozivaju manje. Kvarovi se rešavaju brže. Skupštine
              traju 40 minuta. Vi upravljate — aplikacija radi umesto vas.
            </p>

            <div className="mb-6 flex flex-wrap justify-center lg:justify-start" style={fade('0.24s')}>
              <a
                href={REGISTER_URL}
                className="group inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-extrabold text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #0891b2)',
                  boxShadow: '0 4px 20px rgba(13,148,136,0.35)',
                }}
              >
                {PRIMARY_CTA}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div
              className="flex flex-wrap justify-center gap-2 lg:justify-start"
              style={fade('0.38s')}
            >
              {trustItems.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 rounded-full border bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm"
                  style={{ borderColor: 'rgba(13,148,136,0.15)' }}
                >
                  <Icon className="h-3.5 w-3.5 text-primary-600" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative w-full max-w-xl flex-1"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? mockupTransform : 'perspective(1100px) translateY(32px) scale(0.96)',
              transition: loaded
                ? 'transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease 0.2s'
                : 'opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s',
            }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary-100/50 blur-3xl" />
            <div className="relative z-10">
              <BrowserMockup
                src={adminOverview}
                alt="MojUlaz admin panel — pregled zgrade"
                className="w-full"
              />
              <div className="absolute -bottom-4 right-0 z-20 w-[130px] sm:w-[148px] animate-float">
                <PhoneMockup>
                  <MobileAppPreview />
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes bsPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.5)} }`}</style>
    </section>
  )
}
