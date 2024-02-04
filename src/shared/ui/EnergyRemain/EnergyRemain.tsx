import styles from "./EnergyRemain.module.css";

export const EnergyRemain = () => {
  return (
    <div className={styles.progress}>
      <meter className={styles.bar} value={75} max={100} />

      <div className={styles.pin} style={{ left: "75%" }} />
    </div>
  );
};
