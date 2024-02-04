import styles from "./GlowCircle.module.css";
import { FC } from "react";
import clsx from "clsx";
import { GlowCirclePositions, GlowCircleProps } from "./types";

export const GlowCircle: FC<GlowCircleProps> = ({ position }) => {
  return (
    <div
      className={clsx(styles.glowCircle, {
        [styles.top]: position === GlowCirclePositions.top,
        [styles.center]: position === GlowCirclePositions.center,
        [styles.bottom]: position === GlowCirclePositions.bottom,
      })}
    />
  );
};
