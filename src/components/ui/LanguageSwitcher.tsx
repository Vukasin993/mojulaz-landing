import { useLang } from '../../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()

  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-white p-0.5 text-[11px] font-bold">
      {(['sr', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === option ? 'bg-primary-600 text-white' : 'text-slate-500 hover:text-primary-600'
          }`}
          aria-pressed={lang === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
