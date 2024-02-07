import { ReactNode } from "react";
import clsx from "clsx";

interface BackCardProps {
  children: ReactNode;
  height?: number;
  className?: string;
}

export const BackCard = ({ children, height, className }: BackCardProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-5 p-5 rounded-md bg-[rgba(243,243,245,0.1)] overflow-y-auto",
        className,
      )}
      style={{ height: height }}
    >
      {children}
    </div>
  );
};
