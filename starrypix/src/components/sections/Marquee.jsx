import { tickerItems } from '../../data/content'

export default function Marquee() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="relative z-10 overflow-hidden border-y border-line/60 bg-bg-soft/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-medium text-white/30">
            {item}
            <span className="text-violet-light/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
