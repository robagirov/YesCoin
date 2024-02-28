import styles from './styles.module.scss'
import clsx from 'clsx'

export const DecorativeCircles = () => {
  return (
    <div className={styles.circles}>
      <div className={clsx(styles.circle, styles.royal)} />
      <div className={clsx(styles.circle, styles.lavender)} />
      <div className={clsx(styles.circle, styles.midnight)} />
      <div className={clsx(styles.circle, styles.eclipse)} />
    </div>
  )
}
