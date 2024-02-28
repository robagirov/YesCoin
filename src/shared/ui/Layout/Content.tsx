import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ContentProps {
  children?: ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return <div className={styles.content}>{children}</div>
}
