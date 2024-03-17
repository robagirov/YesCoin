import { ActionButton, LayoutContent } from 'shared/ui'
import { Typography } from 'shared/ui/Typography'
import { Picture } from 'shared/ui/Picture'
import styles from './styles.module.scss'

export function SquadWork() {
  return (
    <LayoutContent>
      <div className={styles.buttons}>
        <ActionButton variant="secondary" message="Войти" onClick={() => false} />

        <ActionButton variant="secondary" message="Подписаться" onClick={() => false} />
      </div>

      <Typography variant="h2" align="center" className={styles.title}>
        Сквады
      </Typography>

      <div className={styles.slider}>
        {[
          { mainText: 'Жми на монету', subText: 'И получай YesCoin' },
          { mainText: 'Прокачивай Буст', subText: 'Чтобы получать монетка' },
          { mainText: 'Соревнуйся', subText: 'Дойди до лиги' },
        ].map((item, index) => (
          <div className={styles.item} key={index}>
            <Picture type="square" />

            <div className={styles.text}>
              <Typography variant="h4">{item.mainText}</Typography>

              <Typography variant="h6" color="gray">
                {item.subText}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <ActionButton variant="secondary" message="Гайд" onClick={() => false} />

        <ActionButton variant="primary" message="Хорошо" onClick={() => false} />
      </div>
    </LayoutContent>
  )
}
