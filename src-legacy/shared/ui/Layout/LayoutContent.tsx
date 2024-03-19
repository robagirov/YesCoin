import type { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ContentProps {
  children?: ReactNode
}

export function LayoutContent({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>
}
