import { Picture } from 'shared/ui/Picture'
import { GamerLevel } from 'shared/ui/GamerLevel'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface SquadItemProps {
  image?: string
  name: string
  level: 'Pro' | 'Middle'
}

export function SquadItem({ image, name, level }: SquadItemProps) {
  return (
    <div className={styles.item}>
      <Picture src={image} type="square" />

      <div className={styles.inner}>
        <Typography variant="h4" color="white">
          {name}
        </Typography>

        <GamerLevel level={level} />
      </div>
    </div>
  )
}
