import clsx from 'clsx'
import { Typography } from 'shared/ui/Typography'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import styles from './styles.module.scss'

interface ToLeadersProps {
  className?: string
}

export function ToLeaders({ className }: ToLeadersProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <Typography variant="h6" color="gold">
        +80k
      </Typography>

      <Link to={ROUTES.PARTY_KINGS}>
        <Typography variant="h6">Топ 300 лидеров</Typography>
      </Link>
    </div>
  )
}
