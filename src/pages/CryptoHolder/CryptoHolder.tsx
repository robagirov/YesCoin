import {
  ActionButton,
  GlowCircle,
  RouterLink,
  ToggleSwitch,
  ViewMarkup,
} from "shared/ui";
import { BalanceAmount, NavigationBar } from "features";
import styles from "./CryptoHolder.module.css";
import { useState } from "react";

export const CryptoHolder = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ViewMarkup>
      <NavigationBar>
        <RouterLink to="/" text="Главня" />

        <RouterLink to="/market" text="Маркет" />
      </NavigationBar>

      <ActionButton
        variant="primary"
        message="Connect TON wallet"
        onClick={() => false}
      />

      <div className={styles.middleContainer}>
        <div className={styles.box}>
          <BalanceAmount />

          <ToggleSwitch
            options={["Депозит", "Вывод"]}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        <div />
      </div>

      <GlowCircle position="bottom" />
    </ViewMarkup>
  );
};