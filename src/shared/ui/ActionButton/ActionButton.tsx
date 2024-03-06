import clsx from 'clsx'
import type { MouseEventHandler } from 'react'
import { Typography } from 'shared/ui/Typography'
import styles from './ActionButton.module.scss'

interface ActionButtonProps {
  variant: 'primary' | 'secondary'
  onClick: MouseEventHandler<HTMLButtonElement>
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
      <Typography variant="h5" align="center">
        {message}
      </Typography>
    </button>
  )
}
