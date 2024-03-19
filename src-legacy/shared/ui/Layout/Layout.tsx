import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import styles from './styles.module.scss'
import { DecorativeCircles } from './DecorativeCircles'
import { BackBlur } from './BackBlur'
import { GlowCircle } from '../GlowCircle'

interface ViewMarkupProps {
  children: ReactNode
  className?: string
}

export function Layout({ children, className }: ViewMarkupProps) {
  const location = useLocation()

  return (
    <div className={clsx(styles.layout, className)}>
      {children}
      <BackBlur />
      <DecorativeCircles />

      {location.pathname !== ROUTES.MAIN_BOARD && (
        <GlowCircle position="bottom" className="opacity-40" />
      )}
    </div>
  )
}
