import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ROUTES } from 'shared/consts'
import { PageTransition } from 'shared/ui'
import { MainBoard } from './MainBoard'
import { CryptoHolder } from './CryptoHolder'
import { TradeMarket } from './TradeMarket'
import { Leagues } from './Leagues'
import { YourFriends } from './YourFriends'
import { FarmCoins } from './FarmCoins'
import { GameBoosts } from './GameBoosts'
import { PartyKings } from './PartyKings'
import { YesCoin } from './YesCoin'
import { EnterSquad } from './EnterSquad'
import { SquadName } from './SquadName'
import { JoinSquad } from './JoinSquad'
import { SquadWork } from './SquadWork'
import { MajorDigits } from './MajorDigits'

export function PageRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path={ROUTES.MAIN_BOARD}
          element={
            <PageTransition>
              <MainBoard />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.CRYPTO_HOLDER}
          element={
            <PageTransition>
              <CryptoHolder />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.TRADE_MARKET}
          element={
            <PageTransition>
              <TradeMarket />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.LEAGUES}
          element={
            <PageTransition>
              <Leagues />
            </PageTransition>
          }
        />
        <Route
          path={`${ROUTES.YOUR_FRIENDS}/:id?`}
          element={
            <PageTransition>
              <YourFriends />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.FARM_COINS}
          element={
            <PageTransition>
              <FarmCoins />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.GAME_BOOST}
          element={
            <PageTransition>
              <GameBoosts />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.PARTY_KINGS}
          element={
            <PageTransition>
              <PartyKings />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.YES_COIN}
          element={
            <PageTransition>
              <YesCoin />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.ENTER_SQUAD}
          element={
            <PageTransition>
              <EnterSquad />
            </PageTransition>
          }
        />
        <Route
          path={`${ROUTES.SQUAD_NAME}/:id`}
          element={
            <PageTransition>
              <SquadName />
            </PageTransition>
          }
        />
        <Route
          path={`${ROUTES.JOIN_SQUAD}/:id`}
          element={
            <PageTransition>
              <JoinSquad />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.SQUAD_WORK}
          element={
            <PageTransition>
              <SquadWork />
            </PageTransition>
          }
        />
        <Route
          path={ROUTES.MAJOR_DIGITS}
          element={
            <PageTransition>
              <MajorDigits />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
