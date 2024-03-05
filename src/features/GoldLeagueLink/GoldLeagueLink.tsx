import GoldCircle from 'shared/icon/GoldCircle.svg?react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ROUTES } from 'shared/consts'
import { memo } from 'react'
import styles from './GoldLeagueLink.module.css'

interface GoldLeagueLinkProps {
  isSmall?: boolean
}

export const GoldLeagueLink = memo(({ isSmall }: GoldLeagueLinkProps) => {
  const className = clsx(styles.sign, {
    [styles.small]: isSmall,
  })

  return (
    <Link to={ROUTES.GOLD_LEAGUE} className={styles.wrapper}>
      <GoldCircle />
      <div className={className}>Gold</div>
    </Link>
  )
})
