import { memo } from 'react'
import styles from './styles.module.scss'
import YesIcon from './yes.svg?react'
import EdgeIcon from './edge.svg?react'

export const PointsCoin = memo(() => (
  <div className={styles.wrapper}>
    <div className={styles.yes}>
      <YesIcon />
    </div>

    <EdgeIcon className={styles.edge} />
  </div>
))
