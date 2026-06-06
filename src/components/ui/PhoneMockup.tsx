import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function PhoneMockup({ children, className = '' }: Props) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Phone shell */}
      <div className="relative bg-slate-900 rounded-[42px] p-[10px] shadow-[0_32px_64px_rgba(0,0,0,0.35)]">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-8 rounded-l-sm bg-slate-700" />
        <div className="absolute -left-[3px] top-32 w-[3px] h-12 rounded-l-sm bg-slate-700" />
        <div className="absolute -left-[3px] top-48 w-[3px] h-12 rounded-l-sm bg-slate-700" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-16 rounded-r-sm bg-slate-700" />

        {/* Screen — aspect ratio clamps height to a realistic portrait phone */}
        <div
          className="relative bg-white rounded-[34px] overflow-hidden"
          style={{ aspectRatio: '9 / 19.5' }}
        >
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-16 h-4 rounded-full bg-slate-900" />
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
