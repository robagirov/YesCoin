import { useState, useLayoutEffect } from 'react'

export function useTelegramChatId() {
  const [chatId, setChatId] = useState(524856122) // Значение по умолчанию

  useLayoutEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      try {
        const initData = window.Telegram.WebApp.initDataUnsafe

        if (initData && initData.chat) {
          setChatId(initData.chat.id)
        }
      } catch (error) {
        console.error('Ошибка при получении ID чата:', error)

        setChatId(524856122)
      }
    }
  }, [])

  return chatId
}
