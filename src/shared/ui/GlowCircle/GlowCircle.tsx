import styles from "./GlowCircle.module.css";
import clsx from "clsx";

interface GlowCircleProps {
  position: "top" | "bottom" | "center" | "middle-top" | "double-top";
  className?: string;
}

export const GlowCircle = ({ position, className }: GlowCircleProps) => {
  return (
    <div
      className={clsx(styles.glow, className, {
        [styles.top]: position === "top",
        [styles.bottom]: position === "bottom",
        [styles.center]: position === "center",
        [styles.doubleTop]: position === "double-top",
        [styles.middleTop]: position === "middle-top",
      })}
    />
  );
};
