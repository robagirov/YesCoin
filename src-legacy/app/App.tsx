import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from 'pages'
import { Layout } from 'shared/ui'
import { QueryProvider, TelegramProvider } from './providers'
import { io } from 'socket.io-client'
import { useState } from 'react'
import { GameConnectionContext } from '../shared/hooks/useGameConnection.ts'
import { useTelegramUserId } from '../entities/Telegram'

// const WS_URL = 'http://localhost:3500/'
const WS_URL = 'https://yestoken.space/game'

const userId = import.meta.env?.VITE_LOCAL_USER_ID

const socket = io(WS_URL, {
  transports: ['websocket'],
  query: {
    userId: userId
  },
  auth: {
    token: 'tma'
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
