import { BalanceAmount, ChooseSquadButton, GoldLeagueLink, NavigationBar } from 'features'
import { useEffect } from 'react'
import { MainCoin } from 'widgets/MainCoin'
import { useGetUser, useTap } from 'shared/openApi'
import { useQueryClient } from '@tanstack/react-query'
import { useTelegram, useTelegramUserId } from 'entities/Telegram'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { Loader } from 'shared/ui'
import styles from './styles.module.scss'

const WS_URL = 'wss://yestoken.space/game/ws/'
const MAX_ENERGY = 1000

export function MainBoard() {
  const queryClient = useQueryClient()
  const telegram = useTelegram()
  const userId = useTelegramUserId()
  const { data: user, queryKey: userQueryKey } = useGetUser(userId)
  const { mutate } = useTap()
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket<{ energy: number }>(
    `${WS_URL}${userId}`,
    {
      onOpen: () => sendJsonMessage({ event_method: 'energy_recovery' }),
    },
  )

  const onClickCoin = () => {
    if (!user) return

    if (user.energy <= 0) {
      telegram.showAlert('You are not energy!')

      return
    }

    window.navigator.vibrate(10)

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

  // TODO: ломает кликер
  // if (readyState !== ReadyState.OPEN) {
  //   return <Loader size={180} />
  // }

  return (
    <div className={styles.content}>
      <ChooseSquadButton />

      <div>
        <BalanceAmount amount={user?.balance ?? 0} />
        <GoldLeagueLink />
      </div>

      <MainCoin
        energyLeft={lastJsonMessage?.energy ?? 0}
        totalEnergy={MAX_ENERGY}
        onClick={onClickCoin}
      />

      <NavigationBar />
    </div>
  )
}
