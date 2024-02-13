import { ReactNode } from "react";
import styles from "./ViewMarkup.module.css";
import clsx from "clsx";

interface ViewMarkupProps {
  children: ReactNode;
  className?: string;
}

export const ViewMarkup = ({ children, className }: ViewMarkupProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
