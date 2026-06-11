import { useLang } from '../../i18n/LanguageContext'
import type { Lang } from '../../i18n/translations'

export default function LangSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`flex items-center rounded-full border border-slate-200 bg-slate-50 p-0.5 ${className}`}>
      {(['sr', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase transition-colors ${
            lang === l ? 'bg-primary-600 text-white' : 'text-slate-500 hover:text-primary-600'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
