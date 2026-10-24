export default function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-overlay">
      <svg className="h-full w-full animate-grain" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  )
}
