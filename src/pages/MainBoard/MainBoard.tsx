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
            className="absolute left-0 top-0"
            width="390"
            height="662"
            viewBox="0 0 390 662"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7">
              <g filter="url(#filter0_f_2_1159)">
                <circle cx="200.5" cy="662.5" r="212.5" fill="#D9D9D9" />
                <circle
                  cx="200.5"
                  cy="662.5"
                  r="212.5"
                  fill="url(#paint0_radial_2_1159)"
                />
              </g>
              <g filter="url(#filter1_f_2_1159)">
                <circle cx="200.5" cy="662.5" r="212.5" fill="#D9D9D9" />
                <circle
                  cx="200.5"
                  cy="662.5"
                  r="212.5"
                  fill="url(#paint1_radial_2_1159)"
                />
              </g>
              <g filter="url(#filter2_f_2_1159)">
                <circle cx="200.5" cy="662.5" r="212.5" fill="#D9D9D9" />
                <circle
                  cx="200.5"
                  cy="662.5"
                  r="212.5"
                  fill="url(#paint2_radial_2_1159)"
                />
              </g>
              <g filter="url(#filter3_f_2_1159)">
                <circle cx="200.5" cy="662.5" r="212.5" fill="#D9D9D9" />
                <circle
                  cx="200.5"
                  cy="662.5"
                  r="212.5"
                  fill="url(#paint3_radial_2_1159)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_2_1159"
                x="-462"
                y="0"
                width="1325"
                height="1325"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_2_1159"
                />
              </filter>
              <filter
                id="filter1_f_2_1159"
                x="-462"
                y="0"
                width="1325"
                height="1325"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_2_1159"
                />
              </filter>
              <filter
                id="filter2_f_2_1159"
                x="-103.4"
                y="358.6"
                width="607.8"
                height="607.8"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="45.7"
                  result="effect1_foregroundBlur_2_1159"
                />
              </filter>
              <filter
                id="filter3_f_2_1159"
                x="-103.4"
                y="358.6"
                width="607.8"
                height="607.8"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="45.7"
                  result="effect1_foregroundBlur_2_1159"
                />
              </filter>
              <radialGradient
                id="paint0_radial_2_1159"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200.5 515.428) rotate(90) scale(319.868 196.781)"
              >
                <stop stopColor="#CCB5FF" />
                <stop offset="1" stopColor="#996BFF" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_2_1159"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200.5 515.428) rotate(90) scale(319.868 196.781)"
              >
                <stop stopColor="#CCB5FF" />
                <stop offset="1" stopColor="#996BFF" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_2_1159"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200.5 515.428) rotate(90) scale(319.868 196.781)"
              >
                <stop stopColor="#CCB5FF" />
                <stop offset="1" stopColor="#996BFF" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_2_1159"
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
