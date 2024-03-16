import clsx from 'clsx'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface EnergyRemainProps {
  remain: number
  maxEnergy: number
  className?: string
}

export function LeaguePoints({ remain, maxEnergy, className }: EnergyRemainProps) {
  return (
    <>
      <Typography variant="h6" align="center" color="gray">
        {remain} / {maxEnergy?.toLocaleString()}
      </Typography>

      <div className={clsx(styles.progress, className)}>
        <div className={styles.bar} style={{ width: `${(remain / maxEnergy) * 100}%` }} />
      </div>
    </>
  )
}
