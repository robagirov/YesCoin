import {
  ListBlock,
  NumberedItem,
  ModalView,
  SwitchBar,
  GlowCircle,
  ActionButton,
  LayoutContent,
} from 'shared/ui'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'
import { Typography } from 'shared/ui/Typography'
import { squadTopList } from './model/mock.ts'

import styles from './styles.module.scss'

export function SquadName() {
  const [activeIndex, setActiveIndex] = useState(0)

  const [modalOpen, setModalOpen] = useState(false)

  const onCloseModal = () => setModalOpen(false)

  const onOpenModal = () => setModalOpen(true)

  return (
    <>
      <LayoutContent>
        <div className={styles.image} />

        <Typography variant="h2" className={styles.title}>
          Имя Сквада
        </Typography>

        <p className={styles.subtitle}>Diamond</p>

        <Link to={ROUTES.SQUAD_WORK} className={styles.link}>
          Как работают Сквады?
        </Link>

        <div className={styles.squadInfo}>
          <div className={styles.counts}>
            <div className={styles.count}>
              <p className={styles.count__text}>61.578B</p>
              <p className={styles.count__sign}>всего монет</p>
            </div>

            <div className={styles.count__divider} />

            <div className={styles.count}>
              <p className={styles.count__text}>61.578B</p>
              <p className={styles.count__sign}>игроков</p>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link to={ROUTES.JOIN_SQUAD}>
              <ActionButton
                variant="primary"
                onClick={() => false}
                message="Присоединиться в Сквад"
              />
            </Link>

            <ActionButton variant="secondary" onClick={onOpenModal} message="Бустануть" />
          </div>
        </div>

        <div>
          <SwitchBar
            options={['День', 'Неделя']}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          <ListBlock className={styles.list}>
            {squadTopList?.[activeIndex]?.map((person) => (
              <NumberedItem
                key={person.number}
                number={person.number}
                title={person.title}
                subtitle={person.subtitle}
              />
            ))}
          </ListBlock>
        </div>
      </LayoutContent>

      <ModalView isOpen={modalOpen}>
        <div className="h-full z-10 flex flex-col justify-end">
          <Typography variant="h2" className="mb-56 mt-32">
            Буст вашего Сквада на 24 часа
          </Typography>

          <ActionButton className="mb-6" variant="secondary" message="100$" onClick={() => false} />

          <ActionButton variant="primary" message="Буст на 24 часа" onClick={onCloseModal} />
        </div>

        <GlowCircle position="bottom" className="opacity-15 -z-10" />
      </ModalView>
    </>
  )
}
