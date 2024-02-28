import { Layout } from 'shared/ui'
import { BalanceAmount, GoldLeagueLink, ChooseSquadButton, NavigationBar } from 'features'
import styles from './styles.module.scss'
import { useEffect } from 'react'
import { useTelegram, useTelegramUserId } from 'entities/telegram'
import { MainCoin } from 'widgets/MainCoin'
import { useGetUser, useTap } from 'shared/openApi'
import { useQueryClient } from '@tanstack/react-query'

export const MainBoard = () => {
  const queryClient = useQueryClient()
  const telegram = useTelegram()
  const user_id = useTelegramUserId()
  const { data: user, queryKey: userQueryKey } = useGetUser(user_id)
  const { mutate } = useTap()

  const onClickCoin = () => {
    if (!user) return

    if (user.energy <= 0) {
      console.log('No more energy!')

      return
    }

    mutate(
      { params: { user_id } },
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
    <Layout>
      <div className={styles.content}>
        <ChooseSquadButton />

        <div>
          <BalanceAmount amount={user?.balance ?? 0} />

          <GoldLeagueLink />
        </div>

        <MainCoin energyLeft={user?.energy ?? 0} totalEnergy={1000} onClick={onClickCoin} />

        <NavigationBar />
      </div>
    </Layout>
  )
}
