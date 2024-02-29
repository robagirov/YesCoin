import clsx from 'clsx'
import { ROUTES } from 'shared/consts'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

interface ChooseSquadProps {
  className?: string
}

export function ChooseSquadButton({ className }: ChooseSquadProps) {
  return (
    <Link to={ROUTES.ENTER_SQUAD}>
      <button type="button" className={clsx(styles.button, className)}>
        Выбрать сквад →
      </button>
    </Link>
  )
}
