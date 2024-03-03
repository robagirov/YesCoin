export function getTelegramChatId() {
  return window.Telegram?.WebApp?.initDataUnsafe?.chat?.id || 524856122
}
