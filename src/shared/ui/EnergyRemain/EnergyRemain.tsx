import clsx from 'clsx'
import styles from './EnergyRemain.module.css'

interface EnergyRemainProps {
  remain: number
  className?: string
}

export const EnergyRemain = ({ remain, className }: EnergyRemainProps) => {
  return (
    <div className={clsx(styles.progress, className)}>
      <div className={styles.bar} style={{ width: `${(remain / 5500) * 100}%` }} />

      <div className={styles.counter}>{remain} / 5500</div>
    </div>
  )
}
