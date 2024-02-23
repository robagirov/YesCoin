import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface NavigationBarProps {
  children: ReactNode;
}

export const NavigationBar = ({ children }: NavigationBarProps) => {
  return <div className={styles.navigationBar}>{children}</div>;
};
