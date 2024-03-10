import { ActionButton, LayoutContent } from 'shared/ui'
import { getTelegramBotCreateSquadLink, useTelegram } from 'entities/Telegram'
import type { MouseEventHandler } from 'react'
import { Typography } from 'shared/ui/Typography'
import { SquadList } from 'features/sqaud-list/ui/SquadList.tsx'
import styles from './styles.module.scss'

export function EnterSquad() {
  const telegram = useTelegram()

  const joinSquadHandler: MouseEventHandler = () => {
    telegram.openTelegramLink(getTelegramBotCreateSquadLink())

    telegram.close()
  }

  return (
    <LayoutContent>
      <div className={styles.header}>
        <Typography variant="h2">Залетай в сквад</Typography>

        <Typography variant="h6" color="gray" align="center">
          Эти сквады активно набирают игроков {'\n'} Скажи Yes любому
        </Typography>
      </div>

      <ActionButton
        variant="primary"
        onClick={joinSquadHandler}
        className={styles.button}
        message="Выбрать другой сквад"
      />

      <SquadList />
    </LayoutContent>
  )
}
