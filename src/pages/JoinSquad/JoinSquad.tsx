import { ActionButton, LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'
import { Picture } from 'shared/ui/Picture'
import { useParams } from 'react-router-dom'
import { useGetSquad } from 'shared/openApi'
import styles from './styles.module.scss'

export function JoinSquad() {
  const { id } = useParams()
  const { data: squad } = useGetSquad(Number(id))

  // TODO: mock

  return (
    <LayoutContent>
      <div className="flex justify-center mb-12">
        <div className="w-24 h-24 rounded-xl bg-[rgb(243,243,245,0.1)]" />

        <div className="relative w-24 h-24 rounded-full bg-[rgb(243,243,245,0.1)] -left-6" />
      </div>

      <Typography variant="h2" className="mb-72" align="center">
        Присоединиться к Арнольд Криптовалютный Squad
      </Typography>

      <div className={styles.additional}>
        <div>Твой фарминг монет увеличивает счет сквада в лидерборде</div>

        <div>Скажи Yes новым друзьям и совместному фармингу</div>
      </div>

      <ActionButton variant="primary" onClick={() => false} message="Присоединиться" />
    </LayoutContent>
  )
}
