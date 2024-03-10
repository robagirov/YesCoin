import { ListBlock, NumberedItem } from 'shared/ui'
import { mockData } from 'features/top-list/model/mock.ts'
import styles from './styles.module.scss'

export function TopList() {
  return (
    <ListBlock className={styles.topChartList}>
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
