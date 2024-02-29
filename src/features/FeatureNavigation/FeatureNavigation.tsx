import type { ReactNode } from 'react'
import styles from './FeatureNavigation.module.css'

interface FeatureNavigationProps {
  children: ReactNode
}

export function FeatureNavigation({ children }: FeatureNavigationProps) {
  return (
    <div className={styles.border}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}
