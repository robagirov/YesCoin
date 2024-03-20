import { BalanceAmount, ChooseSquadButton, NavigationBar } from 'features'
import { useEffect, useState } from 'react'
import { MainCoin } from 'widgets/MainCoin'
import { useGameControllerTap } from 'shared/openApi'
import { useQueryClient } from '@tanstack/react-query'
import { useTelegram, useTelegramUserId } from 'entities/Telegram'
import useWebSocket from 'react-use-websocket'
import { GamerLevel } from 'shared/ui/GamerLevel'
import styles from './styles.module.scss'
import { useGameConnection } from '../../shared/hooks/useGameConnection.ts'

const WS_URL = 'http://localhost:3000/game'
const MAX_ENERGY = 1000

export function MainBoard() {
  const queryClient = useQueryClient()
  const telegram = useTelegram()
  const userId = useTelegramUserId()

  const game = useGameConnection()


  // const onClickCoin = () => {
  //   if (!user) return
  //
  //   if (user.energy <= 0) {
  //     telegram.showAlert('You are not energy!')
  //
  //     return
  //   }
  //
  //   window.navigator.vibrate(10)
  //
  //   mutate(
  //     { params: { user_id: userId } },
  //     {
  //       onSuccess: (data) => {
  //         queryClient.setQueryData(userQueryKey, { ...user, ...data })
  //       },
  //     },
  //   )
  // }

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

      <button onClick={() => game.tap(userId)}>Click</button>

      <span>Energy left: {game.energy.toString()}</span>

      {/* <div className={styles.header}> */}
      {/*   <BalanceAmount amount={user?.balance ?? 0} /> */}

      {/*   <GamerLevel level="Pro" /> */}
      {/* </div> */}

      {/* <MainCoin */}
      {/*   energyLeft={lastJsonMessage?.energy ?? 0} */}
      {/*   totalEnergy={MAX_ENERGY} */}
      {/*   onClick={onClickCoin} */}
      {/* /> */}

      <NavigationBar />
    </div>
  )
}