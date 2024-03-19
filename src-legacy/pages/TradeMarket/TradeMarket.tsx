import { ActionButton, LayoutContent } from 'shared/ui'
import styles from './styles.module.scss'

export function TradeMarket() {
  return (
    <LayoutContent>
      <div className={styles.button}>
        <ActionButton variant="primary" message="Connect TON wallet" onClick={() => false} />
      </div>

      <h1 className={styles.header}>Market</h1>

      <div className={styles.list}>
        {Array.from({ length: 23 }).map((_, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.picture} />

            <div className={styles.info}>
              <span className={styles.name}>text</span>
              <span className={styles.price}>$354</span>
            </div>
          </div>
        ))}
      </div>
    </LayoutContent>
  )
}
