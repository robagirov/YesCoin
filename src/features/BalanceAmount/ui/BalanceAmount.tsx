import styles from "./BalanceAmount.module.css";
import PurpleCircle from "shared/icon/PurpleCircle.svg?react";
import { generateRandomNumber } from "../lib/generateRandomNumber";
import clsx from "clsx";

interface BalanceAmountProps {
  className?: string;
}

export const BalanceAmount = ({ className }: BalanceAmountProps) => {
  const randomFormattedNumber = generateRandomNumber();

  return (
    <div className={clsx(styles.balanceContainer, className)}>
      <PurpleCircle />

      <span className={styles.balanceAmount}>{randomFormattedNumber}</span>
    </div>
  );
};
