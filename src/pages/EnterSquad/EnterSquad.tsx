import {
  ActionButton,
  BackCard,
  GlowCircle,
  InfoSection,
  PageTitle,
  SquadItem,
  ViewMarkup,
} from "shared/ui";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/consts";

export const EnterSquad = () => {
  return (
    <ViewMarkup>
      <div className="">
        <PageTitle title="Залетай в сквад" className="mb-4" />

        <InfoSection
          message="Эти сквады активно набирают игроков Выбирай любой"
          className="mb-9"
        />

        <ActionButton
          className="mb-4"
          variant="primary"
          onClick={() => false}
          message="Пригласить друзей"
        />

        <BackCard height={334}>
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
      </div>

      <GlowCircle position="top" />
    </ViewMarkup>
  );
};
