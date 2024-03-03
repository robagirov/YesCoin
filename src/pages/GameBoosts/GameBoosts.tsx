import {
  Subtitle,
  BackCard,
  ModalView,
  GlowCircle,
  InfoTrigger,
  ActionButton,
  LayoutContent,
} from 'shared/ui'

import { BalanceAmount, BoostCard, BoostOption } from 'features'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'

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
          <p className={styles.balance__text}>Ваш баланс</p>

          <BalanceAmount amount={5000000} />

          <Link to={ROUTES.YES_COIN}>
            <InfoTrigger text="Как работают Бусты?" />
          </Link>
        </div>

        <Subtitle title="Бесплатные бусты" className={styles.subtitle} />

        <div className={styles.freeBoosts}>
          {freeBoostData.map(([boostName, boostDesc]) => (
            <div key={boostName} onClick={() => onOpenModal(boostDesc)} style={{ flex: '1' }}>
              <BoostCard name={boostName} />
            </div>
          ))}
        </div>

        <Subtitle title="Бусты" className={styles.subtitle} />

        <BackCard className={styles.boostList}>
          {boostData.map(([boostName, boostDesc]) => (
            <BoostOption
              key={boostName}
              cost={10000}
              title={boostName}
              onClick={() => onOpenModal(boostDesc)}
            />
          ))}
        </BackCard>
      </LayoutContent>

      <ModalView isOpen={modalOpen}>
        <Subtitle title={modalContent} className={styles.modalContent} />

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
