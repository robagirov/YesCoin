import LuminousCircle from 'shared/icon/LuminousCircle.svg?react'
import clsx from 'clsx'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface BalanceAmountProps {
  amount: number
  className?: string
}

export function BalanceAmount({ amount, className }: BalanceAmountProps) {
  const formattedAmount = new Intl.NumberFormat('en-US').format(amount)

  return (
    <div className={clsx(styles.container, className)}>
      <LuminousCircle />

      <Typography variant="h1">{formattedAmount}</Typography>
    </div>
  )
}
