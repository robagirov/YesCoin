import { useLayoutEffect, useState } from 'react'
import { useTelegram } from './useTelegram.ts'

export function useTelegramUserId() {
  const telegram = useTelegram()
  const [userId, setUserId] = useState<number | undefined>(telegram?.initDataUnsafe?.user?.id)

  useLayoutEffect(() => {
    if (telegram && !userId) setUserId(telegram.initDataUnsafe.user?.id)
  }, [telegram, userId, setUserId])

  return userId || import.meta.env?.VITE_LOCAL_USER_ID
}
