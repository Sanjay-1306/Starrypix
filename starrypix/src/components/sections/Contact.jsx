import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import MagneticButton from '../ui/MagneticButton'
import { contactInfo, socials } from '../../data/content'
import { GlowOrbs } from '../ui/GlowBackground'
import { MailIcon, PhoneIcon, PinIcon } from '../ui/icons'

const ICONS = { mail: MailIcon, phone: PhoneIcon, pin: PinIcon }

const FORM_ENDPOINT = 'https://formsubmit.co/contactstarrypix@gmail.com'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <GlowOrbs />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
            Get In Touch
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="mt-4 text-white/60">Let's build something amazing together.</p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <RevealGroup className="space-y-5" stagger={0.1}>
            {contactInfo.map((item) => {
              const Wrapper = item.href ? 'a' : 'div'
              const Icon = ICONS[item.icon]
              return (
                <RevealItem key={item.label}>
                  <Wrapper href={item.href} className="glass flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/40 to-fuchsia/30">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/40">{item.label}</div>
                      <div className="mt-0.5 font-medium text-white/90">{item.value}</div>
                    </div>
                  </Wrapper>
                </RevealItem>
              )
            })}

            <RevealItem className="glass flex flex-wrap items-center gap-3 rounded-2xl p-5">
              <span className="text-xs uppercase tracking-wide text-white/40">Follow us</span>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-all hover:border-violet-light/50 hover:text-white hover:shadow-[0_0_16px_-2px_rgba(139,92,246,0.8)]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="glass relative overflow-hidden rounded-[2rem] p-8">
              <input type="hidden" name="_subject" value="New enquiry from Starrypix site" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="space-y-5">
                <Field label="Email Address" name="email" type="email" placeholder="example@gmail.com" required />
                <Field label="Mobile Number" name="mobile" type="text" placeholder="+91 0000000000" required />
                <Field label="Purpose" name="purpose" type="text" placeholder="e.g. Logo design, Social media package..." required />
              </div>

              <MagneticButton as="button" type="submit" className="mt-7 w-full">
                {status === 'sending' ? 'Sending…' : 'Send'}
              </MagneticButton>

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-300"
                  >
                    Thanks! We'll get back to you shortly.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-center text-sm text-red-300"
                  >
                    Something went wrong — email us directly at contactstarrypix@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, required }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/40">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-violet-light/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.15)]"
      />
    </label>
  )
}
