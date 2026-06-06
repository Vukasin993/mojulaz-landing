import { Bell, Wrench, BarChart, Wallet, Megaphone, FileText, Home, Ankete, User } from './icons'

const stats = [
  { Icon: Bell,     value: '5',           label: 'Nova obaveštenja' },
  { Icon: Wrench,   value: '4',           label: 'Aktivnih zahteva' },
  { Icon: BarChart, value: '1',           label: 'Aktivna anketa'   },
  { Icon: Wallet,   value: '210.529 RSD', label: 'Stanje fonda'     },
]

const quickAccess = [
  { Icon: Megaphone, label: 'Obaveštenja' },
  { Icon: Wrench,    label: 'Održavanje'  },
  { Icon: FileText,  label: 'Dokumenta'   },
]

const bottomNav = [
  { Icon: Home,     label: 'Home',        active: true  },
  { Icon: Bell,     label: 'Obaveštenja', active: false },
  { Icon: Wrench,   label: 'Zahtevi',     active: false },
  { Icon: Ankete,   label: 'Ankete',      active: false },
  { Icon: Wallet,   label: 'Finansije',   active: false },
]

export default function MobileAppPreview() {
  return (
    <div className="bg-white font-sans overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Status bar spacer (dynamic island occupies this) */}
      <div className="h-7" />

      {/* Top action row */}
      <div className="flex items-center justify-end gap-2 px-4 pt-1 pb-2">
        <button className="relative w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
          <Bell className="w-4 h-4 text-primary-600" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
        </button>
        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
          <User className="w-4 h-4 text-slate-500" />
        </button>
      </div>

      {/* Greeting + building */}
      <div className="px-4 pb-3">
        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-0.5">Dobrodošli nazad 👋</p>
        <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight mb-0.5">MojUlaz Demo</h2>
        <p className="text-[10px] text-slate-500">Bulevar Kralja Aleksandra 100, Beograd</p>
      </div>

      {/* Section label + headline */}
      <div className="px-4 pb-3">
        <p className="text-[9px] font-bold text-primary-600 uppercase tracking-widest mb-1">Vaša zgrada</p>
        <p className="text-[13px] font-bold text-slate-900 leading-snug">Sve važno za ulaz na jednom mestu</p>
      </div>

      {/* Stats 2×2 grid */}
      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
        {stats.map(({ Icon, value, label }) => (
          <div key={label} className="bg-white border border-slate-100 rounded-2xl p-3 shadow-sm">
            <div className="w-7 h-7 bg-primary-50 rounded-xl flex items-center justify-center mb-2">
              <Icon className="w-3.5 h-3.5 text-primary-600" />
            </div>
            <div className="text-[13px] font-extrabold text-slate-900 leading-none mb-0.5">{value}</div>
            <div className="text-[9px] text-slate-500 leading-tight">{label}</div>
          </div>
        ))}
      </div>

      {/* Quick access */}
      <div className="px-4 pb-4">
        <p className="text-[12px] font-bold text-slate-900 mb-2">Brzi pristup</p>
        <div className="grid grid-cols-3 gap-2">
          {quickAccess.map(({ Icon, label }) => (
            <button key={label} className="flex flex-col items-center gap-1.5 p-2 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-[9px] font-medium text-slate-700 text-center leading-tight">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="border-t border-slate-100 bg-white">
        <div className="flex justify-around items-center py-2 px-1">
          {bottomNav.map(({ Icon, label, active }) => (
            <button key={label} className="flex flex-col items-center gap-0.5 px-1">
              <Icon
                className={`w-4 h-4 ${active ? 'text-primary-600' : 'text-slate-400'}`}
                strokeWidth={active ? 2.2 : 1.75}
              />
              <span className={`text-[8px] font-medium ${active ? 'text-primary-600' : 'text-slate-400'}`}>
                {label}
              </span>
            </button>
          ))}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-1">
          <div className="w-20 h-1 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}
