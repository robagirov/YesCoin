import type { ReactNode } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { DecorativeCircles } from './DecorativeCircles'
import { BackBlur } from './BackBlur'

interface ViewMarkupProps {
  children: ReactNode
  className?: string
}

export const BaseLayout = ({ children, className }: ViewMarkupProps) => {
  return (
    <div className={clsx(styles.layout, className)}>
      {children}
      <BackBlur />
      <DecorativeCircles />
    </div>
  )
}
