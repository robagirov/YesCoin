import styles from './styles.module.scss'
import LuminousCircle from 'shared/icon/LuminousCircle.svg?react'
import clsx from 'clsx'

interface BalanceAmountProps {
  amount: number
  className?: string
}

export const BalanceAmount = ({ amount, className }: BalanceAmountProps) => {
  const formattedAmount = new Intl.NumberFormat('en-US').format(amount)

  return (
    <div className={clsx(styles.container, className)}>
      <LuminousCircle />

      <span className={styles.amount}>{formattedAmount}</span>
    </div>
  )
}
