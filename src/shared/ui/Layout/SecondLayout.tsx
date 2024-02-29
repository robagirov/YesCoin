import type { ReactNode } from 'react'
import { GlowCircle } from '../GlowCircle'
import styles from './styles.module.scss'

type Props = {
  children?: ReactNode
}

export function SecondLayout({ children }: Props) {
  return (
    <div className={styles.secondLayout}>
      {children}
      <GlowCircle position="bottom" className="opacity-40" />
    </div>
  )
}
