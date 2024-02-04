import { ReactNode } from "react";
import styles from "./BackCard.module.css";

interface BackCardProps {
  children: ReactNode;
  height?: number;
}

export const BackCard = ({ children, height }: BackCardProps) => {
  return (
    <div className={styles.card} style={{ height: height }}>
      {children}
    </div>
  );
};
