import styles from './styles.module.scss'
import { BackCard, InfoTrigger, MoveItem, PageTitle, Subtitle, LayoutContent } from 'shared/ui'

export const FarmCoins = () => {
  return (
    <LayoutContent>
      <div className={styles.content}>
        <div className={styles.head}>
          <PageTitle title="Только Yes фармингу" />

          <InfoTrigger text="Полная инструкция" />
        </div>

        <BackCard className={styles.topItem}>
          <MoveItem coins={10000} title="Зови друзей" />
        </BackCard>

        <Subtitle title="Активные" className={styles.active} />

        <BackCard className={styles.farmList}>
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Присоединиться в сквад" />
          <MoveItem coins={10000} title="Подпишись на канал" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Присоединиться в сквад" />
          <MoveItem coins={10000} title="Подпишись на канал" />
        </BackCard>
      </div>
    </LayoutContent>
  )
}
