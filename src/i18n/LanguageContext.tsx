import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import type { Lang, Translations } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('sr')

  useEffect(() => {
    const stored = window.localStorage.getItem('mojulaz-lang')
    if (stored === 'en') setLang('en')
  }, [])

  useEffect(() => {
    window.localStorage.setItem('mojulaz-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLang must be used inside LanguageProvider')
  return context
}
