import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <div className="z-10 pb-8 h-full flex flex-col justify-end">{children}</div>
  );
};
