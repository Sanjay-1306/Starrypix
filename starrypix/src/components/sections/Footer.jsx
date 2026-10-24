import { nav, socials } from '../../data/content'

export default function Footer() {
  return (
    <footer className="relative border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-light to-fuchsia shadow-[0_0_12px_2px_rgba(139,92,246,0.8)]" />
          Starrypix
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/50 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-white/60 transition-all hover:border-violet-light/50 hover:text-white hover:shadow-[0_0_16px_-2px_rgba(139,92,246,0.8)]"
              aria-label={s.label}
            >
              {s.label[0]}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} <strong className="font-medium text-white/50">Starrypix</strong>. All Rights Reserved.
      </p>
    </footer>
  )
}
