import { Subtitle, BackCard, ModalView, Layout, GlowCircle, InfoTrigger, ActionButton } from 'shared/ui'

import { BalanceAmount, BoostCard, BoostOption } from 'features'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'

import styles from './styles.module.scss'

export const GameBoosts = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const onCloseModal = () => setModalOpen(false)

  const onOpenModal = () => setModalOpen(true)

  return (
    <>
      <Layout>
        <Layout.Content>
          <div className={styles.balance}>
            <p className={styles.balance__text}>Баланс</p>

            <BalanceAmount amount={5000000} />

            <Link to={ROUTES.YES_COIN}>
              <InfoTrigger text="Как работают Бусты?" />
            </Link>
          </div>

          <Subtitle title="Бесплатные бусты" className={styles.subtitle} />

          <div className={styles.freeBoosts}>
            <BoostCard />

            <BoostCard />
          </div>

          <Subtitle title="Бусты" className={styles.subtitle} />

          <BackCard className={styles.boostList}>
            <BoostOption cost={10000} title="Двойной клик" onClick={onOpenModal} />

            <BoostOption cost={10000} title="Двойной клик" onClick={onOpenModal} />

            <BoostOption cost={10000} title="Двойной клик" onClick={onOpenModal} />

            <BoostOption cost={10000} title="Двойной клик" onClick={onOpenModal} />

            <BoostOption cost={10000} title="Двойной клик" onClick={onOpenModal} />

            <BoostOption cost={10000} title="Двойной клик" onClick={onOpenModal} />
          </BackCard>
        </Layout.Content>

        <GlowCircle position="bottom" className={styles.pageGlow} />
      </Layout>

      <ModalView isOpen={modalOpen}>
        <ActionButton className={styles.confirm} variant="primary" message="Спасибо" onClick={onCloseModal} />

        <GlowCircle position="bottom" className={styles.modalGlow} />
      </ModalView>
    </>
  )
}
