import { ListBlock, Loader } from 'shared/ui'
import { useGetSquads } from 'shared/openApi'
import { Suspense } from 'react'
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

  // TODO: отрисовать состояние пустого списка
  if (!data?.length || isError) return <p>У вас нет друзей</p>

  return data.map((squad) => <SquadItem {...squad} key={squad.id} />)
}
