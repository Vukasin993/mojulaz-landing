const stats = [
  { value: '500+',   label: 'zgrada pod upravljanjem'   },
  { value: '12 000+', label: 'aktivnih stanara'          },
  { value: '98%',    label: 'zadovoljnih korisnika'      },
  { value: '< 2 min', label: 'prosečno vreme odgovora'  },
]

export default function Stats() {
  return (
    <section
      className="py-12 border-y border-slate-200"
      style={{ background: 'linear-gradient(90deg, #f0fdfa 0%, #ffffff 50%, #f0fdfa 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map(({ value, label }, i) => (
            <div key={label} className={`reveal ${i > 0 ? `reveal-d${i}` : ''} text-center`}>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 tracking-tight mb-1">
                {value}
              </div>
              <div className="text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
