import { ListBlock, NumberedItem, SwitchBar, ToggleSwitch, LayoutContent } from 'shared/ui'
import { useState } from 'react'
import { YesCoiners } from 'features/yes-coiners'
import { LeagueProgress } from 'widgets/LeagueProgress'
import { squadTopList } from './model/mock.ts'
import styles from './styles.module.scss'

export function Leagues() {
  const [activeType, setActiveType] = useState(0)
  const [activePeriod, setActivePeriod] = useState(0)

  return (
    <LayoutContent>
      <div className={styles.wrapper}>
        <YesCoiners />

        <LeagueProgress />

        <div className={styles.list}>
          <ToggleSwitch
            className={styles.switch}
            activeIndex={activePeriod}
            options={['Игроки', 'Сквады']}
            setActiveIndex={setActivePeriod}
          />

          <div>
            <SwitchBar
              options={['День', 'Неделя']}
              activeIndex={activeType}
              setActiveIndex={setActiveType}
            />

            <ListBlock className={styles.back}>
              {squadTopList?.[activeType]?.map((person) => (
                <NumberedItem
                  key={person.number}
                  number={person.number}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              ))}
            </ListBlock>
          </div>
        </div>
      </div>
    </LayoutContent>
  )
}
