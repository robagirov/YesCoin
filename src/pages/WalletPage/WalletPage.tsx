import { BalanceAmount, NavigationBar } from "features";
import {
  ActionButton,
  GlowCircle,
  GlowCirclePositions,
  RouterLink,
  ToggleSwitch,
  ViewMarkup,
} from "shared/ui";
import styles from "./WalletPage.module.css";

export const WalletPage = () => {
  return (
    <ViewMarkup>
      <NavigationBar>
        <RouterLink to="/" text="Главня" />

        <RouterLink to="/market" text="Маркет" />
      </NavigationBar>

      <ActionButton variant="primary" message="Connect TON wallet" />

      <div className={styles.middleContainer}>
        <div className={styles.box}>
          <BalanceAmount />

          <ToggleSwitch />
        </div>

        <div />
      </div>

      <GlowCircle position={GlowCirclePositions.bottom} />
    </ViewMarkup>
  );
};
