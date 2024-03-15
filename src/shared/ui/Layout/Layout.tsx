import type { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { DecorativeCircles } from './DecorativeCircles'
import { BackBlur } from './BackBlur'

interface ViewMarkupProps {
  children: ReactNode
  className?: string
}

export function Layout({ children, className }: ViewMarkupProps) {
  return (
    <div className={clsx(styles.layout, className)}>
      {children}

      <BackBlur />

      <DecorativeCircles />
    </div>
  )
}
