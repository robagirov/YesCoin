import { ActionButton, LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'
import { useParams } from 'react-router-dom'
import { useGetSquad } from 'shared/openApi'
import { Picture } from 'shared/ui/Picture'
import styles from './styles.module.scss'
import YesCoin from '../../../assets/squads/squad-1.png'

export function JoinSquad() {
  const { id } = useParams()
  const { data: squad } = useGetSquad(Number(id))

  // TODO: mock

  return (
    <LayoutContent>
      <div className={styles.pictures}>
        <Picture type="square" size="large" src={YesCoin} className={styles.picture} />

        <Picture type="round" size="large" />
      </div>

      <Typography variant="h2" align="center" className={styles.title}>
        Присоединиться к {squad?.name}
      </Typography>

      <div className={styles.additional}>
        <div>Твой фарминг монет увеличивает счет сквада в лидерборде</div>

        <div>Скажи Yes новым друзьям и совместному фармингу</div>
      </div>

      <ActionButton variant="primary" onClick={() => false} message="Присоединиться" />
    </LayoutContent>
  )
}
