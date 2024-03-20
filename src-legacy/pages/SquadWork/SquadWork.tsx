import { ActionButton, LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'

export function SquadWork() {
  return (
    <LayoutContent>
      <div className="flex gap-x-2.5 mb-9">
        <ActionButton message="Войти" variant="secondary" onClick={() => false} />

        <ActionButton variant="secondary" onClick={() => false} message="Подписаться" />
      </div>

      <Typography variant="h2" className="mb-12">
        Сквады
      </Typography>

      <div className="flex flex-col gap-y-7 mb-40 pl-6">
        <div className="flex gap-x-3.5">
          <div className="w-[46px] h-[46px] rounded-md bg-[rgba(243,243,245,0.1)] object-cover" />

          <div className="flex flex-col">
            <span>Жми на монету</span>

            <span className="text-sm text-gray-400 opacity-70 font-light">И получай YesCoin</span>
          </div>
        </div>

        <div className="flex gap-x-3.5">
          <div className="w-[46px] h-[46px] rounded-md bg-[rgba(243,243,245,0.1)] object-cover" />

          <div className="flex flex-col">
            <span>Прокачивай Буст</span>

            <span className="text-sm text-gray-400 opacity-70 font-light">
              Чтобы получать монетка
            </span>
          </div>
        </div>

        <div className="flex gap-x-3.5">
          <div className="w-[46px] h-[46px] rounded-md bg-[rgba(243,243,245,0.1)] object-cover" />

          <div className="flex flex-col">
            <span>Соревнуйся</span>

            <span className="text-sm text-gray-400 opacity-70 font-light">Дойди до лиги</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <ActionButton variant="secondary" onClick={() => false} message="Гайд" />

        <ActionButton variant="primary" onClick={() => false} message="Хорошо" />
      </div>
    </LayoutContent>
  )
}