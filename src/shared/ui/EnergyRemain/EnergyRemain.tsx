import clsx from "clsx";
import styles from "./EnergyRemain.module.css";

interface EnergyRemainProps {
  remain: number;
  className?: string;
}

export const EnergyRemain = ({ remain, className }: EnergyRemainProps) => {
  return (
    <div className={clsx(styles.progress, className)}>
      <meter className={styles.bar} value={remain} max={5500} />

      <div
        className={styles.pin}
        style={{ left: `${(remain / 5500) * 100}%` }}
      />
    </div>
  );
};
