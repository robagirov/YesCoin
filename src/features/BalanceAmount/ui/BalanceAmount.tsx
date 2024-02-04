import styles from "./BalanceAmount.module.css";
import PurpleCircle from "shared/icon/PurpleCircle.svg?react";
import { generateRandomNumber } from "../lib/generateRandomNumber";

export const BalanceAmount = () => {
  const randomFormattedNumber = generateRandomNumber();

  return (
    <div className={styles.balanceContainer}>
      <PurpleCircle />

      <span className={styles.balanceAmount}>{randomFormattedNumber}</span>
    </div>
  );
};
