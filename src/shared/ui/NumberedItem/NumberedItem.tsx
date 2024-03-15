import { Picture } from 'shared/ui/Picture'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface ListItemProps {
  number: number
  avatar?: string
  title: string
  subtitle: string
}

export function NumberedItem({ number, avatar, title, subtitle }: ListItemProps) {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h6">{number}</Typography>

      <Picture type="round" src={avatar} />

      <div className={styles.info}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="h6" color="silver">
          {subtitle}
        </Typography>
      </div>
    </div>
  )
}
