import styles from './styles.module.scss'
import { EnergyCounter, EnergyRing, PointsCoin } from 'features'

interface Props {
  energyLeft: number
  totalEnergy: number
  onClick: () => void
}

export const MainCoin = ({ energyLeft, totalEnergy, onClick }: Props) => {
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
