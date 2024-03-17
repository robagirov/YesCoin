import { ListBlock, NumberedItem } from 'shared/ui'
import clsx from 'clsx'
import type { SquadReadDetailUsers } from 'shared/openApi/model'
import { BlankListStub } from 'shared/ui/BlankListStub'
import styles from './styles.module.scss'

interface TopListProps {
  className?: string
  users?: SquadReadDetailUsers
}

export function TopList({ className, users }: TopListProps) {
  return (
    <ListBlock className={clsx(styles.topChartList, className)}>
      {!users || !users.length ? (
        <BlankListStub label="Список участников пуст" />
      ) : (
        users.map(({ username, telegram_id: id }, index) => (
          <NumberedItem
            key={id}
            title={username}
            avatar="avatar"
            number={index + 1}
            // subtitle={`${friends.toLocaleString()} Друзей` // TODO: мок аватар и количество друзей}
            subtitle="Друзей"
          />
        ))
      )}
    </ListBlock>
  )
}
