import { ActionButton, LayoutContent } from 'shared/ui'

import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

export function YesCoin() {
  return (
    <LayoutContent>
      <div className={styles.buttons}>
        <ActionButton message="Войти" variant="secondary" onClick={() => false} />

        <ActionButton variant="secondary" onClick={() => false} message="Подписаться" />
      </div>

      <Typography variant="h2" className={styles.title}>
        YesCoin
      </Typography>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.pic} />

          <div className={styles.content}>
            <span>Жми на монету</span>

            <span className={styles.label}>И получай YesCoin</span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.pic} />

          <div className={styles.content}>
            <span>Yes улучшению и бустам</span>

            <span className={styles.label}>Чтобы получать больше YesCoin</span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.pic} />

          <div className={styles.content}>
            <span>Yes соревнованиям</span>

            <span className={styles.label}>Дойди до лучшего LVL</span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.pic} />

          <div className={styles.content}>
            <span>Yes сквадам</span>

            <span className={styles.label}>Вместе больше</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <ActionButton message="Гайд" variant="secondary" onClick={() => false} />

        <ActionButton message="Пригласить друга" variant="primary" onClick={() => false} />
      </div>
    </LayoutContent>
  )
}
