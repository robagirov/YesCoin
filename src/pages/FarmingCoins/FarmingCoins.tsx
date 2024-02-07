import styles from "./FarmingCoins.module.css";
import {
  BackCard,
  InfoTrigger,
  MoveItem,
  PageTitle,
  ViewMarkup,
  Subtitle,
  GlowCircle,
  GlowCirclePositions,
} from "shared/ui";

export const FarmingCoins = () => {
  return (
    <ViewMarkup>
      <div className={styles.content}>
        <div className={styles.head}>
          <PageTitle title="Earn more coins" />

          <InfoTrigger text="Полная инструкция" />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <BackCard>
            <MoveItem coins={10000} title="Пригласи 10 друзей" />
          </BackCard>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Subtitle title="Активные" />
        </div>

        <BackCard height={290}>
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
          <MoveItem coins={10000} title="Пригласи 10 друзей" />
        </BackCard>
      </div>

      <GlowCircle position={GlowCirclePositions.bottom} />
    </ViewMarkup>
  );
};
