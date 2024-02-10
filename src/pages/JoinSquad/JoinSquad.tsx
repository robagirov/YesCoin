import { ActionButton, GlowCircle, PageTitle, ViewMarkup } from "shared/ui";

export const JoinSquad = () => {
  return (
    <ViewMarkup>
      <div className="z-10 pb-8">
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 rounded-xl bg-[rgb(243,243,245,0.1)]" />

          <div className="relative w-24 h-24 rounded-full bg-[rgb(243,243,245,0.1)] -left-6" />
        </div>

        <PageTitle
          title="Присоединиться к Арнольд Криптовалютный Squad"
          className="mb-72"
        />

        <ActionButton
          variant="primary"
          onClick={() => false}
          message="Присоединиться"
        />
      </div>

      <GlowCircle position="bottom" />
    </ViewMarkup>
  );
};
