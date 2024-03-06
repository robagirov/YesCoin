import {
  BackCard,
  ListItem,
  PageTitle,
  SwitchBar,
  EnergyRemain,
  ToggleSwitch,
  LayoutContent,
} from 'shared/ui'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import { squadTopList } from './model/mock.ts'
import styles from './styles.module.scss'

export function GoldLeague() {
  const [activeType, setActiveType] = useState(0)
  const [activePeriod, setActivePeriod] = useState(0)

  return (
    <LayoutContent>
      <div className={styles.wrapper}>
        <Link to={ROUTES.MAJOR_DIGITS}>
          <div className={styles.coiners}>
            <div className={styles.inner}>
              <div className={styles.coins}>
                <div className={styles.coin} />
                <div className={styles.coin} />
                <div className={styles.coin} />
              </div>

              <span>32,543,654 YesCoiners</span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <div className={styles.list}>
          <PageTitle title="Золотая Лига" className={styles.title} />

          <p className={styles.counter}>929,324 / 2M</p>

          <EnergyRemain remain={900} className={styles.remain} />

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

            <BackCard className={styles.back}>
              {squadTopList?.[activeType]?.map((person) => (
                <ListItem
                  key={person.number}
                  number={person.number}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              ))}
            </BackCard>
          </div>
        </div>
      </div>
    </LayoutContent>
  )
}
