import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface Props {
  energyLeft: number
  totalEnergy: number
}

export function EnergyCounter({ energyLeft, totalEnergy }: Props) {
  return (
    <div className={styles.energy}>
      <Typography variant="h5" className={styles.left}>
        {energyLeft}
      </Typography>

      <Typography variant="h5" className={styles.separator}>
        /
      </Typography>

      <Typography variant="h5" className={styles.total}>
        {totalEnergy}
      </Typography>
    </div>
  )
}
