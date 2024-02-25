import clsx from 'clsx'
import styles from './styles.module.scss'

interface BoostCardProps {
  className?: string
}

export const BoostCard = ({ className }: BoostCardProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div>
        <div>Turbo</div>
        <div className={styles.count}>3/3 активно</div>
      </div>

      <div className={styles.pic} />
    </div>
  )
}
