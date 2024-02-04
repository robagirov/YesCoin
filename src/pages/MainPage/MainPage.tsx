import {
  ActionButton,
  EnergyRemain,
  FeatureTab,
  GlowCircle,
  GlowCirclePositions,
  RouterLink,
  ViewMarkup,
} from "shared/ui";
import {
  BalanceAmount,
  FeatureNavigation,
  GoldLeagueLink,
  NavigationBar,
} from "features";
import styles from "./MainPage.module.css";
import { ROUTES } from "shared/consts";
import { LevelCounter } from "entities";

import MainCoin from "shared/icon/MainCoin.svg?react";

export const MainPage = () => {
  return (
    <ViewMarkup>
      <NavigationBar>
        <RouterLink to="/wallet" text="Кошелек" />
        <RouterLink to="/market" text="Маркет" />
      </NavigationBar>

      <ActionButton variant="primary" message="Войти в Сквад" />

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
              <FeatureTab feature="Друзья" to={ROUTES.FRIENDS} />

              <FeatureTab feature="Фарминг" to={ROUTES.FARMING} />

              <FeatureTab feature="Бусты" to={ROUTES.BOOSTERS} />
            </FeatureNavigation>
          </div>

          <EnergyRemain />
        </div>
      </div>

      <GlowCircle position={GlowCirclePositions.center} />
    </ViewMarkup>
  );
};
