import clsx from 'clsx'
import styles from './styles.module.scss'

interface ArrowRightProps {
  className?: string
}

export function ArrowRight({ className }: ArrowRightProps) {
  return <div className={clsx(styles.arrow, className)} />
}
