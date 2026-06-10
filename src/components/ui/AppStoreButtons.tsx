import type { CSSProperties } from 'react'
import { APP_STORE_URL, GOOGLE_PLAY_URL, REGISTER_URL } from '../../constants/marketing'

type Size = 'md' | 'sm'
type Variant = 'full' | 'icon'

const sizes: Record<Size, { pad: string; icon: number; label: number; title: number }> = {
  md: { pad: '10px 18px', icon: 22, label: 9, title: 14 },
  sm: { pad: '8px 12px', icon: 18, label: 8, title: 12 },
}

const iconSizes: Record<Size, number> = { md: 44, sm: 40 }

function storeHref(url: string) {
  return url || REGISTER_URL
}

function onStoreClick(_e: React.MouseEvent, _url: string) {
  // no-op: href handles navigation
}

interface Props {
  size?: Size
  variant?: Variant
  className?: string
  light?: boolean
}

export default function AppStoreButtons({ size = 'md', variant = 'full', className = '', light = false }: Props) {
  const s = sizes[size]
  const bg = light ? 'rgba(255,255,255,0.14)' : '#0f172a'
  const border = light ? '1px solid rgba(255,255,255,0.28)' : '1px solid rgba(15,23,42,0.06)'
  const shadow = light ? 'none' : '0 1px 2px rgba(0,0,0,0.06)'

  const iconOnly = variant === 'icon'
  const dim = iconSizes[size]

  const baseStyle: CSSProperties = iconOnly
    ? {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dim,
        height: dim,
        borderRadius: 12,
        background: bg,
        color: '#fff',
        textDecoration: 'none',
        border,
        boxShadow: shadow,
        flexShrink: 0,
        transition: 'transform 0.2s, background 0.2s',
      }
    : {
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? 8 : 10,
        padding: s.pad,
        borderRadius: 12,
        background: bg,
        color: '#fff',
        textDecoration: 'none',
        border,
        boxShadow: shadow,
        transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
        flex: size === 'sm' ? 1 : undefined,
        justifyContent: size === 'sm' ? 'center' : undefined,
        minWidth: 0,
      }

  const hoverIn = (el: HTMLElement) => {
    if (iconOnly) {
      el.style.background = light ? 'rgba(255,255,255,0.22)' : '#1e293b'
      return
    }
    el.style.transform = 'translateY(-2px)'
    if (!light) el.style.boxShadow = '0 4px 14px rgba(0,0,0,0.12)'
    else el.style.background = 'rgba(255,255,255,0.22)'
  }
  const hoverOut = (el: HTMLElement) => {
    el.style.transform = ''
    el.style.boxShadow = shadow
    el.style.background = bg
  }

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      <a
        href={storeHref(APP_STORE_URL) ?? '#'}
        onClick={(e) => onStoreClick(e, APP_STORE_URL)}
        aria-label="Preuzmite MojUlaz na App Store"
        style={baseStyle}
        onMouseEnter={(e) => hoverIn(e.currentTarget)}
        onMouseLeave={(e) => hoverOut(e.currentTarget)}
      >
        <svg width={iconOnly ? 20 : s.icon} height={iconOnly ? 20 : s.icon} viewBox="0 0 24 24" fill="white" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        {!iconOnly && (
          <div style={{ lineHeight: 1.2, textAlign: 'left' }}>
            <div style={{ fontSize: s.label, opacity: 0.75, fontWeight: 500 }}>Preuzmite na</div>
            <div style={{ fontSize: s.title, fontWeight: 700 }}>App Store</div>
          </div>
        )}
      </a>
      <a
        href={storeHref(GOOGLE_PLAY_URL) ?? '#'}
        onClick={(e) => onStoreClick(e, GOOGLE_PLAY_URL)}
        aria-label="Preuzmite MojUlaz na Google Play"
        style={baseStyle}
        onMouseEnter={(e) => hoverIn(e.currentTarget)}
        onMouseLeave={(e) => hoverOut(e.currentTarget)}
      >
        <svg width={iconOnly ? 20 : s.icon} height={iconOnly ? 20 : s.icon} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3.18 23.76c.3.17.65.18.97.05l12.44-7.18-2.63-2.63-10.78 9.76z" fill="#EA4335" />
          <path d="M20.82 9.73c-.42-.57-1.02-.96-1.73-1.08L4.15.28C3.83.1 3.48.1 3.18.27L13.96 11.05l6.86-1.32z" fill="#FBBC04" />
          <path d="M2.01 1.14c-.13.24-.2.52-.2.82v19.08c0 .3.07.58.2.82l.14.13L13.1 11.05v-.1L2.15 1z" fill="#4285F4" />
          <path d="M20.82 14.27l-3.23 1.87-2.63-2.63 2.63-2.63 3.23 1.87c.92.53.92 1.99 0 2.52z" fill="#34A853" />
        </svg>
        {!iconOnly && (
          <div style={{ lineHeight: 1.2, textAlign: 'left' }}>
            <div style={{ fontSize: s.label, opacity: 0.75, fontWeight: 500 }}>Dostupno na</div>
            <div style={{ fontSize: s.title, fontWeight: 700 }}>Google Play</div>
          </div>
        )}
      </a>
    </div>
  )
}
