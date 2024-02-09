import { ActionButton, BackCard, InfoTrigger, ViewMarkup } from "shared/ui";
import { PageTitle } from "shared/ui";

import styles from "./YourFriends.module.css";
import { FriendItem } from "shared/ui/FriendItem";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/consts";

export const YourFriends = () => {
  return (
    <ViewMarkup>
      <div className={styles["content"]}>
        <div className={styles["title-wrapper"]}>
          <PageTitle title="Ваши друзья" />

          <InfoTrigger text="Как сделать 1М Коинов" />
        </div>

        <div className={styles["to-leader"]}>
          <span style={{ textAlign: "left" }}>+0</span>
          <Link to={ROUTES.PARTY_KINGS}>Топ 300 лидеров</Link>
        </div>

        <div className={styles["subtitle"]}>Друзья</div>

        <div className="mb-5">
          <BackCard height={334}>
            <FriendItem name="Бизьяна Битзайн" />
            <FriendItem name="Бизьяна Битзайн" />
            <FriendItem name="Бизьяна Битзайн" />
            <FriendItem name="Бизьяна Битзайн" />
            <FriendItem name="Бизьяна Битзайн" />
            <FriendItem name="Бизьяна Битзайн" />
          </BackCard>
        </div>

        <ActionButton
          variant="primary"
          message="Invite a fren"
          onClick={() => false}
        />
      </div>
    </ViewMarkup>
  );
};
