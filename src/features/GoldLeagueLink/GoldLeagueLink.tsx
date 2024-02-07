import styles from "./GoldLeagueLink.module.css";
import GoldCircle from "shared/icon/GoldCircle.svg?react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface GoldLeagueLinkProps {
  isSmall?: boolean;
}

export const GoldLeagueLink = ({ isSmall }: GoldLeagueLinkProps) => {
  return (
    <div className={styles.wrapper}>
      <GoldCircle />

      <Link
        to="/golden-league"
        className={clsx(styles.sign, {
          [styles.small]: isSmall,
        })}
      >
        Gold
      </Link>
    </div>
  );
};
