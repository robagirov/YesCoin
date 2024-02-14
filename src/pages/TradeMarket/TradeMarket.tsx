import { NavigationBar } from "features";
import { ActionButton, GlowCircle, RouterLink, Layout } from "shared/ui";
import styles from "./TradeMarket.module.css";
import { ROUTES } from "shared/consts";
import clsx from "clsx";

export const TradeMarket = () => {
  return (
    <Layout>
      <Layout.Content>
        <NavigationBar>
          <RouterLink to={ROUTES.MAIN_BOARD} text="Главная" />
          <RouterLink to={ROUTES.CRYPTO_HOLDER} text="Кошелек" />
        </NavigationBar>

        <ActionButton
          variant="primary"
          message="Connect TON wallet"
          onClick={() => false}
        />

        <h1 className={styles.header}>Market</h1>

        <div className={clsx(styles.list, "-mb-8")}>
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
      </Layout.Content>

      <GlowCircle position="bottom" className="opacity-70" />
    </Layout>
  );
};
