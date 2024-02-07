import styles from "./ActionButton.module.css";
import clsx from "clsx";

interface ActionButtonProps {
  variant: "primary" | "secondary";
  message: string;
  className?: string;
}

export const ActionButton = ({
  variant = "primary",
  className,
  message,
}: ActionButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {message}
    </button>
  );
};
