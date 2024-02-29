import { BalanceAmount, GoldLeagueLink, ChooseSquadButton, NavigationBar } from 'features'
import { useEffect } from 'react'
import { useTelegram, useTelegramUserId } from 'entities/telegram'
import { MainCoin } from 'widgets/MainCoin'
import { useGetUser, useTap } from 'shared/openApi'
import { useQueryClient } from '@tanstack/react-query'
import styles from './styles.module.scss'

export function MainBoard() {
  const queryClient = useQueryClient()
  const telegram = useTelegram()
  const userId = useTelegramUserId()
  const { data: user, queryKey: userQueryKey } = useGetUser(userId)
  const { mutate } = useTap()

  const onClickCoin = () => {
    if (!user) return

    if (user.energy <= 0) {
      console.log('No more energy!')

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

      <MainCoin energyLeft={user?.energy ?? 0} totalEnergy={1000} onClick={onClickCoin} />

      <NavigationBar />
    </div>
  )
}
