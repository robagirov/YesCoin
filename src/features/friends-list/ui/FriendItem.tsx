import { Picture } from 'shared/ui/Picture'
import { Typography } from 'shared/ui/Typography'
// import { GamerLevel } from 'shared/ui/GamerLevel'
// import { USER_PRO_LEVEL } from 'shared/consts/user-levels.ts'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface FriendItemProps {
  avatar?: string
  telegram_id: number
  username: string
  // level?: 'Pro' | 'Middle'
  // bonus?: number
  asLink: boolean
}

// TODO: нет половины данных

export function FriendItem({
  avatar,
  username,
  telegram_id: id,
  // level = 'Middle',
  // bonus,
  asLink,
}: FriendItemProps) {
  const as = { element: asLink ? Link : 'div' }
  // const bonusColor = level === USER_PRO_LEVEL ? 'gold' : 'gray'

  const className = clsx(styles.wrapper, {
    [styles.wrapper_noArrow]: !asLink,
  })

  return (
    <as.element to={id.toString()} className={className}>
      <Picture type="round" src={avatar} />

      <div className={styles.info}>
        <div className={styles.inner}>
          <Typography variant="h6">{username}</Typography>

          {/* <GamerLevel level={level} /> */}
        </div>

        {/* <Typography variant="h6" color={bonusColor}> */}
        {/*  +{bonus}k */}
        {/* </Typography> */}
      </div>
    </as.element>
  )
}
