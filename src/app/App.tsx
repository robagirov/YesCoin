import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'shared/ui'
import { QueryProvider, TelegramProvider } from './providers'
import { io } from 'socket.io-client'
import { useState } from 'react'
import { GameConnectionContext } from '../useGameConnection.ts'
import { useTelegramUserId } from '../entities/Telegram'
import { PageRoutes } from './routes'
import { retrieveLaunchParams } from '@tma.js/sdk'

// const WS_URL = 'http://localhost:3500/'
const WS_URL = 'https://yestoken.space/game'

const { initDataRaw, initData } = retrieveLaunchParams();


const socket = io(WS_URL, {
  transports: ['websocket'],
  query: {
    tgWebData: initDataRaw
  }
});

function App() {

  const [energy, setEnergy] = useState(0n);

  socket.on('connect', () => {
    console.log('connected')
  })

  socket.on('connect_error', (err) => {
    console.error(err)
  })

  socket.on('energy', (data) => {
    setEnergy(BigInt(data))
  })

  return (
    <QueryProvider>
      <BrowserRouter>
        <GameConnectionContext.Provider value={{
          energy,
          tap: (userId) => {
            socket.emit('tap', { userId: userId })
          }
        }}>
        <Layout>
          <PageRoutes />
          <TelegramProvider />
        </Layout>
        </GameConnectionContext.Provider>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App
