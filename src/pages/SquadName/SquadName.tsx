import {
  BackCard,
  ListItem,
  ModalView,
  PageTitle,
  SwitchBar,
  ViewMarkup,
  GlowCircle,
  ActionButton,
} from "shared/ui";
import { useState } from "react";
import { squadTopList } from "./model/mock.ts";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/consts";

export const SquadName = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const onCloseModal = () => setModalOpen(false);

  const onOpenModal = () => setModalOpen(true);

  return (
    <>
      <ViewMarkup>
        <div className="z-10">
          <div className="w-20 h-20 rounded-xl bg-grey-900 mb-9 bg-[rgba(243,243,245,0.1)] mx-auto" />

          <PageTitle title="Имя Сквада" className="mb-1.5" />

          <p className="mb-2.5 text-center">Diamond</p>
          <Link to={ROUTES.SQUAD_WORK} className="text-center block mb-2.5">
            Как работают Сквады?
          </Link>

          <div className="rounded-xl bg-[rgba(243,243,245,0.1)] op p-3.5 mb-4">
            <div className="flex mb-7">
              <div className="pl-5">
                <p className="text-xl">61.578B</p>
                <p className="opacity-30">всего очков</p>
              </div>

              <div className="h-12 w-px bg-[rgb(46,46,46)] ml-9" />

              <div className="pl-7">
                <p className="text-xl">61.578B</p>
                <p className="opacity-30">всего очков</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <Link to={ROUTES.JOIN_SQUAD}>
                <ActionButton
                  variant="primary"
                  onClick={() => false}
                  message="Присоединиться в Сквад"
                />
              </Link>

              <ActionButton
                variant="secondary"
                onClick={onOpenModal}
                message="Бустануть"
              />
            </div>
          </div>

          <div>
            <SwitchBar
              options={["День", "Неделя"]}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            <BackCard height={224} className="rounded-none">
              {squadTopList?.[activeIndex]?.map((person, index) => (
                <ListItem
                  key={index}
                  number={person.number}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              ))}
            </BackCard>
          </div>
        </div>

        <GlowCircle position="top" />
      </ViewMarkup>

      <ModalView isOpen={modalOpen}>
        <div className="h-full z-10 flex flex-col justify-end">
          <PageTitle
            title="Буст вашего Сквада на 24 часа"
            className="mb-56 mt-32"
          />

          <ActionButton
            className="mb-6"
            variant="secondary"
            message="100$"
            onClick={() => false}
          />

          <ActionButton
            variant="primary"
            message="Буст на 24 часа"
            onClick={onCloseModal}
          />
        </div>

        <GlowCircle position="bottom" className="opacity-15 -z-10" />
      </ModalView>
    </>
  );
};
