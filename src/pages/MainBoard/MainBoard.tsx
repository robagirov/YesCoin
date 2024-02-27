import { Layout, FeatureTab, EnergyRemain, ActionButton, GlowCircle } from 'shared/ui'
import { BalanceAmount, FeatureNavigation, GoldLeagueLink } from 'features'
import styles from './styles.module.scss'
import { ROUTES } from 'shared/consts'
import WalletIcon from './assets/wallet.svg?react'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useTelegram, useTelegramUserId } from 'shared/api'
import { MainCoin } from './ui'
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
    telegram.setBackgroundColor('#996bff')
  }, [telegram])

  return (
    <Layout>
      <Layout.Content>
        <Link to={ROUTES.ENTER_SQUAD} className={styles.actionButtonLink}>
          <ActionButton variant="primary" message="Войти в Сквад" onClick={() => false} />
        </Link>

        <div className={styles.moneyWrapper}>
          <BalanceAmount amount={user?.balance ?? 0} />

          <GoldLeagueLink />
        </div>

        <div className={styles.coin}>
          <MainCoin onClick={onClickCoin} />

          <GlowCircle position="center" className={styles.coinGlow} />
        </div>

        <div className={styles.footer}>
          <div className={styles.resources}>
            <Link to={ROUTES.TRADE_MARKET} className={styles.borderWrapper}>
              <div className={styles.pageButton}>
                <WalletIcon />
                <span className={styles.pageSign}>Кошелек</span>
              </div>
            </Link>

            <FeatureNavigation>
              <FeatureTab feature="Друзья" to={ROUTES.YOUR_FRIENDS} />
              <FeatureTab feature="Фарминг" to={ROUTES.FARM_COINS} />
              <FeatureTab feature="Бусты" to={ROUTES.GAME_BOOST} />
            </FeatureNavigation>
          </div>

          <EnergyRemain remain={user?.energy ?? 0} />
        </div>
      </Layout.Content>
    </Layout>
  )
}
