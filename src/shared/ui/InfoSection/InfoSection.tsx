import clsx from "clsx";

import styles from "./styles.module.scss";

interface InfoSectionProps {
  message: string;
  className?: string;
}

export const InfoSection = ({ message, className }: InfoSectionProps) => {
  return (
    <p
      className={clsx(
        styles.message,
        "w-full text-center 70 mx-auto",
        className,
      )}
    >
      {message}
    </p>
  );
};
