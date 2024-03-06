import { memo } from 'react'
import clsx from 'clsx'
import { ROUTES } from 'shared/consts'
import { Link } from 'react-router-dom'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface ChooseSquadProps {
  className?: string
}

export const ChooseSquadButton = memo(({ className }: ChooseSquadProps) => (
  <Link to={ROUTES.ENTER_SQUAD}>
    <button type="button" className={clsx(styles.button, className)}>
      <Typography variant="h4">Выбрать сквад →</Typography>
    </button>
  </Link>
))
