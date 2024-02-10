import {
  GlowCircle,
  PageTitle,
  ViewMarkup,
  BackCard,
  InfoSection,
  ActionButton,
  ListItem,
} from "shared/ui";

export const PartyKings = () => {
  return (
    <ViewMarkup>
      <div className="z-10">
        <div className="flex flex-col gap-y-4 items-center mb-9">
          <PageTitle title="Короли вечеринки" />

          <InfoSection
            message="Приглашай больше друзей чтобы попасть сюда"
            className="w-2/3"
          />
        </div>

        <ActionButton
          className="mb-4"
          variant="primary"
          message="Пригласить друзей"
          onClick={() => false}
        />

        <BackCard className="rounded-b-none" height={374}>
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
        </BackCard>
      </div>

      <GlowCircle position="top" isTriple />
    </ViewMarkup>
  );
};
