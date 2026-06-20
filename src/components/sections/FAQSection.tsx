import { useState } from 'react'
import { openSignup } from '../ui/SignupModal'
import { useLang } from '../../i18n/LanguageContext'

export default function FAQSection() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
      style={{
        background: '#fff',
        paddingTop: 96, paddingBottom: 96,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 14px', borderRadius: 99, background: 'rgba(13,148,136,0.07)', border: '1px solid rgba(13,148,136,0.18)', marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: '#0d9488', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.faq.badge}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 12 }}>
            {t.faq.title}
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7 }}>
            {t.faq.subtitle}{' '}
            <a href="mailto:info&#64;moj-ulaz.com" style={{ color: '#0d9488', textDecoration: 'none', fontWeight: 600 }}>info&#64;moj-ulaz.com</a>
          </p>
        </div>

        {/* FAQ list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {t.faq.items.map(([question, answer], i) => (
            <div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              style={{
                borderRadius: 14,
                border: `1px solid ${open === i ? 'rgba(13,148,136,0.2)' : '#f1f5f9'}`,
                background: open === i ? '#f8fffe' : '#fff',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '18px 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  background: 'none', border: 'none', cursor: 'pointer',
                }}
              >
                <span
                  itemProp="name"
                  style={{ fontSize: 15, fontWeight: 700, color: open === i ? '#0d9488' : '#0f172a', lineHeight: 1.4, transition: 'color 0.2s' }}
                >
                  {question}
                </span>
                <span style={{
                  flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                  background: open === i ? '#0d9488' : '#f1f5f9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                    <path d="M5 2v6M2 5h6" stroke={open === i ? '#fff' : '#64748b'} strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <p
                  itemProp="text"
                  style={{ padding: '0 20px 18px', fontSize: 14.5, color: '#475569', lineHeight: 1.75, margin: 0 }}
                >
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontSize: 15, color: '#64748b', marginBottom: 20 }}>
            {t.faq.ready}
          </p>
          <button
            onClick={openSignup}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 99,
              background: 'linear-gradient(135deg, #0d9488, #0891b2)',
              color: '#fff', border: 'none', fontSize: 15, fontWeight: 800,
              cursor: 'pointer', letterSpacing: '-0.2px',
              boxShadow: '0 4px 20px rgba(13,148,136,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 28px rgba(13,148,136,0.4)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 4px 20px rgba(13,148,136,0.3)' }}
          >
            {t.common.startArrow}
          </button>
        </div>
      </div>
    </section>
  )
}
