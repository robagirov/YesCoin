import { QueryProvider, TelegramProvider } from './providers'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from 'pages'
import { BaseLayout } from 'shared/ui'

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <BaseLayout>
          <PageRoutes />
          <TelegramProvider />
        </BaseLayout>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App
