import { ReactNode } from "react";
import styles from "./Layout.module.css";
import clsx from "clsx";
import { Content } from "./Content";

interface ViewMarkupProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: ViewMarkupProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

Layout.Content = Content;
