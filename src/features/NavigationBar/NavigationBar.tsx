import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import { memo } from 'react'
import styles from './styles.module.scss'
import GoldIcon from './GoldIcon.svg?react'
import PresentIcon from './PresentIcon.svg?react'
import CoinIcon from './CoinIcon.svg?react'
import RocketIcon from './RocketIcon.svg?react'

export const NavigationBar = memo(() => (
  <div className={styles.bar}>
    <Link to={ROUTES.CRYPTO_HOLDER} className={styles.item}>
      <GoldIcon className={styles.icon} />
      <span className={styles.sign}>Кошелек</span>
    </Link>

    <hr className={styles.divider} />

    <Link to={ROUTES.YOUR_FRIENDS} className={styles.item}>
      <PresentIcon className={styles.icon} />
      <span className={styles.sign}>Друзья</span>
    </Link>

    <hr className={styles.divider} />

    <Link to={ROUTES.FARM_COINS} className={styles.item}>
      <CoinIcon className={styles.icon} />
      <span className={styles.sign}>Фарм</span>
    </Link>

    <hr className={styles.divider} />

    <Link to={ROUTES.GAME_BOOST} className={styles.item}>
      <RocketIcon className={styles.icon} />
      <span className={styles.sign}>Бусты</span>
    </Link>
  </div>
))
