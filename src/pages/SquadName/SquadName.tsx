import { ModalView, SwitchBar, ActionButton, LayoutContent } from 'shared/ui'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import { Typography } from 'shared/ui/Typography'
import { Picture } from 'shared/ui/Picture'
import { TopList } from 'features/top-list'

import { useGetSquad } from 'shared/openApi'
import { useDisclosure } from 'shared/hooks'
import styles from './styles.module.scss'
import YesCoin from '../../../assets/squads/squad-1.png'

export function SquadName() {
  const { id } = useParams()
  const { data: squad } = useGetSquad(Number(id))

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <LayoutContent>
        <div className={styles.header}>
          <Picture size="large" type="square" className={styles.image} src={YesCoin} />

          <Typography variant="h2" className={styles.title}>
            {squad?.name}
          </Typography>

          <Typography variant="h4" className={styles.level}>
            Pro LVL
          </Typography>

          <Link to={ROUTES.SQUAD_WORK} className={styles.link}>
            <Typography variant="h4" color="silver">
              Как работают Сквады?
            </Typography>
          </Link>
        </div>

        <div className={styles.squadInfo}>
          <div className={styles.counts}>
            <div className={styles.count}>
              <Typography variant="h4" color="white">
                61.578B
              </Typography>

              <Typography variant="h6" color="silver">
                всего монет
              </Typography>
            </div>

            <div className={styles.count__divider} />

            <div className={styles.count}>
              <Typography variant="h4" color="white">
                61.578B
              </Typography>

              <Typography variant="h6" color="silver">
                игроков
              </Typography>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link to={`${ROUTES.JOIN_SQUAD}/${id}`}>
              <ActionButton
                variant="primary"
                onClick={() => false}
                message="Присоединиться в Сквад"
              />
            </Link>

            <ActionButton variant="secondary" onClick={onOpen} message="Бустануть" />
          </div>
        </div>

        <div>
          <SwitchBar
            options={['День', 'Неделя']}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          <TopList className={styles.list} users={squad?.users} />
        </div>
      </LayoutContent>

      <ModalView isOpen={isOpen} className={styles.modal}>
        <Typography variant="h2" align="center">
          Буст вашего Сквада на 24 часа
        </Typography>

        <ActionButton variant="secondary" message="100$" onClick={() => false} />

        <ActionButton variant="primary" message="Буст на 24 часа" onClick={onClose} />
      </ModalView>
    </>
  )
}
