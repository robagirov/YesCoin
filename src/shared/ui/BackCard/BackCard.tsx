import { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

interface BackCardProps {
  children: ReactNode
  height?: number
  className?: string
}

export const BackCard = ({ children, height, className }: BackCardProps) => {
  return (
    <div
      className={clsx(styles.root, 'flex flex-col rounded-md bg-[rgba(243,243,245,0.1)] overflow-y-auto', className)}
      style={{ height: height }}
    >
      {children}
    </div>
  )
}
