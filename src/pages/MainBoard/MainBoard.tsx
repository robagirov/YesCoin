import { BalanceAmount, GoldLeagueLink, ChooseSquadButton, NavigationBar } from 'features'
import { useEffect } from 'react'
import { MainCoin } from 'widgets/MainCoin'
import { useGetUser, useTap } from 'shared/openApi'
import { useQueryClient } from '@tanstack/react-query'
import { useTelegram, useTelegramUserId } from 'entities/Telegram'
import useWebSocket from 'react-use-websocket'
import styles from './styles.module.scss'

const WS_URL = 'ws://yestoken.space:8000/game/ws/'

export function MainBoard() {
  const queryClient = useQueryClient()
  const telegram = useTelegram()
  const userId = useTelegramUserId()
  const { data: user, queryKey: userQueryKey } = useGetUser(userId)
  const { mutate } = useTap()
  const { sendJsonMessage, lastJsonMessage } = useWebSocket<string>(`${WS_URL}${userId}`, {
    onOpen: () => sendJsonMessage({ event_method: 'energy_recovery' }),
  })

  const onClickCoin = () => {
    if (!user) return

    if (user.energy <= 0) {
      telegram.showAlert('You are not energy!')

      return
    }

    mutate(
      { params: { user_id: userId } },
      {
        onSuccess: (data) => {
          queryClient.setQueryData(userQueryKey, { ...user, ...data })
        },
      },
    )
  }

  useEffect(() => {
    if (!telegram) return

    telegram.expand()
  }, [telegram])

  return (
    <div className={styles.content}>
      <ChooseSquadButton />

      <div>
        <BalanceAmount amount={user?.balance ?? 0} />
        <GoldLeagueLink />
      </div>

      <MainCoin
        energyLeft={Number(lastJsonMessage?.replace('energy=', '')) || 0}
        totalEnergy={1000}
        onClick={onClickCoin}
      />

      <NavigationBar />
    </div>
  )
}
