import { ActionButton, BackCard, InfoTrigger, LayoutContent, PageTitle } from 'shared/ui'

import { FriendItem } from 'shared/ui/FriendItem'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import type { MouseEventHandler } from 'react'
import { getTelegramBotInviteLink, useTelegram } from 'entities/Telegram'
import styles from './styles.module.scss'

export function YourFriends() {
  const telegram = useTelegram()

  const inviteHandler: MouseEventHandler = () => {
    telegram.openTelegramLink(getTelegramBotInviteLink())

    telegram.close()
  }

  return (
    <LayoutContent>
      <div className={styles['title-wrapper']}>
        <PageTitle title="Ваши друзья" />

        <InfoTrigger text="Как нафармить 1М Коинов" />
      </div>

      <div className={styles['to-leader']}>
        <span style={{ textAlign: 'left' }}>+0</span>

        <Link to={ROUTES.PARTY_KINGS}>Топ 300 лидеров</Link>
      </div>

      <div className={styles.subtitle}>Yes-друзья</div>

      <div className={styles['friends-list-wrapper']}>
        <BackCard className={styles['friends-list']}>
          <FriendItem name="Бизьяна Битзайн" />
          <FriendItem name="Бизьяна Битзайн" />
          <FriendItem name="Бизьяна Битзайн" />
          <FriendItem name="Бизьяна Битзайн" />
          <FriendItem name="Бизьяна Битзайн" />
          <FriendItem name="Бизьяна Битзайн" />
        </BackCard>
      </div>

      <ActionButton variant="primary" message="Invite a fren" onClick={inviteHandler} />
    </LayoutContent>
  )
}
