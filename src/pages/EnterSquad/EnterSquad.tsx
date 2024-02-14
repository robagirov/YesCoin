import {
  ActionButton,
  BackCard,
  GlowCircle,
  InfoSection,
  PageTitle,
  SquadItem,
  Layout,
} from "shared/ui";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/consts";

export const EnterSquad = () => {
  return (
    <Layout>
      <Layout.Content>
        <PageTitle title="Залетай в сквад" className="mb-4" />

        <InfoSection
          message="Эти сквады активно набирают игроков Выбирай любой"
          className="mb-9"
        />

        <ActionButton
          className="mb-4"
          variant="primary"
          onClick={() => false}
          message="Выбрать другой сквад"
        />

        <BackCard height={443} className="-mb-8">
          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>

          <Link to={ROUTES.SQUAD_NAME}>
            <SquadItem title="Арнольд Криптоалютный" subtitle="Gold" />
          </Link>
        </BackCard>
      </Layout.Content>

      <GlowCircle position="middle-top" className="opacity-50" />
    </Layout>
  );
};
