/* ── BuildingSection — product features ───────────────────────── */
import { REGISTER_URL } from '../../constants/marketing'

/* ── Feature data ─────────────────────────────────────────────── */
const features = [
  {
    emoji: '🔧',
    color: '#f59e0b',
    bg: '#fffbeb',
    border: 'rgba(245,158,11,0.18)',
    title: 'Prijava kvarova',
    desc: 'Stanari prijavljuju kvar za 10 sekundi — foto, opis, kategorija. Tehničar odmah vidi prioritete i status je vidljiv svima.',
    chips: ['Foto dokumentacija', 'Auto notifikacije', 'Rok i status'],
  },
  {
    emoji: '📢',
    color: '#6366f1',
    bg: '#f5f3ff',
    border: 'rgba(99,102,241,0.18)',
    title: 'Chat i oglasna tabla',
    desc: 'Jedno obaveštenje stiže svim stanarima za sekunde. Vidite ko je pročitao, ko nije. Zauvek zbogom WhatsApp haosu.',
    chips: ['Push notifikacije', 'Potvrda čitanja', 'Hitne poruke'],
  },
  {
    emoji: '💰',
    color: '#10b981',
    bg: '#f0fdf4',
    border: 'rgba(16,185,129,0.18)',
    title: 'Finansije i uplate',
    desc: 'Fond, uplate i rashodi u realnom vremenu — vidljivi svim stanarima. Transparentnost koja gradi poverenje. Bez nagađanja.',
    chips: ['Fond vidljiv svima', 'Dugovanja po stanu', 'PDF izveštaji'],
  },
  {
    emoji: '📁',
    color: '#0d9488',
    bg: '#f0fdfa',
    border: 'rgba(13,148,136,0.18)',
    title: 'Dokumenta zgrade',
    desc: 'Ugovori, tehnička dokumentacija, zapisnici skupština — centralno čuvanje sa brzim pretraživanjem. Uvek dostupno, svima.',
    chips: ['Centralno čuvanje', 'Brza pretraga', 'Bezbedan pristup'],
  },
]

/* ── CTA buttons ───────────────────────────────────────────────── */
function StoreButtons() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      <a
        href={REGISTER_URL}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 22px', borderRadius: 12, background: 'linear-gradient(135deg, #0d9488, #0891b2)', color: '#fff', border: 'none', fontSize: 14, fontWeight: 800, textDecoration: 'none', boxShadow: '0 4px 16px rgba(13,148,136,0.3)', transition: 'transform 0.2s, box-shadow 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(13,148,136,0.4)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(13,148,136,0.3)' }}
      >
        Počnite besplatno →
      </a>
      <a
        href="mailto:zdravo@mojulaz.rs"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 22px', borderRadius: 12, background: '#fff', color: '#0f172a', border: '1.5px solid #e2e8f0', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#0d9488'; (e.currentTarget as HTMLElement).style.color = '#0d9488' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.color = '#0f172a' }}
      >
        Kontaktirajte nas
      </a>
    </div>
  )
}

/* ── Main ─────────────────────────────────────────────────────── */
export default function BuildingSection() {
  return (
    <section
      id="how"
      style={{
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      {/* Grid overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      <div style={{ position: 'absolute', top: '5%', right: '5%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 99, background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0d9488', display: 'inline-block', animation: 'bsPulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: '#0d9488', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Šta dobijate</span>
          </div>

          <h2 style={{ fontSize: 'clamp(34px, 5.5vw, 68px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.05, letterSpacing: '-2.5px', marginBottom: 16 }}>
            Alati koji rade{' '}
            <span style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              umesto vas.
            </span>
          </h2>

          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#64748b', lineHeight: 1.8, maxWidth: 520, margin: '0 auto' }}>
            Kao upravnik, vaše vreme je najvrednije. MojUlaz automatizuje sve što vas vezuje — kvarove, uplate, skupštine i obaveštenja.
          </p>
        </div>

        {/* Feature cards — 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 20, marginBottom: 64 }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{ background: '#fff', borderRadius: 20, padding: '28px 28px 24px', border: `1px solid ${f.border}`, boxShadow: '0 2px 16px rgba(0,0,0,0.04)', transition: 'transform 0.25s ease, box-shadow 0.25s ease', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = `0 16px 48px rgba(0,0,0,0.08), 0 0 0 1px ${f.border}` }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              {/* Subtle bg splash */}
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: f.bg, opacity: 0.7, pointerEvents: 'none' }} />

              {/* Icon */}
              <div style={{ width: 48, height: 48, borderRadius: 14, background: f.bg, border: `1px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 16, position: 'relative' }}>
                {f.emoji}
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px', marginBottom: 10 }}>
                {f.title}
              </h3>

              <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.7, marginBottom: 18 }}>
                {f.desc}
              </p>

              {/* Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {f.chips.map(chip => (
                  <span key={chip} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 10px', borderRadius: 99, background: f.bg, border: `1px solid ${f.border}`, fontSize: 11.5, fontWeight: 600, color: f.color }}>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                      <path d="M1 3.5L3 5.5L6 1.5" stroke={f.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
          <StoreButtons />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {['270+ zgrada', 'Besplatno 30 dana', 'Počnite za 5 min'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 14px', borderRadius: 99, background: '#fff', border: '1px solid rgba(13,148,136,0.15)', fontSize: 12, fontWeight: 600, color: '#0f172a', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes bsPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.5)} }`}</style>
    </section>
  )
}
