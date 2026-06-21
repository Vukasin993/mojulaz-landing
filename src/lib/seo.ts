export const SITE_URL = 'https://www.moj-ulaz.com'
export const SITE_NAME = 'MojUlaz'
export const SITE_LOGO = `${SITE_URL}/logo-icon.png`
export const OG_IMAGE = `${SITE_URL}/og-image.png`
export const CONTACT_EMAIL = 'info@moj-ulaz.com'

export const SEO_DEFAULTS = {
  title: 'MojUlaz — Softver za upravljanje stambenim zajednicama',
  titleTemplate: '%s | MojUlaz',
  description:
    'Softver za upravnike zgrada i stambene zajednice. Prijava kvarova, finansije, dokumentacija i komunikacija stanara — sve na jednom mestu. Besplatno 30 dana.',
  keywords: [
    'upravljanje stambenim zajednicama',
    'upravljanje zgradama',
    'aplikacija za upravnike',
    'softver za upravnike',
    'stambena zajednica aplikacija',
    'prijava kvarova',
    'finansije zgrade',
    'glasanje stanara',
    'dokumentacija zgrade',
    'komunikacija stanara',
    'MojUlaz',
  ],
  locale: 'sr_RS',
  language: 'sr',
} as const

export function canonicalUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`
  return `${SITE_URL}${withSlash === '/' ? '' : withSlash}`
}

export function pageUrl(path: string): string {
  return canonicalUrl(path)
}

export const ALL_PAGES = {
  home: '/',
  upravniciZgrada: '/upravnici-zgrada/',
  stambeneZajednice: '/stambene-zajednice/',
  prijavaKvarova: '/prijava-kvarova/',
  glasanjeStanara: '/glasanje-stanara/',
  finansijeZgrade: '/finansije-zgrade/',
  upravljanjeZgradamaBeograd: '/upravljanje-zgradama-beograd/',
  upravljanjeZgradamaNoviSad: '/upravljanje-zgradama-novi-sad/',
  upravljanjeZgradamaNis: '/upravljanje-zgradama-nis/',
  upravljanjeZgradamaKragujevac: '/upravljanje-zgradama-kragujevac/',
  politikaPrivatnosti: '/politika-privatnosti/',
  usloviKoriscenja: '/uslovi-koriscenja/',
} as const
