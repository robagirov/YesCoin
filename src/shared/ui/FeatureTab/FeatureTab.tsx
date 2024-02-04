import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import WhiteCircle from "shared/icon/WhiteCircle.svg?react";

import styles from "./FeatureTab.module.css";

interface FeatureTabProps {
  feature: string;
  to: LinkProps["to"];
}

export const FeatureTab: FC<FeatureTabProps> = ({ feature, to }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <WhiteCircle />

        <Link className={styles.featureTab} to={to}>
          {feature}
        </Link>
      </div>
    </>
  );
};
