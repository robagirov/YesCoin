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

import MainCoin from "shared/icon/MainCoin.svg?react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTelegram } from "shared/api";

export const MainBoard = () => {
  const telegram = useTelegram();

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
          <BalanceAmount />

          <GoldLeagueLink />
        </div>

        <MainCoin className={styles.coin} />

        <div className={styles.footer}>
          <div className={styles["resource-management"]}>
            <LevelCounter />

            <FeatureNavigation>
              <FeatureTab feature="Друзья" to={ROUTES.YOUR_FRIENDS} />

              <FeatureTab feature="Фарминг" to={ROUTES.FARM_COINS} />

              <FeatureTab feature="Бусты" to={ROUTES.GAME_BOOST} />
            </FeatureNavigation>
          </div>

          <EnergyRemain />
        </div>
      </div>

      <GlowCircle position="center" />
    </ViewMarkup>
  );
};
