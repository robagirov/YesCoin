import { EnergyCounter, EnergyRing, PointsCoin } from 'features'
import styles from './styles.module.scss'

interface Props {
  energyLeft: number
  totalEnergy: number
  onClick: () => void
}

export function MainCoin({ energyLeft, totalEnergy, onClick }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} onClick={onClick}>
        <EnergyRing energyLeft={energyLeft} totalEnergy={totalEnergy} />

        <PointsCoin />
      </div>

      <EnergyCounter energyLeft={energyLeft} totalEnergy={totalEnergy} />
    </div>
  )
}
