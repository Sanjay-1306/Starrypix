import { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', glow = true, strength = 10, perspective = 900 }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [strength, -strength]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-strength, strength]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(mx, [0, 1], ['0%', '100%'])
  const glowY = useTransform(my, [0, 1], ['0%', '100%'])
  const glowBg = useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, rgba(167,139,250,0.25), transparent 70%)`

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  const content = typeof children === 'function' ? children({ mx, my, rotateX, rotateY }) : children

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: perspective, transformStyle: 'preserve-3d' }}
      className={`group relative ${className}`}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBg }}
        />
      )}
      {content}
    </motion.div>
  )
}
