import styles from "./styles.module.scss";
import clsx from "clsx";

interface InfoTriggerProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const InfoTrigger = ({ text, onClick, className }: InfoTriggerProps) => {
  return (
    <p
      onClick={onClick}
      className={clsx(styles.subtitle, className, "text-center")}
    >
      {text}
    </p>
  );
};
