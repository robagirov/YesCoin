import { ListBlock, Loader } from 'shared/ui'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import { useTelegramUserId } from 'entities/Telegram'
import { useGetFriendsSuspense } from 'shared/openApi'
import { Suspense } from 'react'
import { BlankListStub } from 'shared/ui/BlankListStub'
import { FriendItem } from './FriendItem'
import styles from './styles.module.scss'

interface FriendsListProps {
  className?: string
}

export function FriendsList({ className }: FriendsListProps) {
  return (
    <ListBlock className={clsx(styles.list, className)}>
      <Suspense fallback={<Loader />}>
        <ItemsList />
      </Suspense>
    </ListBlock>
  )
}

function ItemsList() {
  const userId = useTelegramUserId()
  const { id } = useParams()
  const { data, isError } = useGetFriendsSuspense(Number(id) || userId)

  // TODO: отрисовать состояние пустого списка
  if (!data?.length || isError)
    return (
      <div className={styles.empty}>
        <BlankListStub label="Вы никого не пригласили" />
      </div>
    )

  return data.map((user) => <FriendItem asLink={!id} {...user} key={user.telegram_id} />)
}
