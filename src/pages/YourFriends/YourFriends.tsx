import { LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'
import { ToLeaders } from 'features/to-leaders'
import { FriendsList } from 'features'
import { InviteFriendButton } from 'features/invite-friend'
import { useParams } from 'react-router-dom'
import { useGetUser } from 'shared/openApi'
import styles from './styles.module.scss'

export function YourFriends() {
  const { id } = useParams()
  const { data: currentUser } = useGetUser(Number(id))

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
        Друзья {currentUser?.username}
      </Typography>

      <FriendsList className={styles.friends} />

      <InviteFriendButton />
    </LayoutContent>
  )
}
