import {
  ActionButton,
  EnergyRemain,
  FeatureTab,
  GlowCircle,
  RouterLink,
  ViewMarkup,
} from "shared/ui";
import {
  BalanceAmount,
  FeatureNavigation,
  GoldLeagueLink,
  NavigationBar,
} from "features";
import styles from "./MainBoard.module.css";
import { ROUTES } from "shared/consts";
import { LevelCounter } from "entities";

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
    <ViewMarkup>
      <NavigationBar>
        <RouterLink to={ROUTES.CRYPTO_HOLDER} text="Кошелекк" />
        <RouterLink to={ROUTES.TRADE_MARKET} text="Маркет" />
      </NavigationBar>

      <Link to={ROUTES.ENTER_SQUAD}>
        <ActionButton
          variant="primary"
          message="Войти в Сквад"
          onClick={() => false}
        />
      </Link>

      <div className={styles.content}>
        <div className={styles.moneyWrapper}>
          <BalanceAmount amount={balance} />

          <GoldLeagueLink />
        </div>

        <MainCoin onClick={onClickCoin} />

        <div className={styles.footer}>
          <div className={styles["resource-management"]}>
            <LevelCounter />

            <FeatureNavigation>
              <FeatureTab feature="Друзья" to={ROUTES.YOUR_FRIENDS} />

              <FeatureTab feature="Фарминг" to={ROUTES.FARM_COINS} />

              <FeatureTab feature="Бусты" to={ROUTES.GAME_BOOST} />
            </FeatureNavigation>
          </div>

          <EnergyRemain remain={energy} />
        </div>
      </div>

      <GlowCircle position="center" />
    </ViewMarkup>
  );
};
