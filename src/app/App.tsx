import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from 'pages'
import { Layout } from 'shared/ui'
import { QueryProvider, TelegramProvider } from './providers'

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <Layout>
          <PageRoutes />
          <TelegramProvider />
        </Layout>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App
