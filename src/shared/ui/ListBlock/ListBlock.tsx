import { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

interface ListBlockProps {
  children: ReactNode
  height?: number
  className?: string
}

export function ListBlock({ children, height, className }: ListBlockProps) {
  return (
    <div className={clsx(styles.root, className)} style={{ height }}>
      {children}
    </div>
  )
}
