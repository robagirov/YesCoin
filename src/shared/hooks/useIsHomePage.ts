import { useLocation } from "react-router-dom";
import { ROUTES } from "../consts";

export const useIsHomePage = (): boolean => {
  const location = useLocation();

  return location.pathname === ROUTES.MAIN_BOARD;
};
