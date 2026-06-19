import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 140,  suffix: '+',     label: 'zgrada u Srbiji'           },
  { value: 2500, suffix: '+',     label: 'aktivnih stanara'           },
  { value: 98,   suffix: '%',     label: 'zadovoljnih korisnika'      },
  { value: 10,   prefix: '< ',   suffix: ' min', label: 'podešavanje zgrade' },
]

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const pct = Math.min((ts - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - pct, 3)
      setCount(Math.round(eased * target))
      if (pct < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ value, suffix, prefix, label, active, index }: {
  value: number; suffix?: string; prefix?: string; label: string; active: boolean; index: number
}) {
  const count = useCountUp(value, active)
  const display = value >= 1000 ? (count / 1000).toFixed(count / 1000 >= 10 ? 0 : 1) + 'k' : count

  return (
    <div
      className="reveal text-center"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="text-3xl sm:text-4xl font-extrabold text-primary-600 tracking-tight mb-1">
        {prefix}{display}{suffix}
      </div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-10 border-y border-slate-100"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100">
          {stats.map(({ value, suffix, prefix, label }, i) => (
            <StatItem
              key={label}
              value={value}
              suffix={suffix}
              prefix={prefix}
              label={label}
              active={active}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
