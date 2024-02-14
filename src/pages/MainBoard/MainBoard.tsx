import { Layout, FeatureTab, EnergyRemain, ActionButton } from "shared/ui";
import { BalanceAmount, FeatureNavigation, GoldLeagueLink } from "features";
import styles from "./MainBoard.module.css";
import { ROUTES } from "shared/consts";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTelegram } from "shared/api";
import { MainCoin } from "./ui";

export const MainBoard = () => {
  const telegram = useTelegram();

  const [balance, setBalance] = useState(Math.floor(Math.random() * 10000000));
  const [energy, setEnergy] = useState(5000);

  const onClickCoin = () => {
    if (energy <= 0) {
      console.log("No more energy!");

      return;
    }

    setBalance((prevValue) => prevValue + 1);
    setEnergy((prevValue) => prevValue - 1);
  };

  useEffect(() => {
    if (!telegram) return;

    telegram.expand();
    telegram.setHeaderColor("#fff");
    telegram.setBackgroundColor("#996bff");
  }, [telegram]);

  return (
    <Layout>
      <Layout.Content>
        <Link to={ROUTES.ENTER_SQUAD} className="mb-11 block w-full">
          <ActionButton
            variant="primary"
            message="Войти в Сквад"
            onClick={() => false}
          />
        </Link>

        <div className={styles.moneyWrapper}>
          <BalanceAmount amount={balance} />

          <GoldLeagueLink />
        </div>

        <div className="mb-[60px]">
          <MainCoin onClick={onClickCoin} />
          <svg
            width="390"
            height="304"
            viewBox="0 0 390 304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "blur(45.7px)", position: "absolute" }}
            className={styles.svg}
          >
            <g filter="url(#filter0_f_2_1163)">
              <circle cx="200.5" cy="304.5" r="212.5" fill="#D9D9D9" />
              <circle
                cx="200.5"
                cy="304.5"
                r="212.5"
                fill="url(#paint0_radial_2_1163)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_2_1163"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200.5 157.428) rotate(90) scale(319.868 196.781)"
              >
                <stop stopColor="#CCB5FF" />
                <stop offset="1" stopColor="#996BFF" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            width="390"
            height="304"
            viewBox="0 0 390 304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "blur(45.7px)", position: "absolute" }}
            className={styles.svg}
          >
            <g filter="url(#filter0_f_2_1162)">
              <circle cx="200.5" cy="304.5" r="212.5" fill="#D9D9D9" />
              <circle
                cx="200.5"
                cy="304.5"
                r="212.5"
                fill="url(#paint0_radial_2_1162)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_2_1162"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200.5 157.428) rotate(90) scale(319.868 196.781)"
              >
                <stop stopColor="#CCB5FF" />
                <stop offset="1" stopColor="#996BFF" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            width="390"
            height="662"
            viewBox="0 0 390 662"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "blur(225px)", position: "absolute" }}
            className={styles.svg}
          >
            <g filter="url(#filter0_f_2_1161)">
              <circle cx="200.5" cy="662.5" r="212.5" fill="#D9D9D9" />
              <circle
                cx="200.5"
                cy="662.5"
                r="212.5"
                fill="url(#paint0_radial_2_1161)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_2_1161"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200.5 515.428) rotate(90) scale(319.868 196.781)"
              >
                <stop stopColor="#CCB5FF" />
                <stop offset="1" stopColor="#996BFF" />
              </radialGradient>
            </defs>
          </svg>

          <svg
            width="390"
            height="662"
            viewBox="0 0 390 662"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: " blur(225px)", position: "absolute" }}
            className={styles.svg}
          >
            <g filter="url(#filter0_f_2_1160)">
              <circle cx="200.5" cy="662.5" r="212.5" fill="#D9D9D9" />
              <circle
                cx="200.5"
                cy="662.5"
                r="212.5"
                fill="url(#paint0_radial_2_1160)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_2_1160"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200.5 515.428) rotate(90) scale(319.868 196.781)"
              >
                <stop stopColor="#CCB5FF" />
                <stop offset="1" stopColor="#996BFF" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className={styles.footer}>
          <div className={styles["resource-management"]}>
            {/*<LevelCounter />*/}

            <FeatureNavigation>
              <FeatureTab feature="Друзья" to={ROUTES.YOUR_FRIENDS} />

              <FeatureTab feature="Фарминг" to={ROUTES.FARM_COINS} />

              <FeatureTab feature="Бусты" to={ROUTES.GAME_BOOST} />
            </FeatureNavigation>
          </div>

          <EnergyRemain remain={energy} />
        </div>
      </Layout.Content>

      {/*<GlowCircle position="center" />*/}
    </Layout>
  );
};
