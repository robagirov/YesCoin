import styles from "./FarmingCoins.module.css";
import {
  BackCard,
  InfoTrigger,
  MoveItem,
  PageTitle,
  ViewMarkup,
} from "shared/ui";

export const FarmingCoins = () => {
  return (
    <ViewMarkup>
      <div className={styles.content}>
        <div className={styles.head}>
          <PageTitle>Earn more coins</PageTitle>

          <InfoTrigger>Полная инструкция</InfoTrigger>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <BackCard>
            <MoveItem />
          </BackCard>
        </div>

        <div>Активные</div>
      </div>
    </ViewMarkup>
  );
};
