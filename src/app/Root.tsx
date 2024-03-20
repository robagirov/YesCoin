import { DisplayGate, SDKProvider } from '@tma.js/sdk-react'
import App from './App.tsx'
import { useEffect } from 'react'
import { setDebug } from '@tma.js/sdk'

export function Root() {

  useEffect(() => {
    setDebug(true);
  }, []);

  return (
    <SDKProvider>
    <App/>
    </SDKProvider>
  );
}
