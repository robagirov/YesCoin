import type { ReactNode } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

export function MainLayout({ children, className }: Props) {
  return <div className={clsx(styles.secondLayout, className)}>{children}</div>
}
