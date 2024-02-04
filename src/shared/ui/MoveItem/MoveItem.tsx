import styles from "./MoveItem.module.css";

export const MoveItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.picture} />

      <div className={styles.info}>
        <span className={styles.infoTitle}>Пригласить 10 друзей</span>
        <span className={styles.infoCount}>+100,000</span>
      </div>
    </div>
  );
};
