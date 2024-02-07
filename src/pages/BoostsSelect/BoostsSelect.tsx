import { BackCard, InfoTrigger, Subtitle, ViewMarkup } from "shared/ui";
import { BalanceAmount, BoostCard } from "features";

export const BoostsSelect = () => {
  return (
    <ViewMarkup>
      <div className="pb-8">
        <p className="text-center opacity-70 mb-2.5">Баланс</p>

        <BalanceAmount className="mb-2.5" />

        <InfoTrigger text="Как работают Бусты?" className="mb-7" />

        <Subtitle title="Бесплатные бусты" className="mb-5" />

        <div className="flex gap-x-2.5 mb-6">
          <BoostCard />

          <BoostCard />
        </div>

        <Subtitle title="Бусты" className="mb-5" />

        <BackCard height={334}>asf</BackCard>
      </div>
    </ViewMarkup>
  );
};
