import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ as = 'a', href, onClick, children, className = '', variant = 'primary', type }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.3, y: y * 0.3 })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
  }

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap'
  const styles =
    variant === 'primary'
      ? 'text-white bg-gradient-to-r from-violet via-fuchsia to-indigo bg-size-[200%_100%] hover:bg-right shadow-[0_0_30px_-5px_rgba(139,92,246,0.7)]'
      : 'text-white/90 glass hover:border-white/25'

  const MotionTag = motion[as] || motion.button

  return (
    <MotionTag
      ref={ref}
      href={as === 'a' ? href : undefined}
      type={as === 'button' ? type : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </MotionTag>
  )
}
