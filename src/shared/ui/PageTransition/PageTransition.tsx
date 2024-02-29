import clsx from 'clsx'
import type { ReactNode } from 'react'
import { motion, type Transition, type Variants } from 'framer-motion'
import styles from './styles.module.scss'

interface PageTransitionProps {
  className?: string
  children: ReactNode
}

const TRANSITION_VARIANTS: Variants = {
  in: {
    opacity: 0,
    x: '-100vw',
  },
  anim: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
}

const PAGE_TRANSITION: Transition = {
  duration: 0.1,
}

export const PageTransition = ({ className, children }: PageTransitionProps) => {
  return (
    <motion.div
      className={clsx(className, styles.transition)}
      initial="in"
      animate="anim"
      exit="out"
      variants={TRANSITION_VARIANTS}
      transition={PAGE_TRANSITION}
    >
      {children}
    </motion.div>
  )
}