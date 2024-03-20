import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'shared/ui'
import { QueryProvider, TelegramProvider } from './providers'
import { io, Socket } from 'socket.io-client'
import { useEffect, useState } from 'react'
import { GameConnectionContext } from '../useGameConnection.ts'
import { useTelegramUserId } from '../entities/Telegram'
import { PageRoutes } from './routes'
import { init, InitDataParsed, retrieveLaunchParams } from '@tma.js/sdk'
import { useInitData, useInitDataRaw, useMiniApp } from '@tma.js/sdk-react'
import { on } from '@tma.js/sdk';


// const WS_URL = 'http://localhost:3500/game'
const WS_URL = 'https://yestoken.space/game'

// let dataRaw;
// let tgData: InitDataParsed;
//
// try {
//   const { initDataRaw, initData } = retrieveLaunchParams();
//   dataRaw = initDataRaw;
//   tgData = initData!;
// } catch (e) {
//   dataRaw = '';
// }
//
//

function App() {

  // const miniApp = useMiniApp();
  //
  // useEffect(() => {
  //   miniApp.ready();
  // }, []);

  const [energy, setEnergy] = useState(0n);
  const [balance, setBalance] = useState(0n);

  const initDataRaw = useInitDataRaw();
  const initData = useInitData();

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    setSocket(io(WS_URL, {
      transports: ['websocket'],
      query: {
        tgWebData: initDataRaw
      },
    }))

    on('popup_closed', () => {
      socket?.disconnect();
    })

    return () => {
      socket?.disconnect();
    }

  }, [initDataRaw])

  useEffect(() => {
    console.log('socket: ', socket);

    socket?.on('energy', (data) => {
      setEnergy(data);
    })

    socket?.on('balance', (data) => {
      setBalance(data);
    })
  }, [socket])

  return (
    <QueryProvider>
      <BrowserRouter>
        <GameConnectionContext.Provider value={{
          energy,
          balance,
          tap: () => {
            socket?.emit('tap', { userId: initData?.user?.id.toString() })
          }
        }}>
        <Layout>
          <PageRoutes />
        </Layout>
        </GameConnectionContext.Provider>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App
