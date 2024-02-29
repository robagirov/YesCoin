import clsx from 'clsx'
import styles from './styles.module.scss'

interface ListItemProps {
  number: number
  avatar?: string
  title: string
  subtitle: string
}

export function ListItem({ number, avatar, title, subtitle }: ListItemProps) {
  return (
    <div className={clsx(styles.wrapper, 'flex items-center rounded-lg')}>
      <div className="text-white">{number}</div>

      <img
        src={avatar || 'https://vatnikstan.ru/wp-content/uploads/2020/12/mavrodi.jpg'}
        className={clsx(styles.image, 'rounded-full bg-[rgba(243,243,245,0.1)] object-cover')}
        alt="Фото профиля"
      />

      <div className="flex flex-col">
        <span className="text-white">{title}</span>

        <span className="text-gray-400 opacity-70 font-light">{subtitle}</span>
      </div>
    </div>
  )
}
