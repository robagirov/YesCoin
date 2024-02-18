import { ReactNode } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface ContentProps {
  children?: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <div
      className={clsx(styles.content, "z-10 h-full flex flex-col justify-end")}
    >
      {children}
    </div>
  );
};
