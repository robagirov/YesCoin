import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useTelegram, useTelegramUserId } from 'entities/Telegram'
import useWebSocket from 'react-use-websocket'
import { GamerLevel } from 'shared/ui/GamerLevel'
import styles from './styles.module.scss'
import { useGameConnection } from '../../useGameConnection.ts'
import { useInitDataRaw } from '@tma.js/sdk-react'

export function MainBoard() {


  const initDataRaw = useInitDataRaw();
  const { data } = useQuery({ queryKey: ['player'], queryFn: () => fetch('https://yestoken.space/players/getById', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tgWebData: initDataRaw }) }).then(r => r.json()) })

  console.log('initDataRaw: ', initDataRaw);

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

  // TODO: ломает кликер
  // if (readyState !== ReadyState.OPEN) {
  //   return <Loader size={180} />
  // }

  return (
    data && <div className={styles.content}>

      <p>Username: {data?.username}</p>

      <button onClick={() => game.tap()}>Click</button>

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

    </div>
  )
}
