import styles from './styles.module.scss'

interface MoveItemProps {
  avatar?: string
  title: string
  coins: number
}

export const MoveItem = ({ avatar, title, coins }: MoveItemProps) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={avatar || 'https://vatnikstan.ru/wp-content/uploads/2020/12/mavrodi.jpg'}
        className={styles.picture}
        alt="Фото профиля"
      />

      <div className={styles.info}>
        <span className={styles.infoTitle}>{title}</span>
        <span className={styles.infoCount}>+{coins.toLocaleString()}</span>
      </div>
    </div>
  )
}
