import { openSignup } from '../ui/SignupModal'
import { useLang } from '../../i18n/LanguageContext'

export default function ComparisonSection() {
  const { t } = useLang()
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #0f172a 0%, #0d1f2d 60%, #0f172a 100%)',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
      {/* Teal glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(13,148,136,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 14px', borderRadius: 99, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: '#ef4444', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.comparison.badge}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, color: '#fff', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: 16 }}>
            {t.comparison.title}
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison table */}
        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.04)' }}>
            <div style={{ padding: '14px 20px', fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t.comparison.headers[0]}</div>
            <div style={{ padding: '14px 20px', fontSize: 11, fontWeight: 800, color: '#ef4444', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>{t.comparison.headers[1]}</span>
            </div>
            <div style={{ padding: '14px 20px', fontSize: 11, fontWeight: 800, color: '#14b8a6', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>{t.comparison.headers[2]}</span>
            </div>
          </div>

          {/* Rows */}
          {t.comparison.rows.map(([topic, before, after], i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(13,148,136,0.05)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}
            >
              {/* Topic */}
              <div style={{ padding: '16px 20px', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
                {topic}
              </div>

              {/* Before */}
              <div style={{ padding: '16px 20px', fontSize: 13, color: 'rgba(239,68,68,0.75)', lineHeight: 1.5, borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ flexShrink: 0, marginTop: 2, fontSize: 11, color: '#ef4444' }}>✕</span>
                {before}
              </div>

              {/* After */}
              <div style={{ padding: '16px 20px', fontSize: 13, color: 'rgba(20,184,166,0.9)', lineHeight: 1.5, borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ flexShrink: 0, marginTop: 2, fontSize: 11, color: '#14b8a6' }}>✓</span>
                {after}
              </div>
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button
            onClick={openSignup}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 32px', borderRadius: 99,
              background: 'linear-gradient(135deg, #0d9488, #0891b2)',
              color: '#fff', border: 'none', fontSize: 15, fontWeight: 800,
              cursor: 'pointer', letterSpacing: '-0.2px',
              boxShadow: '0 4px 24px rgba(13,148,136,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 10px 32px rgba(13,148,136,0.45)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 4px 24px rgba(13,148,136,0.35)' }}
          >
            {t.comparison.cta}
          </button>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 12 }}>
            {t.comparison.proof}
          </p>
        </div>
      </div>
    </section>
  )
}
