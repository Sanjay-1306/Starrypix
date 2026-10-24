import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '../../data/content'
import MagneticButton from '../ui/MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div
            className={`flex w-full items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
              scrolled ? 'glass shadow-[0_8px_40px_-12px_rgba(139,92,246,0.35)]' : ''
            }`}
          >
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-light to-fuchsia shadow-[0_0_12px_2px_rgba(139,92,246,0.8)]" />
              Starrypix
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <MagneticButton href="#contact" className="!px-5 !py-2 !text-xs">
                Get in Touch
              </MagneticButton>
            </div>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full glass md:hidden"
            >
              <span className="h-px w-4 bg-white" />
              <span className="h-px w-4 bg-white" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full glass text-xl text-white"
              >
                ×
              </button>
            </div>
            <motion.nav
              className="flex flex-col items-center gap-8 px-6 pt-10"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              {nav.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  className="font-display text-3xl font-semibold text-white/85 hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                <MagneticButton href="#contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </MagneticButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
