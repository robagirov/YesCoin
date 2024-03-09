import GoldCircle from 'shared/icon/GoldCircle.svg?react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ROUTES } from 'shared/consts'
import { memo } from 'react'
import styles from './GoldLeagueLink.module.css'

interface GoldLeagueLinkProps {
  isSmall?: boolean
  asLink?: boolean
}

export const GoldLeagueLink = memo(({ isSmall, asLink = true }: GoldLeagueLinkProps) => {
  const as = { element: asLink ? Link : 'div' }

  const className = clsx(styles.sign, {
    [styles.small]: isSmall,
  })

  return (
    <as.element to={ROUTES.GOLD_LEAGUE} className={styles.wrapper}>
      <GoldCircle />
      <div className={className}>Gold</div>
    </as.element>
  )
})
