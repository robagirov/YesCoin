import { ListBlock, Loader } from 'shared/ui'
import { useGetSquads } from 'shared/openApi'
import { Suspense } from 'react'
import { BlankListStub } from 'shared/ui/BlankListStub'
import { SquadItem } from './SquadItem'
import styles from './styles.module.scss'

export function SquadList() {
  return (
    <ListBlock className={styles.list}>
      <Suspense fallback={<Loader />}>
        <ItemsList />
      </Suspense>
    </ListBlock>
  )
}

function ItemsList() {
  const { data, isError } = useGetSquads()

  if (!data?.length || isError) return <BlankListStub label="Список сквадов пуст" />

  return data.map((squad) => <SquadItem {...squad} key={squad.id} />)
}
