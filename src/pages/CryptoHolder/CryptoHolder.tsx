import { Layout, GlowCircle, RouterLink, ToggleSwitch, ActionButton } from 'shared/ui'
import { BalanceAmount, NavigationBar } from 'features'
import styles from './styles.module.scss'
import { useState } from 'react'
import { ROUTES } from 'shared/consts'

export const CryptoHolder = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Layout>
      <Layout.Content>
        <div className={styles.bar}>
          <NavigationBar>
            <RouterLink to={ROUTES.MAIN_BOARD} text="Главня" />

            <RouterLink to={ROUTES.TRADE_MARKET} text="Маркет" />
          </NavigationBar>
        </div>

        <div className={styles.button}>
          <ActionButton variant="primary" message="Connect TON wallet" onClick={() => false} />
        </div>

        <div className={styles.middle}>
          <BalanceAmount amount={5000000} />

          <ToggleSwitch options={['Депозит', 'Вывод']} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </Layout.Content>

      <GlowCircle position="bottom" className={styles.glow} />
    </Layout>
  )
}
