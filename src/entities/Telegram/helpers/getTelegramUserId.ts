export function getTelegramUserId() {
  if (import.meta.env.MODE === 'development') return import.meta.env?.VITE_LOCAL_USER_ID

  return window.Telegram?.WebApp?.initDataUnsafe?.user?.id
}
