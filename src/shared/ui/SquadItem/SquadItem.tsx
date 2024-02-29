import clsx from 'clsx'
import { ArrowRight } from '../ArrowRight'

import styles from './styles.module.scss'

interface SquadItemProps {
  className?: string
  image?: string
  title: string
  subtitle: string
}

export function SquadItem({ className, image, title, subtitle }: SquadItemProps) {
  return (
    <div className={clsx(styles.item, className)}>
      <img
        src={image || 'https://vatnikstan.ru/wp-content/uploads/2020/12/mavrodi.jpg'}
        className={styles.pic}
        alt="Изображение сквада"
      />

      <div className={styles.text}>
        <span>{title}</span>

        <span className={styles.subtitle}>{subtitle}</span>
      </div>

      <ArrowRight />
    </div>
  )
}
