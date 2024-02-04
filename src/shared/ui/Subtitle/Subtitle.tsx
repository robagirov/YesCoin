import { ReactNode } from "react";
import styles from "./Subtitle.module.css";

interface SubtitleProps {
  children: ReactNode;
}

export const Subtitle = ({ children }: SubtitleProps) => {
  return <>{children}</>;
};
