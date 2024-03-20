import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'shared/ui'
import { QueryProvider, TelegramProvider } from './providers'
import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import { GameConnectionContext } from '../useGameConnection.ts'
import { useTelegramUserId } from '../entities/Telegram'
import { PageRoutes } from './routes'
import { init, InitDataParsed, retrieveLaunchParams } from '@tma.js/sdk'
import { useInitData, useInitDataRaw, useMiniApp } from '@tma.js/sdk-react'

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
// const socket = io(WS_URL, {
//   transports: ['websocket'],
//   query: {
//     tgWebData: dataRaw
//   }
// });

function App() {

  // const miniApp = useMiniApp();
  //
  // useEffect(() => {
  //   miniApp.ready();
  // }, []);

  const [energy, setEnergy] = useState(0n);

  // socket.on('connect', () => {
  //   console.log('connected')
  // })
  // socket.on('disconnect', () => {
  //   console.log('disconnected')
  // })
  //
  // socket.on('connect_error', (err) => {
  //   console.error(err)
  // })
  //
  // socket.on('energy', (data) => {
  //   setEnergy(BigInt(data))
  // })

  const initData = useInitData();
  const initDataRaw = useInitDataRaw();

  useEffect(() => {
    console.log('initDataRaw: ', initDataRaw);
  }, [initDataRaw, initData])

  return (
    <div>App component</div>
    // <QueryProvider>
    //   <BrowserRouter>
    //     <GameConnectionContext.Provider value={{
    //       energy,
    //       tap: () => {
    //         // socket.emit('tap', { userId: tgData.user?.id.toString() })
    //       }
    //     }}>
    //     {/* <Layout> */}
    //     {/*   /!* <PageRoutes /> *!/ */}
    //     {/* </Layout> */}
    //     </GameConnectionContext.Provider>
    //   </BrowserRouter>
    // </QueryProvider>
  )
}

export default App
