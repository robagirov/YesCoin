import PurpleBorderCircle from 'shared/icon/PurpleBorderCircle.svg?react'
import styles from './LevelCounter.module.css'

export function LevelCounter() {
  return (
    <div className={styles.wrapper}>
      <PurpleBorderCircle />

      <div className={styles['count-wrapper']}>
        <span className={styles['current-count']}>5000</span>
        <span className={styles['common-count']}>/ 5500</span>
      </div>
    </div>
  )
}
