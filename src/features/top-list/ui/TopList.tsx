import { ListBlock, NumberedItem } from 'shared/ui'
import { mockData } from 'features/top-list/model/mock.ts'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface TopListProps {
  className?: string
}

export function TopList({ className }: TopListProps) {
  return (
    <ListBlock className={clsx(styles.topChartList, className)}>
      {mockData.map(({ friends, name, avatar }, index) => (
        <NumberedItem
          key={name}
          title={name}
          avatar={avatar}
          number={index + 1}
          subtitle={`${friends.toLocaleString()} Друзей`}
        />
      ))}
    </ListBlock>
  )
}
