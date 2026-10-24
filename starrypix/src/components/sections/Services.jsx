import { motion, useTransform } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import TiltCard from '../ui/TiltCard'
import { services } from '../../data/content'
import { GlowOrbs } from '../ui/GlowBackground'
import { WebIcon, BrandIcon, DeviceIcon, MegaphoneIcon, FrameIcon, ClapperIcon } from '../ui/icons'

const ICONS = {
  web: WebIcon,
  brand: BrandIcon,
  device: DeviceIcon,
  megaphone: MegaphoneIcon,
  frame: FrameIcon,
  clapper: ClapperIcon,
}

const PARTICLES = [
  { left: '20%', delay: 0, duration: 4.5 },
  { left: '45%', delay: 1.1, duration: 3.8 },
  { left: '68%', delay: 0.5, duration: 5 },
  { left: '82%', delay: 2, duration: 4.2 },
]

function ServiceCard({ service, featured = false }) {
  const Icon = ICONS[service.icon]

  return (
    <TiltCard className="h-full rounded-[2rem]" strength={featured ? 9 : 6}>
      {({ mx, my }) => {
        const iconX = useTransform(mx, [0, 1], [10, -10])
        const iconY = useTransform(my, [0, 1], [10, -10])

        return (
          <div
            className={`glass flex h-full flex-col overflow-hidden rounded-[2rem] ${
              featured ? 'border-white/20 shadow-[0_30px_100px_-25px_var(--card-glow)]' : ''
            }`}
            style={{ '--card-glow': service.glow, transformStyle: 'preserve-3d' }}
          >
            <div
              className={`relative flex items-center justify-center overflow-hidden ${
                featured ? 'h-64' : 'h-48'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} ${featured ? 'opacity-90' : 'opacity-25'}`}
                style={{ transform: 'translateZ(0px)' }}
              />
              <div
                className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_75%)]"
                style={{ transform: 'translateZ(6px)' }}
              />

              {PARTICLES.map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-white/70"
                  style={{ left: p.left, transform: 'translateZ(35px)' }}
                  animate={{ y: [0, featured ? -220 : -170], opacity: [0, 1, 0] }}
                  transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ x: iconX, y: iconY, z: featured ? 70 : 50 }}
                className="relative flex items-center justify-center"
              >
                <span className="absolute h-24 w-24 rounded-full blur-2xl" style={{ background: service.glow }} />
                <span className="glass relative flex h-20 w-20 items-center justify-center rounded-2xl border-white/25">
                  <Icon className="h-9 w-9 text-white" />
                </span>
              </motion.div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-7" style={{ transform: 'translateZ(20px)' }}>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2.5 text-sm text-white/55">{service.desc}</p>
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-light hover:text-white">
                Get started <span>→</span>
              </a>
            </div>
          </div>
        )
      }}
    </TiltCard>
  )
}

export default function Services() {
  const [webdev, branding, uiux, social, poster, video] = services
  const rest = [branding, uiux, social, poster, video]

  return (
    <section id="services" className="relative py-28">
      <GlowOrbs />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="max-w-lg">
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
            What We Do
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-white/60">Everything you need to elevate your brand and digital presence — starting with the site itself.</p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          <RevealItem className="sm:col-span-2 lg:col-span-1 lg:-translate-y-6">
            <ServiceCard service={webdev} featured />
          </RevealItem>
          {rest.map((s) => (
            <RevealItem key={s.key}>
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
