import { ListBlock, ModalView, GlowCircle, ActionButton, LayoutContent } from 'shared/ui'

import { BalanceAmount, BoostCard, BoostOption } from 'features'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'

import { Typography } from 'shared/ui/Typography'
import { boostData, freeBoostData } from './mock.ts'
import styles from './styles.module.scss'

export function GameBoosts() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const onCloseModal = () => setModalOpen(false)

  const onOpenModal = (content: string) => {
    setModalContent(content)
    setModalOpen(true)
  }

  return (
    <>
      <LayoutContent>
        <div className={styles.balance}>
          <Typography variant="h4" color="gray">
            Ваш баланс
          </Typography>

          <BalanceAmount amount={5000000} />

          <Link to={ROUTES.YES_COIN}>
            <Typography variant="h4" color="purple">
              Как работают Бусты?
            </Typography>
          </Link>
        </div>

        <Typography variant="h3" className={styles.subtitle}>
          Бесплатные бусты
        </Typography>

        <div className={styles.freeBoosts}>
          {freeBoostData.map(([boostName, boostDesc]) => (
            <div key={boostName} onClick={() => onOpenModal(boostDesc)} style={{ flex: '1' }}>
              <BoostCard name={boostName} />
            </div>
          ))}
        </div>

        <Typography variant="h3" className={styles.subtitle}>
          Бусты
        </Typography>

        <ListBlock className={styles.boostList}>
          {boostData.map(([boostName, boostDesc]) => (
            <BoostOption
              key={boostName}
              cost={10000}
              title={boostName}
              onClick={() => onOpenModal(boostDesc)}
            />
          ))}
        </ListBlock>
      </LayoutContent>

      <ModalView isOpen={modalOpen}>
        <Typography variant="h3" className={styles.modalContent}>
          {modalContent}
        </Typography>

        <ActionButton
          className={styles.confirm}
          variant="primary"
          message="Активировать"
          onClick={onCloseModal}
        />

        <GlowCircle position="bottom" className={styles.modalGlow} />
      </ModalView>
    </>
  )
}
