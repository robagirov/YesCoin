import styles from "./Subtitle.module.css";
import clsx from "clsx";

interface SubtitleProps {
  title: string;
  className?: string;
}

export const Subtitle = ({ title, className }: SubtitleProps) => {
  return <h2 className={clsx(styles.subtitle, className)}>{title}</h2>;
};
