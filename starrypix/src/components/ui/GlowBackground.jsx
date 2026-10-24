export function GlowOrbs({ variant = 'default', className = '' }) {
  if (variant === 'hero') {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute left-1/2 top-[55%] h-[70vw] w-[70vw] max-w-[900px] max-h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/30 blur-[120px] animate-pulse-glow" />
        <div className="absolute left-[20%] top-[30%] h-72 w-72 rounded-full bg-fuchsia/20 blur-[100px]" />
        <div className="absolute right-[15%] top-[20%] h-64 w-64 rounded-full bg-indigo/25 blur-[100px]" />
      </div>
    )
  }
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute left-1/2 top-1/2 h-[50vw] w-[50vw] max-w-[600px] max-h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[110px]" />
    </div>
  )
}

export function OrbitRings({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 400"
        className="absolute bottom-[-120px] w-[140%] max-w-none opacity-40"
        fill="none"
      >
        <ellipse cx="600" cy="400" rx="560" ry="180" stroke="url(#ring1)" strokeWidth="1" className="animate-spin-slower" style={{ transformOrigin: '600px 400px' }} />
        <ellipse cx="600" cy="400" rx="460" ry="140" stroke="url(#ring2)" strokeWidth="1" className="animate-spin-slow" style={{ transformOrigin: '600px 400px', animationDirection: 'reverse' }} />
        <ellipse cx="600" cy="400" rx="340" ry="100" stroke="url(#ring1)" strokeWidth="1" />
        <defs>
          <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ring2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function GridOverlay({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.07] ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)',
      }}
    />
  )
}
