import clsx from 'clsx'
import styles from './ActionButton.module.scss'

interface ActionButtonProps {
  variant: 'primary' | 'secondary'
  onClick: () => void
  message: string
  className?: string
}

export function ActionButton({
  variant = 'primary',
  onClick,
  className,
  message,
}: ActionButtonProps) {
  return (
    <button
      type="button"
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
