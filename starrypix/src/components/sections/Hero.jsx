import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { heroFloaters } from '../../data/content'
import MagneticButton from '../ui/MagneticButton'
import { GlowOrbs, GridOverlay } from '../ui/GlowBackground'

const HeroScene = lazy(() => import('../3d/HeroScene'))

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-32 pb-20">
      <GridOverlay />
      <GlowOrbs variant="hero" className="opacity-70" />

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-4">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/75"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-light shadow-[0_0_8px_2px_rgba(167,139,250,0.9)]" />
            Creative Agency · Chennai
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-display text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-tight text-white"
          >
            We build
            <br />
            <span className="font-accent italic font-normal gradient-text">digital</span> things
            <br />
            worth noticing.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-md text-base text-white/55 sm:text-lg"
          >
            Transforming your ideas into stunning visuals, brands, and digital solutions that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#services">Our Services</MagneticButton>
            <MagneticButton href="#pricing" variant="secondary">
              Start a Project
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center gap-6 border-t border-line/60 pt-6"
          >
            {heroFloaters.map((f) => (
              <span key={f.label} className="flex items-center gap-2 text-xs text-white/45">
                <span className="text-base">{f.icon}</span>
                {f.label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Suspense fallback={null}>
              <HeroScene className="h-full w-full" />
            </Suspense>
          </motion.div>

          <div className="absolute inset-0 -z-10 flex items-center justify-center sm:hidden">
            <div className="h-64 w-64 rounded-full bg-violet/30 blur-[90px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
