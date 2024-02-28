import styles from './styles.module.scss'

interface Props {
  energyLeft: number
  totalEnergy: number
}

export const EnergyCounter = ({ energyLeft, totalEnergy }: Props) => {
  return (
    <div className={styles.energy}>
      <span className={styles.left}>{energyLeft}</span>

      <span className={styles.separator}>/</span>

      <span className={styles.total}>{totalEnergy}</span>
    </div>
  )
}
