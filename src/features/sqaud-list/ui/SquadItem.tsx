import { Picture } from 'shared/ui/Picture'
import { GamerLevel } from 'shared/ui/GamerLevel'
import { Typography } from 'shared/ui/Typography'
import type { SquadRead } from 'shared/openApi/model'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import styles from './styles.module.scss'

interface SquadItemProps extends SquadRead {}

export function SquadItem({ id, name }: SquadItemProps) {
  // TODO: добавить картинку и уровень сквада

  return (
    <Link to={`${ROUTES.SQUAD_NAME}/${id}`} className={styles.item}>
      <Picture src="" type="square" />

      <div className={styles.inner}>
        <Typography variant="h4" color="white">
          {name}
        </Typography>
        <GamerLevel level="Pro" /> {/* TODO: mock */}
      </div>
    </Link>
  )
}
