import clsx from "clsx";
import { ActionButton, GlowCircle, PageTitle, ViewMarkup } from "shared/ui";

interface YesCoinProps {
  className?: string;
}

export const YesCoin = ({ className }: YesCoinProps) => {
  return (
    <div className={clsx(className)}>
      <ViewMarkup>
        <div className="pb-8 z-10">
          <div className="flex gap-x-2.5 mb-9">
            <ActionButton
              message="Войти"
              variant="secondary"
              onClick={() => false}
            />

            <ActionButton
              variant="secondary"
              onClick={() => false}
              message="Подписаться"
            />
          </div>

          <PageTitle title="YesCoin" className="mb-12" />

          <div className="flex flex-col gap-y-7 mb-40 pl-6">
            <div className="flex gap-x-3.5">
              <div className="w-[46px] h-[46px] rounded-md bg-[rgba(243,243,245,0.1)] object-cover" />

              <div className="flex flex-col">
                <span>Жми на монету</span>

                <span className="text-sm text-gray-400 opacity-70 font-light">
                  И получай YesCoin
                </span>
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

                <span className="text-sm text-gray-400 opacity-70 font-light">
                  Дойди до лиги
                </span>
              </div>
            </div>

            <div className="flex gap-x-3.5">
              <div className="w-[46px] h-[46px] rounded-md bg-[rgba(243,243,245,0.1)] object-cover" />

              <div className="flex flex-col">
                <span>Присоединяйся к Скваду</span>

                <span className="text-sm text-gray-400 opacity-70 font-light">
                  Вместе больше
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <ActionButton
              variant="secondary"
              onClick={() => false}
              message="Гайд"
            />

            <ActionButton
              variant="primary"
              onClick={() => false}
              message="Хорошо"
            />
          </div>
        </div>

        <GlowCircle position="bottom" className="opacity-40" />
      </ViewMarkup>
    </div>
  );
};
