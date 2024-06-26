import clsx from 'clsx'

import styles from './styles.module.scss'

interface BoostItemProps {
  className?: string
  cost: number
  title: string
  picture?: string
  onClick?: () => void
}

export function BoostOption({ className, onClick, cost, title, picture }: BoostItemProps) {
  return (
    <div className={clsx(styles.option, className)} onClick={onClick}>
      <img
        src={
          picture ||
          'https://contenthub-static.crypto.com/wp_media/2023/05/WHAT_ARE_MEMECOINS_OTP.jpg'
        }
        className={styles.pic}
        alt="Фото профиля"
      />

      <div className={styles.boost}>
        <span className={styles.name}>{title}</span>

        <div className={styles.sub}>
          <span className={styles.cost}>{cost.toLocaleString()}</span>

          <span className={styles.lvl}>9 lvl</span>
        </div>
      </div>
    </div>
  )
}
