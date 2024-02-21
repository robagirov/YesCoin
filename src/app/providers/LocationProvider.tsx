import { ReactNode, useCallback, useEffect } from "react";
import { useIsHomePage } from "shared/hooks";
import { useTelegram } from "shared/api";
import { useNavigate } from "react-router-dom";

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const navigate = useNavigate();

  const isHomePage = useIsHomePage();
  const telegram = useTelegram();

  const handleBack = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    if (!telegram) return;

    if (isHomePage) {
      telegram.BackButton.hide();

      return;
    }

    telegram.BackButton.show();
  }, [telegram, isHomePage]);

  useEffect(() => {
    telegram.BackButton.onClick(handleBack);

    return () => {
      telegram.BackButton.offClick(handleBack);
    };
  }, [handleBack, telegram.BackButton]);

  return children;
};
