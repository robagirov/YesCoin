import styles from './FriendItem.module.css'
import { GoldLeagueLink } from 'features'

interface FriendItemProps {
  avatar?: string
  name: string
  status?: 'gold'
}

export const FriendItem = ({ avatar, name }: FriendItemProps) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={avatar || 'https://vatnikstan.ru/wp-content/uploads/2020/12/mavrodi.jpg'}
        className={styles.picture}
        alt="Фото профиля"
      />

      <div className={styles.info}>
        <div>
          <span className={styles.infoTitle}>{name}</span>

          <GoldLeagueLink isSmall />
        </div>

        <span className={styles.yellowText}>+50k</span>
      </div>
    </div>
  )
}
