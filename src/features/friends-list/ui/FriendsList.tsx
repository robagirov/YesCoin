import { ListBlock } from 'shared/ui'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { FriendItem } from './FriendItem'
import { mockData } from '../model/mock'

interface FriendsListProps {
  className?: string
}

export function FriendsList({ className }: FriendsListProps) {
  return (
    <ListBlock className={clsx(styles.list, className)}>
      {mockData?.map(({ name, level, avatar, bonus }) => (
        <FriendItem key={name} name={name} level={level} avatar={avatar} bonus={bonus} />
      ))}
    </ListBlock>
  )
}
