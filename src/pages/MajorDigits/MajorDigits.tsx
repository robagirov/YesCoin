import { ActionButton, ModalView, LayoutContent } from 'shared/ui'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

export function MajorDigits() {
  const [modalOpen, setModalOpen] = useState(false)

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  const onCloseModal = () => setModalOpen(false)
  const onOpenModal = () => setModalOpen(true)

  return (
    <>
      <LayoutContent>
        <div className={styles.header}>
          <p className={styles.header__balance}>Общий количество YesCoin</p>

          <Typography variant="h2">{(153411234123).toLocaleString()}</Typography>

          <div onClick={onOpenModal}>
            <Typography variant="h4" color="purple">
              Что значит это число?
            </Typography>
          </div>
        </div>

        <div className={styles.totals}>
          <div className={clsx(styles.totals__item, styles.item)}>
            <div className={styles.item__circles}>
              <div className={styles.circle} />
              <div className={styles.circle} />
              <div className={styles.circle} />
            </div>

            <div>
              <p className={styles.number}>10,245,234</p>
              <p className={styles.label}>Всего игроков</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={clsx(styles.totals__item, styles.item)}>
            <div className={styles.item__circles}>
              <div className={styles.circle} />
              <div className={styles.circle} />
              <div className={styles.circle} />
            </div>

            <div>
              <p className={styles.number}>10,245,234</p>
              <p className={styles.label}>Игроков за сегодня</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={clsx(styles.totals__item, styles.item)}>
            <div className={styles.item__circles}>
              <div className={styles.circle} />
              <div className={styles.circle} />
              <div className={styles.circle} />
            </div>

            <div>
              <p className={styles.number}>10,245,234</p>
              <p className={styles.label}>Текущий онлайн</p>
            </div>
          </div>
        </div>

        <ActionButton variant="primary" onClick={goBack} message="Пригласить друга" />
      </LayoutContent>

      <ModalView isOpen={modalOpen}>
        <Typography variant="h2" className={styles.modalTitle}>
          Детали
        </Typography>

        <div className={styles.more}>
          <p className={styles.main}>10,245,234,235,536</p>
          <p className={styles.secondary}>Общее количество YesCoin</p>
        </div>

        <div className={styles.more}>
          <p className={styles.main}>=</p>
        </div>

        <div className={styles.more}>
          <p className={styles.main}>3,245,234,235,536</p>
          <p className={styles.secondary}>Всего добыто</p>
        </div>

        <div className={styles.more}>
          <p className={clsx(styles.main, styles.error)}>-3,245,234,235,536</p>
          <p className={styles.secondary}>Сожжено и потрачено</p>
        </div>

        <ActionButton
          className={styles.okButton}
          variant="primary"
          message="Хорошо"
          onClick={onCloseModal}
        />
      </ModalView>
    </>
  )
}
