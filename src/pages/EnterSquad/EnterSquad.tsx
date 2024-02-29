import { ActionButton, BackCard, InfoSection, PageTitle, SquadItem, LayoutContent } from 'shared/ui'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'

import styles from './styles.module.scss'

export const EnterSquad = () => {
  return (
    <LayoutContent>
      <div className={styles.header}>
        <PageTitle title="Залетай в сквад" />

        <InfoSection message="Эти сквады активно набирают игроков Скажи Yes любому" />
      </div>

      <ActionButton
        variant="primary"
        onClick={() => false}
        className={styles.button}
        message="Выбрать другой сквад"
      />

      <BackCard className={styles.squadList}>
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
    </LayoutContent>
  )
}
