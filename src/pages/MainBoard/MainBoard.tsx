import {
  Layout,
  GlowCircle,
  FeatureTab,
  EnergyRemain,
  ActionButton,
} from "shared/ui";
import { BalanceAmount, FeatureNavigation, GoldLeagueLink } from "features";
import styles from "./MainBoard.module.css";
import { ROUTES } from "shared/consts";
import WalletIcon from "./assets/wallet.svg?react";

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

          <EnergyRemain remain={energy} />
        </div>
      </Layout.Content>

      <GlowCircle position="center" />
    </Layout>
  );
};
