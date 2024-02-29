import clsx from 'clsx'
import styles from './EnergyRemain.module.css'

interface EnergyRemainProps {
  remain: number
  className?: string
}

const MAX_ENERGY = 1000

export function EnergyRemain({ remain, className }: EnergyRemainProps) {
  return (
    <div className={clsx(styles.progress, className)}>
      <div className={styles.bar} style={{ width: `${(remain / MAX_ENERGY) * 100}%` }} />

      <div className={styles.counter}>
        {remain} / {MAX_ENERGY}
      </div>
    </div>
  )
}
