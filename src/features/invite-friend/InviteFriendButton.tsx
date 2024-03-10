import { ActionButton } from 'shared/ui'
import type { MouseEventHandler } from 'react'
import { getTelegramBotInviteLink, useTelegram } from 'entities/Telegram'

interface InviteFriendButtonProps {
  className?: string
}

export function InviteFriendButton({ className }: InviteFriendButtonProps) {
  const telegram = useTelegram()

  const inviteHandler: MouseEventHandler = () => {
    telegram.openTelegramLink(getTelegramBotInviteLink())

    telegram.close()
  }

  return (
    <ActionButton
      variant="primary"
      className={className}
      onClick={inviteHandler}
      message="Пригласить друга"
    />
  )
}
