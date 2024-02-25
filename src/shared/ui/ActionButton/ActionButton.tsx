import styles from './ActionButton.module.scss'
import clsx from 'clsx'

interface ActionButtonProps {
  variant: 'primary' | 'secondary'
  onClick: () => void
  message: string
  className?: string
}

export const ActionButton = ({ variant = 'primary', onClick, className, message }: ActionButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
      onClick={onClick}
    >
      {message}
    </button>
  )
}
