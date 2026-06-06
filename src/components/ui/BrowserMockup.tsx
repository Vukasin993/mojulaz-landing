interface Props {
  src: string
  alt: string
  url?: string
  className?: string
}

export default function BrowserMockup({ src, alt, url = 'app.mojulaz.rs', className = '' }: Props) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-2xl ${className}`}>
      {/* Chrome bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 max-w-xs mx-auto">
          <div className="bg-white border border-slate-200 rounded-md px-3 py-0.5 text-[11px] text-slate-400 text-center truncate">
            {url}
          </div>
        </div>
        <div className="flex-shrink-0 w-16" />
      </div>
      {/* Screenshot */}
      <img
        src={src}
        alt={alt}
        className="w-full block"
        draggable={false}
      />
    </div>
  )
}
