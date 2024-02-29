import clsx from 'clsx'
import styles from './Subtitle.module.css'

interface SubtitleProps {
  title: string
  className?: string
}

export function Subtitle({ title, className }: SubtitleProps) {
  return <h2 className={clsx(styles.subtitle, className)}>{title}</h2>
}
