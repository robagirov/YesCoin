import styles from "./NavigationBar.module.css";
import { FC, ReactNode } from "react";

export const NavigationBar: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.navigationBar}>{children}</div>;
};
