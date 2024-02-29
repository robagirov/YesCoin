import GoldCircle from 'shared/icon/GoldCircle.svg?react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ROUTES } from 'shared/consts'
import styles from './GoldLeagueLink.module.css'

interface GoldLeagueLinkProps {
  isSmall?: boolean
}

export function GoldLeagueLink({ isSmall }: GoldLeagueLinkProps) {
  return (
    <Link to={ROUTES.GOLD_LEAGUE} className={styles.wrapper}>
      <GoldCircle />

      <div
        className={clsx(styles.sign, {
          [styles.small]: isSmall,
        })}
      >
        Gold
      </div>
    </Link>
  )
}
