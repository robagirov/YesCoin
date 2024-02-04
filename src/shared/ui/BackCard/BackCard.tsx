import { ReactNode } from "react";
import styles from "./BackCard.module.css";

interface BackCardProps {
  children: ReactNode;
}

export const BackCard = ({ children }: BackCardProps) => {
  return <div className={styles.card}>{children}</div>;
};
