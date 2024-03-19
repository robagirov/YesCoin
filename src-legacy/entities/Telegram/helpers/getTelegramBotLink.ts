export function getTelegramBotLink(command: string) {
  const link = new URL(import.meta.env.VITE_BOT_NAME, 'https://t.me')

  link.searchParams.set('start', command)

  return link.href
}
