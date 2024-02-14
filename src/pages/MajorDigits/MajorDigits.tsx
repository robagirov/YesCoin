import {
  ActionButton,
  GlowCircle,
  InfoTrigger,
  ModalView,
  PageTitle,
  Layout,
} from "shared/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MajorDigits = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const onCloseModal = () => setModalOpen(false);
  const onOpenModal = () => setModalOpen(true);

  return (
    <>
      <Layout>
        <Layout.Content>
          <p className="text-[rgba(255,255,255,0.7)] mb-2.5 text-center">
            Общий баланс YesCoin
          </p>

          <PageTitle
            title={(153411234123).toLocaleString()}
            className="mb-2.5"
          />

          <InfoTrigger
            text="Что означает эта цифра"
            onClick={onOpenModal}
            className="mb-16"
          />

          <div className="flex flex-col items-start pl-5 mb-36">
            <div className="flex items-center justify-center gap-x-8 py-5">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
              </div>

              <div className="">
                <p className="text-xl">10,245,234</p>
                <p className="text-[rgba(255,255,255,0.7)]">Всего игроков</p>
              </div>
            </div>

            <div className="w-64 h-px bg-[rgba(46,46,46)] ml-6" />

            <div className="flex items-center justify-center gap-x-8 py-5">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
              </div>

              <div className="">
                <p className="text-xl">10,245,234</p>
                <p className="text-[rgba(255,255,255,0.7)]">
                  Игроков за сегодня
                </p>
              </div>
            </div>

            <div className="w-64 h-px bg-[rgba(46,46,46)] ml-6" />

            <div className="flex items-center justify-center gap-x-8 py-5">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
                <div className="w-10 h-10 bg-[rgba(243,243,245,0.1)] rounded-full" />
              </div>

              <div className="">
                <p className="text-xl">10,245,234</p>
                <p className="text-[rgba(255,255,255,0.7)]">Онлайн</p>
              </div>
            </div>
          </div>

          <ActionButton variant="primary" onClick={goBack} message="Хорошо" />
        </Layout.Content>

        <GlowCircle position="bottom" className="opacity-50" />
      </Layout>

      <ModalView isOpen={modalOpen}>
        <PageTitle title="Details" className="mb-8 flex justify-start" />

        <div className="mb-8">
          <p className="text-xl">10,245,234,235,536</p>
          <p className="text-[rgba(255,255,255,0.7)]">Общий баланс YesCoin</p>
        </div>

        <p className="text-xl mb-8">=</p>

        <div className="mb-8">
          <p className="text-xl">3,245,234,235,536</p>
          <p className="text-[rgba(255,255,255,0.7)]">Всего добыто</p>
        </div>

        <div className="mb-8">
          <p className="text-xl text-[rgb(255,107,107)]">-3,245,234,235,536</p>
          <p className="text-[rgba(255,255,255,0.7)]">Сожжено и потрачено</p>
        </div>

        <ActionButton
          className="mx-auto"
          variant="primary"
          message="Хорошо"
          onClick={onCloseModal}
        />
      </ModalView>
    </>
  );
};
