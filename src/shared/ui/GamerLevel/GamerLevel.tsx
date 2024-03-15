import { Typography } from 'shared/ui/Typography'
import clsx from 'clsx'
import styles from './styles.module.scss'

type LevelVariant = 'Newbie' | 'Player' | 'Pro' | 'Elite' | 'Legend' | 'YES'

interface GamerLevelProps {
  level: LevelVariant
}

export function GamerLevel({ level }: GamerLevelProps) {
  const levelColor = level === 'Pro' ? 'gold' : 'gray'

  return (
    <div className={styles.level}>
      <span className={clsx(styles.level__dot, styles[level.toLowerCase()])} />

      <Typography variant="h6" color={levelColor}>
        {level} LVL
      </Typography>
    </div>
  )
}
