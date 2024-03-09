import clsx from 'clsx'
import { GoldLeagueLink } from 'features'
import { Link } from 'react-router-dom'
import styles from './FriendItem.module.scss'

interface FriendItemProps {
  avatar?: string
  telegram_id: number
  username: string
  asLink: boolean
}

export function FriendItem({ avatar, username, telegram_id: id, asLink }: FriendItemProps) {
  const as = { element: asLink ? Link : 'div' }

  const classNameInfo = clsx(styles.info, {
    [styles.info_noArrow]: !asLink,
  })

  return (
    <as.element to={id.toString()} className={styles.wrapper}>
      <img
        src={avatar || 'https://vatnikstan.ru/wp-content/uploads/2020/12/mavrodi.jpg'}
        className={styles.picture}
        alt="Фото профиля"
      />

      <div className={classNameInfo}>
        <div>
          <span className={styles.infoTitle}>{username}</span>
          <GoldLeagueLink isSmall />
        </div>

        <span className={styles.yellowText}>+50k</span>
      </div>
    </as.element>
  )
}
