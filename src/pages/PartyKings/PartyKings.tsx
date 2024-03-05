import { PageTitle, BackCard, InfoSection, ActionButton, ListItem, LayoutContent } from 'shared/ui'
import clsx from 'clsx'
import type { MouseEventHandler } from 'react'
import { getTelegramBotInviteLink, useTelegram } from 'entities/Telegram'
import styles from './styles.module.scss'

export function PartyKings() {
  const telegram = useTelegram()

  const inviteHandler: MouseEventHandler = () => {
    telegram.openTelegramLink(getTelegramBotInviteLink())

    telegram.close()
  }

  return (
    <LayoutContent>
      <div className={clsx(styles.header, 'flex flex-col items-center')}>
        <PageTitle title="Yes-топ" />

        <InfoSection message="Приглашай больше друзей чтобы попасть сюда" className={styles.info} />
      </div>

      <ActionButton
        className="mb-4"
        variant="primary"
        message="Пригласить друга"
        onClick={inviteHandler}
      />

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
    </LayoutContent>
  )
}
