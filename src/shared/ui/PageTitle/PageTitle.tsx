import styles from './styles.module.scss'
import clsx from 'clsx'

interface PageTitleProps {
  title: string
  className?: string
}

export const PageTitle = ({ title, className }: PageTitleProps) => {
  return <h1 className={clsx(styles.title, className)}>{title}</h1>
}
