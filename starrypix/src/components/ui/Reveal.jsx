import { motion } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  as = 'div',
  once = true,
  amount = 0.25,
  tilt = true,
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      style={tilt ? { transformPerspective: 1000 } : undefined}
      initial={{ opacity: 0, y, rotateX: tilt ? 10 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealGroup({ children, className = '', stagger = 0.1, amount = 0.2, once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '', y = 24, tilt = true }) {
  return (
    <motion.div
      className={className}
      style={tilt ? { transformPerspective: 1000 } : undefined}
      variants={{
        hidden: { opacity: 0, y, rotateX: tilt ? 10 : 0 },
        show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
