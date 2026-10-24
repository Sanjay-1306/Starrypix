import Reveal from '../ui/Reveal'
import MagneticButton from '../ui/MagneticButton'
import { GlowOrbs, OrbitRings } from '../ui/GlowBackground'

export default function CTA() {
  return (
    <section className="relative px-6 py-16">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem]">
        <div className="glass relative flex flex-col items-center overflow-hidden rounded-[2.5rem] px-8 py-20 text-center">
          <GlowOrbs />
          <OrbitRings />
          <div className="relative z-10">
            <h2 className="text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
              Ready to grow your <span className="gradient-text">brand</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              Let's collaborate and create something extraordinary together.
            </p>
            <div className="mt-10">
              <MagneticButton href="#contact">Start Now</MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
