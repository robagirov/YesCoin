import styles from "./FarmCoins.module.css";
import {
  BackCard,
  InfoTrigger,
  MoveItem,
  PageTitle,
  Layout,
  Subtitle,
  GlowCircle,
} from "shared/ui";

export const FarmCoins = () => {
  return (
    <Layout>
      <Layout.Content>
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
      </Layout.Content>

      <GlowCircle position="bottom" className="opacity-40" />
    </Layout>
  );
};
