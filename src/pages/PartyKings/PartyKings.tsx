import { GlowCircle, PageTitle, Layout, BackCard, InfoSection, ActionButton, ListItem } from 'shared/ui'
import styles from './styles.module.scss'
import clsx from 'clsx'

export const PartyKings = () => {
  return (
    <Layout>
      <Layout.Content>
        <div className={clsx(styles.header, 'flex flex-col items-center')}>
          <PageTitle title="Yes-топ" />

          <InfoSection message="Приглашай больше друзей чтобы попасть сюда" className={styles.info} />
        </div>

        <ActionButton className="mb-4" variant="primary" message="Пригласить друзей" onClick={() => false} />

        <BackCard className={clsx(styles.topChartList, 'rounded-b-none')}>
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
        </BackCard>
      </Layout.Content>

      <GlowCircle position="top" isTriple />
    </Layout>
  )
}
