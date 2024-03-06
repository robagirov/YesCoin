import { ActionButton, BackCard, LayoutContent } from 'shared/ui'

import { FriendItem } from 'shared/ui/FriendItem'
import type { MouseEventHandler } from 'react'
import { getTelegramBotInviteLink, useTelegram } from 'entities/Telegram'
import { Typography } from 'shared/ui/Typography'
import { ToLeaders } from 'features/ToLeaders'
import styles from './styles.module.scss'

export function YourFriends() {
  const telegram = useTelegram()

  const inviteHandler: MouseEventHandler = () => {
    telegram.openTelegramLink(getTelegramBotInviteLink())

    telegram.close()
  }

  return (
    <LayoutContent>
      <div className={styles.header}>
        <Typography variant="h2">Ваши друзья</Typography>

        <Typography variant="h6" color="purple">
          Зови друзей и получай монетки!
        </Typography>
      </div>

      <ToLeaders className={styles.leader} />

      <Typography variant="h3" className={styles.subtitle}>
        Друзья
      </Typography>

      <BackCard className={styles.friends}>
        <FriendItem name="Бизьяна Битзайн" />
        <FriendItem name="Бизьяна Битзайн" />
        <FriendItem name="Бизьяна Битзайн" />
        <FriendItem name="Бизьяна Битзайн" />
        <FriendItem name="Бизьяна Битзайн" />
        <FriendItem name="Бизьяна Битзайн" />
      </BackCard>

      <ActionButton variant="primary" message="Пригласить друга" onClick={inviteHandler} />
    </LayoutContent>
  )
}
