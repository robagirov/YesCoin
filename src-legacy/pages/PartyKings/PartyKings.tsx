import { LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'
import { TopList } from 'features/top-list/ui/TopList.tsx'
import { InviteFriendButton } from 'features/invite-friend'
import styles from './styles.module.scss'

export function PartyKings() {
  return (
    <LayoutContent>
      <div className={styles.header}>
        <Typography variant="h2">Yes-топ</Typography>

        <Typography variant="h6" color="gray" align="center">
          Приглашай больше друзей {'\n'} чтобы попасть сюда
        </Typography>
      </div>

      <InviteFriendButton className={styles.button} />

      <TopList />
    </LayoutContent>
  )
}
