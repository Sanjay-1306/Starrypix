import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import TiltCard from '../ui/TiltCard'
import MagneticButton from '../ui/MagneticButton'
import { customPlan, plans } from '../../data/content'
import { GlowOrbs } from '../ui/GlowBackground'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <GlowOrbs />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
              Pricing
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
              Our <span className="gradient-text">Subscription</span>
            </h2>
          </div>
          <p className="max-w-xs text-white/60 sm:text-right">Choose the best package for your growth.</p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {plans.map((plan) => (
            <RevealItem key={plan.name} className={plan.popular ? 'md:-translate-y-6' : ''}>
              <TiltCard className="h-full rounded-[2rem]" strength={plan.popular ? 8 : 5}>
                <div
                  className={`relative flex h-full flex-col rounded-[2rem] p-8 ${
                    plan.popular
                      ? 'glass border-violet-light/30 shadow-[0_25px_90px_-20px_rgba(139,92,246,0.7)]'
                      : 'glass'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet to-fuchsia px-4 py-1 text-xs font-semibold text-white shadow-[0_0_20px_-2px_rgba(139,92,246,0.9)]">
                      Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-sm text-white/35 line-through">{plan.oldPrice}</span>
                    <span className="font-display text-3xl font-semibold text-white">{plan.newPrice}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
                        <span className="mt-0.5 text-violet-light">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <MagneticButton
                    href="#contact"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="mt-8 w-full"
                  >
                    Choose Plan
                  </MagneticButton>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-8">
          <div className="glass flex flex-col gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">
                {customPlan.name}
              </h3>
              <p className="mt-2 font-medium text-violet-light">
                {customPlan.price}
              </p>
              <p className="mt-3 max-w-2xl text-sm text-white/60">
                {customPlan.description}
              </p>
            </div>
            <MagneticButton href="#contact" className="shrink-0">
              {customPlan.buttonLabel}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
