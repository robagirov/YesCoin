import { ReactNode, useEffect } from "react";
import { useIsHomePage } from "shared/hooks";
import { useTelegram } from "shared/api";

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const isHomePage = useIsHomePage();
  const telegram = useTelegram();

  useEffect(() => {
    if (!telegram) return;

    telegram.ready();

    if (isHomePage) return;

    telegram.BackButton.show();
  }, [telegram, isHomePage]);

  return <>{children}</>;
};
