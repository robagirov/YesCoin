import "./reset.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MainPage,
  WalletPage,
  MarketPage,
  YourFriends,
  GoldenLeague,
  FarmingCoins,
  BoostsSelect,
} from "pages";
import { ROUTES } from "./shared/consts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.WALLET} element={<WalletPage />} />
        <Route path={ROUTES.MARKET} element={<MarketPage />} />
        <Route path={ROUTES.GOLDEN_LEAGUE} element={<GoldenLeague />} />
        <Route path={ROUTES.GOLDEN_LEAGUE} element={<GoldenLeague />} />
        <Route path={ROUTES.FRIENDS} element={<YourFriends />} />
        <Route path={ROUTES.FARMING} element={<FarmingCoins />} />
        <Route path={ROUTES.BOOSTERS} element={<BoostsSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
