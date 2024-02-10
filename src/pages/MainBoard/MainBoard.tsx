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

export const MainBoard = () => {
  return (
    <ViewMarkup>
      <NavigationBar>
        <RouterLink to="/wallet" text="Кошелек" />
        <RouterLink to="/market" text="Маркет" />
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
