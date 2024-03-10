import { LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'
import { ToLeaders } from 'features/ToLeaders'
import { FriendsList } from 'features'
import { InviteFriendButton } from 'features/invite-friend'
import styles from './styles.module.scss'

export function YourFriends() {
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

      <FriendsList className={styles.friends} />

      <InviteFriendButton />
    </LayoutContent>
  )
}
