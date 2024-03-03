import { ActionButton, BackCard, InfoSection, PageTitle, SquadItem, LayoutContent } from 'shared/ui'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import { getTelegramBotCreateSquadLink, useTelegram } from 'entities/Telegram'
import type { MouseEventHandler } from 'react'
import styles from './styles.module.scss'

export function EnterSquad() {
  const telegram = useTelegram()

  const joinSquadHandler: MouseEventHandler = () => {
    telegram.openTelegramLink(getTelegramBotCreateSquadLink())
  }

  return (
    <LayoutContent>
      <div className={styles.header}>
        <PageTitle title="Залетай в сквад" />

        <InfoSection message="Эти сквады активно набирают игроков Скажи Yes любому" />
      </div>

      <ActionButton
        variant="primary"
        onClick={joinSquadHandler}
        className={styles.button}
        message="Выбрать другой сквад"
      />

      <BackCard className={styles.squadList}>
        {Array.from({ length: 10 }, (_, k) => k).map((_, idx) => (
          <Link to={ROUTES.SQUAD_NAME} key={idx}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>
        ))}
      </BackCard>
    </LayoutContent>
  )
}
