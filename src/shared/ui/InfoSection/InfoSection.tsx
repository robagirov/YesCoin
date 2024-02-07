import { ReactNode } from "react";

interface InfoSectionProps {
  children: ReactNode;
}

export const InfoSection = ({ children }: InfoSectionProps) => {
  return (
    <p className="text-center text-base font-medium leading-6 text-white text-opacity-70 w-3/4">
      {children}
    </p>
  );
};
