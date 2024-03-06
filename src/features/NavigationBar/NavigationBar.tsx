import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import { memo } from 'react'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'
import GoldIcon from './GoldIcon.svg?react'
import PresentIcon from './PresentIcon.svg?react'
import CoinIcon from './CoinIcon.svg?react'
import RocketIcon from './RocketIcon.svg?react'

export const NavigationBar = memo(() => (
  <div className={styles.bar}>
    <Link to={ROUTES.CRYPTO_HOLDER} className={styles.item}>
      <GoldIcon className={styles.icon} />

      <Typography variant="h7">Кошелек</Typography>
    </Link>

    <hr className={styles.divider} />

    <Link to={ROUTES.YOUR_FRIENDS} className={styles.item}>
      <PresentIcon className={styles.icon} />

      <Typography variant="h7">Друзья</Typography>
    </Link>

    <hr className={styles.divider} />

    <Link to={ROUTES.FARM_COINS} className={styles.item}>
      <CoinIcon className={styles.icon} />

      <Typography variant="h7">Фарм</Typography>
    </Link>

    <hr className={styles.divider} />

    <Link to={ROUTES.GAME_BOOST} className={styles.item}>
      <RocketIcon className={styles.icon} />

      <Typography variant="h7">Бусты</Typography>
    </Link>
  </div>
))
