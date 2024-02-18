import styles from "./styles.module.scss";
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

          <BackCard className={styles.topItem}>
            <MoveItem coins={10000} title="Пригласи 10 друзей" />
          </BackCard>

          <Subtitle title="Активные" className={styles.active} />

          <BackCard className={styles.farmList}>
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
