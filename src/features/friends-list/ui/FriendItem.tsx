import { Picture } from 'shared/ui/Picture'
import { Typography } from 'shared/ui/Typography'
import { GamerLevel } from 'shared/ui/GamerLevel'
import { USER_PRO_LEVEL } from 'shared/consts/user-levels.ts'
import styles from './styles.module.scss'

interface FriendItemProps {
  avatar?: string
  name: string
  level: 'Pro' | 'Middle'
  bonus: number
}

export function FriendItem({ avatar, name, level, bonus }: FriendItemProps) {
  const bonusColor = level === USER_PRO_LEVEL ? 'gold' : 'gray'

  return (
    <div className={styles.wrapper}>
      <Picture type="round" src={avatar} />

      <div className={styles.info}>
        <div className={styles.inner}>
          <Typography variant="h6">{name}</Typography>

          <GamerLevel level={level} />
        </div>

        <Typography variant="h6" color={bonusColor}>
          +{bonus}k
        </Typography>
      </div>
    </div>
  )
}
