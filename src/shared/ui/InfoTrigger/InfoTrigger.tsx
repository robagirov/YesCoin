import clsx from 'clsx'
import styles from './styles.module.scss'

interface InfoTriggerProps {
  text: string
  onClick?: () => void
  className?: string
}

export function InfoTrigger({ text, onClick, className }: InfoTriggerProps) {
  return (
    <p onClick={onClick} className={clsx(styles.subtitle, className, 'text-center')}>
      {text}
    </p>
  )
}
