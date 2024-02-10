import clsx from "clsx";
import styles from "./EnergyRemain.module.css";

interface EnergyRemainProps {
  className?: string;
}

export const EnergyRemain = ({ className }: EnergyRemainProps) => {
  return (
    <div className={clsx(styles.progress, className)}>
      <meter className={styles.bar} value={75} max={100} />

      <div className={styles.pin} style={{ left: "75%" }} />
    </div>
  );
};
