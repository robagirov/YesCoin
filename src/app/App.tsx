import './styles/index.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  MainBoard,
  TradeMarket,
  CryptoHolder,
  YourFriends,
  GoldLeague,
  FarmCoins,
  GameBoosts,
  PartyKings,
  YesCoin,
  EnterSquad,
  SquadName,
  JoinSquad,
  SquadWork,
  MajorDigits,
} from 'pages'
import { ROUTES } from 'shared/consts'
import { QueryProvider, TelegramProvider } from 'app/providers'
import eruda from 'eruda'

function App() {
  eruda.init()

  console.log('test')

  return (
    <QueryProvider>
      <Router>
        <TelegramProvider>
          <Routes>
            <Route path={ROUTES.MAIN_BOARD} element={<MainBoard />} />
            <Route path={ROUTES.CRYPTO_HOLDER} element={<CryptoHolder />} />
            <Route path={ROUTES.TRADE_MARKET} element={<TradeMarket />} />
            <Route path={ROUTES.GOLD_LEAGUE} element={<GoldLeague />} />
            <Route path={ROUTES.YOUR_FRIENDS} element={<YourFriends />} />
            <Route path={ROUTES.FARM_COINS} element={<FarmCoins />} />
            <Route path={ROUTES.GAME_BOOST} element={<GameBoosts />} />
            <Route path={ROUTES.PARTY_KINGS} element={<PartyKings />} />
            <Route path={ROUTES.YES_COIN} element={<YesCoin />} />
            <Route path={ROUTES.ENTER_SQUAD} element={<EnterSquad />} />
            <Route path={ROUTES.SQUAD_NAME} element={<SquadName />} />
            <Route path={ROUTES.JOIN_SQUAD} element={<JoinSquad />} />
            <Route path={ROUTES.SQUAD_WORK} element={<SquadWork />} />
            <Route path={ROUTES.MAJOR_DIGITS} element={<MajorDigits />} />
          </Routes>
        </TelegramProvider>
      </Router>
    </QueryProvider>
  )
}

export default App
