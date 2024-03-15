import { Picture } from 'shared/ui/Picture'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface MoveItemProps {
  avatar?: string
  title: string
  coins: number
}

export function MoveItem({ avatar, title, coins }: MoveItemProps) {
  return (
    <div className={styles.wrapper}>
      <Picture type="square" src={avatar} />

      <div className={styles.info}>
        <Typography variant="h4" color="silver">
          {title}
        </Typography>

        <Typography variant="h6" color="white">
          +{coins.toLocaleString()}
        </Typography>
      </div>
    </div>
  )
}
