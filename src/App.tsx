import "./reset.css";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MainPage,
  WalletPage,
  MarketPage,
  YourFriends,
  GoldenLeague,
  FarmingCoins,
  BoostsSelect,
  PartyKings,
  YesCoin,
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
        <Route path={ROUTES.FRIENDS} element={<YourFriends />} />
        <Route path={ROUTES.FARMING} element={<FarmingCoins />} />
        <Route path={ROUTES.BOOSTERS} element={<BoostsSelect />} />
        <Route path={ROUTES.BOOSTERS} element={<BoostsSelect />} />
        <Route path={ROUTES.PARTY_KINGS} element={<PartyKings />} />
        <Route path={ROUTES.YES_COIN} element={<YesCoin />} />
      </Routes>
    </Router>
  );
}

export default App;
