import clsx from 'clsx'
import styles from './styles.module.scss'

interface PageTitleProps {
  title: string
  className?: string
}

export function PageTitle({ title, className }: PageTitleProps) {
  return <h1 className={clsx(styles.title, className)}>{title}</h1>
}
