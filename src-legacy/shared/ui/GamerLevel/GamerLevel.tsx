import { Typography } from 'shared/ui/Typography'
import { USER_MIDDLE_LEVEL, USER_PRO_LEVEL } from 'shared/consts/user-levels.ts'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface GamerLevelProps {
  level: 'Pro' | 'Middle'
}

export function GamerLevel({ level }: GamerLevelProps) {
  const levelColor = level === USER_PRO_LEVEL ? 'gold' : 'gray'

  return (
    <div className={styles.level}>
      <span
        className={clsx(styles.level__dot, {
          [styles.level__dot_color_gold]: level === USER_PRO_LEVEL,
          [styles.level__dot_color_gray]: level === USER_MIDDLE_LEVEL,
        })}
      />

      <Typography variant="h6" color={levelColor}>
        {level} LVL
      </Typography>
    </div>
  )
}
