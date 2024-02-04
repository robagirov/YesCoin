import { useState } from "react";
import styles from "./ToggleSwitch.module.css";
import clsx from "clsx";

export const ToggleSwitch = () => {
  const [active, setActive] = useState("deposit");

  const handleToggle = (value: string) => {
    setActive(value);
  };

  return (
    <div className={styles.container}>
      <button
        className={clsx(styles.button, {
          [styles.active]: active === "deposit",
        })}
        onClick={() => handleToggle("deposit")}
      >
        Deposit
      </button>

      <button
        className={clsx(styles.button, {
          [styles.active]: active === "withdraw",
        })}
        onClick={() => handleToggle("withdraw")}
      >
        Withdraw
      </button>
    </div>
  );
};
