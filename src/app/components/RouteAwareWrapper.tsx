import { ReactNode, useEffect } from "react";
import { useTelegram } from "shared/api";
import { useIsHomePage } from "shared/hooks";

interface RouteAwareWrapperProps {
  children: ReactNode;
}

export const RouteAwareWrapper = ({ children }: RouteAwareWrapperProps) => {
  const isHomePage = useIsHomePage();
  const telegram = useTelegram();

  useEffect(() => {
    if (!telegram) return;

    if (isHomePage) return;

    telegram.BackButton.show();
  }, [telegram, isHomePage]);

  return <>{children}</>;
};
