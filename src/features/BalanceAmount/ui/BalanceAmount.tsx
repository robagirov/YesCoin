import styles from "./BalanceAmount.module.css";
import PurpleCircle from "shared/icon/PurpleCircle.svg?react";
import clsx from "clsx";

interface BalanceAmountProps {
  amount: number;
  className?: string;
}

export const BalanceAmount = ({ amount, className }: BalanceAmountProps) => {
  return (
    <div className={clsx(styles.balanceContainer, className)}>
      <PurpleCircle />

      <span className={styles.balanceAmount}>{amount.toLocaleString()}</span>
    </div>
  );
};
