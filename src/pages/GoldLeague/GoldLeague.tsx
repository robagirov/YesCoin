import {
  BackCard,
  ListItem,
  PageTitle,
  SwitchBar,
  GlowCircle,
  Layout,
  EnergyRemain,
  ToggleSwitch,
} from "shared/ui";
import { useState } from "react";
import { squadTopList } from "./model/mock.ts";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/consts";
import styles from "./styles.module.scss";

export const GoldLeague = () => {
  const [activeType, setActiveType] = useState(0);
  const [activePeriod, setActivePeriod] = useState(0);

  return (
    <Layout>
      <Layout.Content>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>

          <div className={styles.list}>
            <PageTitle title="Золотая Лига" className={styles.title} />

            <p className={styles.counter}>929,324 / 2M</p>

            <EnergyRemain remain={5000} className={styles.remain} />

            <ToggleSwitch
              className={styles.switch}
              activeIndex={activePeriod}
              options={["Miners", "Squads"]}
              setActiveIndex={setActivePeriod}
            />

            <div>
              <SwitchBar
                options={["День", "Неделя"]}
                activeIndex={activeType}
                setActiveIndex={setActiveType}
              />

              <BackCard className={styles.back}>
                {squadTopList?.[activeType]?.map((person, index) => (
                  <ListItem
                    key={index}
                    number={person.number}
                    title={person.title}
                    subtitle={person.subtitle}
                  />
                ))}
              </BackCard>
            </div>
          </div>
        </div>
      </Layout.Content>

      <GlowCircle position="middle-top" className={styles.glow} />
    </Layout>
  );
};
