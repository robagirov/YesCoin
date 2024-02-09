import {
  Subtitle,
  BackCard,
  ModalView,
  ViewMarkup,
  GlowCircle,
  InfoTrigger,
  ActionButton,
} from "shared/ui";

import { BalanceAmount, BoostCard, BoostOption } from "features";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/consts";

export const BoostsSelect = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onCloseModal = () => setModalOpen(false);

  const onOpenModal = () => setModalOpen(true);

  return (
    <>
      <ViewMarkup>
        <div className="pb-8 z-10">
          <p className="text-center opacity-70 mb-2.5">Баланс</p>

          <BalanceAmount className="mb-2.5" />

          <Link to={ROUTES.YES_COIN}>
            <InfoTrigger text="Как работают Бусты?" className="mb-7" />
          </Link>

          <Subtitle title="Бесплатные бусты" className="mb-5" />

          <div className="flex gap-x-2.5 mb-6">
            <BoostCard />

            <BoostCard />
          </div>

          <Subtitle title="Бусты" className="mb-5" />

          <BackCard height={356}>
            <BoostOption
              cost={10000}
              title="Двойной клик"
              onClick={onOpenModal}
            />

            <BoostOption
              cost={10000}
              title="Двойной клик"
              onClick={onOpenModal}
            />

            <BoostOption
              cost={10000}
              title="Двойной клик"
              onClick={onOpenModal}
            />

            <BoostOption
              cost={10000}
              title="Двойной клик"
              onClick={onOpenModal}
            />

            <BoostOption
              cost={10000}
              title="Двойной клик"
              onClick={onOpenModal}
            />

            <BoostOption
              cost={10000}
              title="Двойной клик"
              onClick={onOpenModal}
            />
          </BackCard>
        </div>

        <GlowCircle position="bottom" className="opacity-30" />
      </ViewMarkup>

      <ModalView isOpen={modalOpen}>
        <div className="h-full flex z-10">
          <ActionButton
            className="mt-auto"
            variant="primary"
            message="Спасибо"
            onClick={onCloseModal}
          />
        </div>

        <GlowCircle position="bottom" className="opacity-15 -z-10" />
      </ModalView>
    </>
  );
};
