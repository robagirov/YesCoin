import styles from "./ActionButton.module.css";
import { FC } from "react";
import clsx from "clsx";

export const ActionButton: FC<{
  variant: "primary" | "secondary";
  message: string;
}> = ({ variant = "primary", message }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {message}
    </button>
  );
};
