import { ListBlock, MoveItem, LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

export function FarmCoins() {
  return (
    <LayoutContent>
      <div className={styles.content}>
        <div className={styles.head}>
          <Typography variant="h2">Только Yes фармингу</Typography>

          <Typography variant="h4" color="purple">
            Полная инструкция
          </Typography>
        </div>

        <div className={styles.topItem}>
          <MoveItem coins={10000} title="Зови друзей" />
        </div>

        <Typography variant="h3" className={styles.active}>
          Активные
        </Typography>

        <ListBlock className={styles.farmList}>
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Присоединиться в сквад" />
          <MoveItem coins={10000} title="Подпишись на канал" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Присоединиться в сквад" />
          <MoveItem coins={10000} title="Подпишись на канал" />
        </ListBlock>
      </div>
    </LayoutContent>
  )
}
