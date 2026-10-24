import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Reveal from '../ui/Reveal'
import { process } from '../../data/content'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="works" className="relative py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
            How we work
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Our <span className="gradient-text">Work</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-6 right-[calc(20%_-_56px)] top-6 hidden h-px bg-white/10 md:block" />
          <motion.div
            style={{ scaleX }}
            className="absolute left-6 right-[calc(20%_-_56px)] top-6 hidden h-px origin-left bg-gradient-to-r from-violet via-fuchsia to-indigo shadow-[0_0_12px_1px_rgba(139,92,246,0.8)] md:block"
          />

          <div className="grid gap-10 md:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="glass relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/55">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[1.75rem] bg-violet-500/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-violet-300/40 bg-violet-400/10 p-1.5 shadow-[0_0_45px_rgba(139,92,246,0.28)]">
              <video
                className="h-auto w-full rounded-[1.25rem] bg-black/40"
                src="/final-video-03.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Featured StarryPix work video"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[1.75rem] bg-violet-500/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-violet-300/40 bg-violet-400/10 p-1.5 shadow-[0_0_45px_rgba(139,92,246,0.28)]">
              <video
                className="h-auto w-full rounded-[1.25rem] bg-black/40"
                src="/final-reel-04-og-gainz.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Featured StarryPix work reel"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
