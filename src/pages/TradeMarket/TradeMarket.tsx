import { NavigationBar } from "features";
import { ActionButton, GlowCircle, RouterLink, ViewMarkup } from "shared/ui";
import styles from "./TradeMarket.module.css";

export const TradeMarket = () => {
  return (
    <ViewMarkup>
      <NavigationBar>
        <RouterLink to="/" text="Главная" />
        <RouterLink to="/wallet" text="Кошелек" />
      </NavigationBar>

      <ActionButton
        variant="primary"
        message="Connect TON wallet"
        onClick={() => false}
      />

      <h1 className={styles.header}>Market</h1>

      <div className={styles.list}>
        {Array.from({ length: 23 }).map((_, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.picture} />

            <div className={styles.info}>
              <span className={styles.name}>text</span>
              <span className={styles.price}>$354</span>
            </div>
          </div>
        ))}
      </div>

      <GlowCircle position="bottom" />
    </ViewMarkup>
  );
};