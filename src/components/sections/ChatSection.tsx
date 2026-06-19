import { useState, useEffect, useRef, useCallback } from 'react'
import BrowserMockup from '../ui/BrowserMockup'
import PhoneMockup from '../ui/PhoneMockup'
import AppStoreButtons from '../ui/AppStoreButtons'
import { Check } from '../ui/icons'
import { REGISTER_URL } from '../../constants/marketing'
import homeDashboardImg from '../../assets/section/home-dashbaord.png'
const adminOverview = '/screenshots/admin-overview.png'

const trustItems = [
  '500+ zgrada',
  '30 dana besplatno',
  'Počnite za 5 minuta',
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
                Problem koji dobro poznajete
              </span>
            </div>

            <h1
              className="mb-5 text-[clamp(36px,5.5vw,64px)] font-black leading-[1.05] tracking-[-2px] text-ink"
              style={fade('0.08s')}
            >
              Prestanite da vodite zgradu{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                kroz Viber grupe.
              </span>
            </h1>

            <p
              className="mx-auto mb-8 max-w-xl text-[clamp(15px,1.8vw,18px)] leading-relaxed text-slate-600 lg:mx-0"
              style={fade('0.16s')}
            >
              Obaveštenja, dokumenta, finansije, prijava kvarova i glasanja na jednom mestu.
              Sve što stanarima i upravnicima treba za modernu stambenu zajednicu.
            </p>

            <div className="mb-4 flex flex-wrap justify-center lg:justify-start" style={fade('0.24s')}>
              <AppStoreButtons />
            </div>

            <a
              href={REGISTER_URL}
              className="mx-auto mb-4 flex max-w-[520px] items-center gap-3 rounded-2xl border p-3.5 text-left no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg lg:mx-0"
              style={{
                ...fade('0.3s'),
                background: 'rgba(13,148,136,0.06)',
                borderColor: 'rgba(13,148,136,0.25)',
              }}
            >
              <span className="flex-shrink-0 text-xl">🧑‍💼</span>
              <span className="flex-1 text-[13px] leading-relaxed text-slate-600">
                <strong className="text-ink">Vi ste upravnik?</strong>{' '}
                Registrujte zgradu u admin panelu — besplatno 30 dana.
              </span>
              <span className="flex-shrink-0 whitespace-nowrap rounded-full bg-primary-600 px-3.5 py-2 text-xs font-extrabold text-white">
                Admin panel →
              </span>
            </a>

            <div
              className="flex flex-wrap justify-center gap-2 lg:justify-start"
              style={fade('0.38s')}
            >
              {trustItems.map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 rounded-full border bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm"
                  style={{ borderColor: 'rgba(13,148,136,0.15)' }}
                >
                  <Check className="h-3.5 w-3.5 text-primary-600" />
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
                  <img
                    src={homeDashboardImg.src}
                    alt="MojUlaz mobilna aplikacija — početni ekran"
                    draggable={false}
                    className="block h-full w-full object-cover"
                  />
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
