import { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

interface BackCardProps {
  children: ReactNode
  height?: number
  className?: string
}

export function BackCard({ children, height, className }: BackCardProps) {
  return (
    <div className={clsx(styles.root, className)} style={{ height }}>
      {children}
    </div>
  )
}
