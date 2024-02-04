import styles from "./InfoTrigger.module.css";

interface InfoTriggerProps {
  children: string;
  onClick?: () => void;
}

export const InfoTrigger = ({ children, onClick }: InfoTriggerProps) => {
  return (
    <span onClick={onClick} className={styles.subtitle}>
      {children}
    </span>
  );
};
