import { ActionButton, GlowCircle, Layout, PageTitle } from "shared/ui";

import styles from "./styles.module.scss";

export const YesCoin = () => {
  return (
    <Layout>
      <Layout.Content>
        <div className={styles.buttons}>
          <ActionButton
            message="Войти"
            variant="secondary"
            onClick={() => false}
          />

          <ActionButton
            variant="secondary"
            onClick={() => false}
            message="Подписаться"
          />
        </div>

        <PageTitle title="YesCoin" className={styles.title} />

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.pic} />

            <div className={styles.content}>
              <span>Жми на монету</span>

              <span className={styles.label}>И получай YesCoin</span>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.pic} />

            <div className={styles.content}>
              <span>Прокачивай Буст</span>

              <span className={styles.label}>Чтобы получать монетка</span>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.pic} />

            <div className={styles.content}>
              <span>Соревнуйся</span>

              <span className={styles.label}>Дойди до лиги</span>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.pic} />

            <div className={styles.content}>
              <span>Присоединяйся к Скваду</span>

              <span className={styles.label}>Вместе больше</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <ActionButton
            message="Гайд"
            variant="secondary"
            onClick={() => false}
          />

          <ActionButton
            message="Хорошо"
            variant="primary"
            onClick={() => false}
          />
        </div>
      </Layout.Content>

      <GlowCircle position="bottom" className={styles.pageGlow} />
    </Layout>
  );
};
