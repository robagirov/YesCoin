import styles from "./GlowCircle.module.css";
import clsx from "clsx";

interface GlowCircleProps {
  position: "top" | "bottom" | "center";
  isTriple?: boolean;
  className?: string;
}

export const GlowCircle = ({
  position,
  isTriple,
  className,
}: GlowCircleProps) => {
  return (
    <div
      className={clsx(
        "absolute left-0 w-full h-2/4",
        {
          [styles.top]: position === "top",
          [styles.center]: position === "center",
          [styles.bottom]: position === "bottom",
        },
        className,
      )}
    >
      <div className={styles.glow} />

      <div className={styles.glow} />

      {isTriple && <div className={styles.glow} />}
    </div>
  );
};
