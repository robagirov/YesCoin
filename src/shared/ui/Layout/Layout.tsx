import type { ReactNode } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { DecorativeCircles } from './DecorativeCircles'
import { BackBlur } from './BackBlur'
import { useLocation } from 'react-router-dom'
import { GlowCircle } from '../GlowCircle'
import { ROUTES } from 'shared/consts'

interface ViewMarkupProps {
  children: ReactNode
  className?: string
}

export const Layout = ({ children, className }: ViewMarkupProps) => {
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
