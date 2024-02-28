import { QueryProvider, TelegramProvider, RouterProvider } from './providers'
import './styles/index.scss'

function App() {
  return (
    <QueryProvider>
      <RouterProvider>
        <TelegramProvider />
      </RouterProvider>
    </QueryProvider>
  )
}

export default App
