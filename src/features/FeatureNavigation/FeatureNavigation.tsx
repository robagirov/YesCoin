import styles from "./FeatureNavigation.module.css";
import { FC, ReactNode } from "react";

interface FeatureNavigationProps {
  children: ReactNode;
}

export const FeatureNavigation: FC<FeatureNavigationProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
