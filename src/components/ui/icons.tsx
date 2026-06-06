import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base: IconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ArrowRight(p: IconProps) {
  return <svg viewBox="0 0 16 16" {...base} {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>
}
export function Play(p: IconProps) {
  return <svg viewBox="0 0 16 16" fill="none" {...p}><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/></svg>
}
export function Check(p: IconProps) {
  return <svg viewBox="0 0 16 16" {...base} {...p}><path d="M3 8l3.5 3.5L13 4.5"/></svg>
}
export function Star(p: IconProps) {
  return <svg viewBox="0 0 16 16" fill="currentColor" {...p}><path d="M8 1l1.8 5H15l-4 3 1.5 5L8 11 3.5 14l1.5-5L1 6h5.2L8 1z"/></svg>
}
export function Lock(p: IconProps) {
  return <svg viewBox="0 0 16 16" {...base} {...p}><rect x="3" y="7" width="10" height="8" rx="1.5"/><path d="M5.5 7V5.5a2.5 2.5 0 015 0V7"/></svg>
}
export function Wrench(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><path d="M13.5 5.5a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.3-3.3a5 5 0 01-6.7 6.7L6.7 18.3a1.8 1.8 0 01-2.6-2.6L10.5 9.3a5 5 0 016.7-6.7L13.5 5.5z"/></svg>
}
export function Bell(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><path d="M17 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M12.73 20a2 2 0 01-3.46 0"/></svg>
}
export function BarChart(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><polyline points="21 11 17 11 14 20 8 2 5 11 1 11"/></svg>
}
export function FileText(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z"/><polyline points="13 2 13 7 18 7"/><line x1="15" y1="12" x2="7" y2="12"/><line x1="15" y1="16" x2="7" y2="16"/></svg>
}
export function MessageSquare(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><path d="M21 14a2 2 0 01-2 2H6l-4 4V4a2 2 0 012-2h15a2 2 0 012 2z"/></svg>
}
export function Smartphone(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><rect x="5" y="2" width="12" height="20" rx="2.5"/><circle cx="11" cy="17.5" r="1.1" fill="currentColor" stroke="none"/></svg>
}
export function Building(p: IconProps) {
  return <svg viewBox="0 0 34 34" fill="none" {...p}>
    <rect width="34" height="34" rx="9" fill="#f0fdfa"/>
    <rect x="13" y="5" width="9" height="23" rx="1.5" fill="#0d9488"/>
    <rect x="7" y="9" width="20" height="17" rx="1.5" fill="#0d9488" opacity="0.2"/>
    <rect x="15" y="18" width="5" height="10" rx="1" fill="white" opacity="0.95"/>
    <circle cx="19" cy="23" r="0.85" fill="#0d9488"/>
    <rect x="14" y="9" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.9"/>
    <rect x="18" y="9" width="2.5" height="2.5" rx="0.5" fill="white" opacity="0.9"/>
  </svg>
}
export function Users(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><path d="M17 20c0-3.3-2.7-6-6-6s-6 2.7-6 6"/><circle cx="11" cy="8" r="4"/><path d="M23 20c0-2.4-1.5-4.5-3.6-5.4"/><path d="M17 5.1A4 4 0 0120 9"/></svg>
}
export function LayoutDashboard(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="5" height="5" rx="1"/><rect x="14" y="12" width="5" height="7" rx="1"/><rect x="3" y="16" width="7" height="3" rx="1"/></svg>
}
export function Megaphone(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><path d="M3 11v1a4 4 0 004 4h.5L9 19M3 11V7m0 4h12m5 0a2 2 0 000-4V7a2 2 0 00-2-2H3"/></svg>
}
export function Wallet(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><rect x="1" y="5" width="20" height="14" rx="2"/><path d="M1 9h20"/><circle cx="16.5" cy="14" r="1" fill="currentColor" stroke="none"/></svg>
}
export function Home(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><path d="M3 9.5L11 3l8 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M8 21v-8h6v8"/></svg>
}
export function Ankete(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><rect x="3" y="3" width="16" height="16" rx="2"/><path d="M8 7h6M8 11h6M8 15h4"/></svg>
}
export function Menu(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/></svg>
}
export function X(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></svg>
}
export function User(p: IconProps) {
  return <svg viewBox="0 0 22 22" {...base} {...p}><circle cx="11" cy="8" r="4"/><path d="M3 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
}
