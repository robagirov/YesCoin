import clsx from 'clsx'
import styles from './styles.module.scss'
import { ROUTES } from 'shared/consts'
import { Link } from 'react-router-dom'

interface ChooseSquadProps {
  className?: string
}

export const ChooseSquadButton = ({ className }: ChooseSquadProps) => {
  return (
    <Link to={ROUTES.ENTER_SQUAD}>
      <button className={clsx(styles.button, className)}>Выбрать сквад →</button>
    </Link>
  )
}
