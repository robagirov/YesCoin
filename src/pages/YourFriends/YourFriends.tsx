import { ActionButton, InfoTrigger, ViewMarkup } from "shared/ui";
import { PageTitle } from "shared/ui";

import styles from "./YourFriends.module.css";

export const YourFriends = () => {
  return (
    <ViewMarkup>
      <div className={styles["content"]}>
        <div className={styles["title-wrapper"]}>
          <PageTitle>Ваши друзья</PageTitle>

          <InfoTrigger>Как сделать 1М Коинов</InfoTrigger>
        </div>

        <div className={styles["to-leader"]}>
          <span style={{ textAlign: "left" }}>+0</span>
          <span>Топ 300 лидеров</span>
        </div>

        <div className={styles["subtitle"]}>Друзья</div>

        <div className={styles["friends-list"]} />

        <ActionButton variant="primary" message="Invite a fren" />
      </div>
    </ViewMarkup>
  );
};
