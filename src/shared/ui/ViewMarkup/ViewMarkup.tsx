import { FC, ReactNode } from "react";
import styles from "./ViewMarkup.module.css";

export const ViewMarkup: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
