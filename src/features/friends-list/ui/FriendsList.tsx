import { ListBlock, Loader } from 'shared/ui'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import { useTelegramUserId } from 'entities/Telegram'
import { useGetFriendsSuspense } from 'shared/openApi'
import { Suspense } from 'react'
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
  console.log('=>(FriendsList.tsx:26) userId', userId)
  const { id } = useParams()
  console.log('=>(FriendsList.tsx:28) id', id)
  const { data, isError } = useGetFriendsSuspense(Number(id) || userId)

  // TODO: отрисовать состояние пустого списка
  if (!data?.length || isError) return <p>У вас нет друзей</p>

  return data.map((user) => <FriendItem asLink={!id} {...user} key={user.telegram_id} />)
}
