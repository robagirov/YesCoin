import {
  GlowCircle,
  PageTitle,
  Layout,
  BackCard,
  InfoSection,
  ActionButton,
  ListItem,
} from "shared/ui";

export const PartyKings = () => {
  return (
    <Layout>
      <Layout.Content>
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

        <BackCard height={374} className="rounded-b-none -mb-8">
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
          <ListItem number={1} title="Бизьяна" subtitle="116,723 Друзей" />
        </BackCard>
      </Layout.Content>

      <GlowCircle position="double-top" />
    </Layout>
  );
};
