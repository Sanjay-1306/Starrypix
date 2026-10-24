import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const ringX = useSpring(mx, { stiffness: 260, damping: 24, mass: 0.4 })
  const ringY = useSpring(my, { stiffness: 260, damping: 24, mass: 0.4 })
  const dotX = useSpring(mx, { stiffness: 900, damping: 40, mass: 0.2 })
  const dotY = useSpring(my, { stiffness: 900, damping: 40, mass: 0.2 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    function handleMove(e) {
      mx.set(e.clientX)
      my.set(e.clientY)
      const target = e.target.closest('a, button, [role="button"], input, textarea')
      setHovering(Boolean(target))
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mx, my])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full border border-white mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: hovering ? 56 : 32, height: hovering ? 56 : 32, opacity: hovering ? 0.9 : 0.6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: hovering ? 0 : 1 }}
      />
    </>
  )
}
