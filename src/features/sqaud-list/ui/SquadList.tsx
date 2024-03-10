import { ListBlock } from 'shared/ui'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import styles from './styles.module.scss'
import { SquadItem } from './SquadItem'
import { mockData } from '../model/mock'

export function SquadList() {
  return (
    <ListBlock className={styles.list}>
      {mockData.map(({ name, level, avatar }) => (
        <Link to={ROUTES.SQUAD_NAME} key={name}>
          <SquadItem name={name} level={level} image={avatar} />
        </Link>
      ))}
    </ListBlock>
  )
}
