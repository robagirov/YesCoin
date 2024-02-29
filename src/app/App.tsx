import { QueryProvider, TelegramProvider } from './providers'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { PageRoutes } from 'pages'
import { Layout } from 'shared/ui'

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
