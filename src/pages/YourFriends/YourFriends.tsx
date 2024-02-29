import { ActionButton, BackCard, InfoTrigger, LayoutContent } from 'shared/ui'
import { PageTitle } from 'shared/ui'

import styles from './styles.module.scss'
import { FriendItem } from 'shared/ui/FriendItem'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'

export const YourFriends = () => {
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

      <div className={styles['subtitle']}>Yes-друзья</div>

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

      <ActionButton variant="primary" message="Invite a fren" onClick={() => false} />
    </LayoutContent>
  )
}
