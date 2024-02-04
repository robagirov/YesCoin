import styles from "./GoldLeagueLink.module.css";
import GoldCircle from "shared/icon/GoldCircle.svg?react";
import { Link } from "react-router-dom";

export const GoldLeagueLink = () => {
  return (
    <div className={styles.wrapper}>
      <GoldCircle />

      <Link to="/golden-league" className={styles.sign}>
        Gold
      </Link>
    </div>
  );
};
