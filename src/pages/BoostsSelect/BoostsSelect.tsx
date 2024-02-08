import {
  BackCard,
  InfoTrigger,
  Subtitle,
  ViewMarkup,
  GlowCircle,
} from "shared/ui";

import { BalanceAmount, BoostCard, BoostOption } from "features";

export const BoostsSelect = () => {
  return (
    <ViewMarkup>
      <div className="pb-8 z-10">
        <p className="text-center opacity-70 mb-2.5">Баланс</p>

        <BalanceAmount className="mb-2.5" />

        <InfoTrigger text="Как работают Бусты?" className="mb-7" />

        <Subtitle title="Бесплатные бусты" className="mb-5" />

        <div className="flex gap-x-2.5 mb-6">
          <BoostCard />

          <BoostCard />
        </div>

        <Subtitle title="Бусты" className="mb-5" />

        <BackCard height={356}>
          <BoostOption cost={10000} title="Двойной клик" />
          <BoostOption cost={10000} title="Двойной клик" />
          <BoostOption cost={10000} title="Двойной клик" />
          <BoostOption cost={10000} title="Двойной клик" />
          <BoostOption cost={10000} title="Двойной клик" />
          <BoostOption cost={10000} title="Двойной клик" />
        </BackCard>
      </div>

      <GlowCircle position="bottom" className="opacity-30" />
    </ViewMarkup>
  );
};
