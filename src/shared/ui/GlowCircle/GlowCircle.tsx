import styles from "./GlowCircle.module.css";
import clsx from "clsx";
import { GlowCirclePositions, GlowCircleProps } from "./types";

export const GlowCircle = ({ position, isTriple }: GlowCircleProps) => {
  return (
    <div
      className={clsx(styles.glowCircle, {
        [styles.top]: position === GlowCirclePositions.top,
        [styles.center]: position === GlowCirclePositions.center,
        [styles.bottom]: position === GlowCirclePositions.bottom,
      })}
    >
      <div className={styles.glow} />

      <div className={styles.glow} />

      {isTriple && <div className={styles.glow} />}
    </div>
  );
};
