import { ListBlock, Loader } from 'shared/ui'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import { useTelegramUserId } from 'entities/Telegram'
import { useGetFriendsSuspense } from 'shared/openApi'
import { Suspense } from 'react'
import Lottie from 'react-lottie'
import { Typography } from 'shared/ui/Typography'
import { FriendItem } from './FriendItem'
import styles from './styles.module.scss'

import animationData from '../../../../assets/lotties/cat-no-friends.json'

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
        <Typography variant="h5">Вы никого не пригласили</Typography>

        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData,
          }}
          style={{ width: '15rem', height: '15rem' }}
        />
      </div>
    )

  return data.map((user) => <FriendItem asLink={!id} {...user} key={user.telegram_id} />)
}
