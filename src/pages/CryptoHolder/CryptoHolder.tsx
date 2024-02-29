import { LayoutContent, ToggleSwitch, ActionButton } from 'shared/ui'
import { BalanceAmount } from 'features'
import styles from './styles.module.scss'
import { useState } from 'react'

export const CryptoHolder = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <LayoutContent>
      <div className={styles.button}>
        <ActionButton variant="primary" message="Connect TON wallet" onClick={() => false} />
      </div>

      <div className={styles.middle}>
        <BalanceAmount amount={5000000} />

        <ToggleSwitch
          options={['Депозит', 'Вывод']}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </LayoutContent>
  )
}
