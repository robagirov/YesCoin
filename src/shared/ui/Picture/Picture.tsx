import clsx from 'clsx'
import styles from './styles.module.scss'

interface PictureProps {
  src?: string
  size?: 'large' | 'medium' | 'small' | 'tiny'
  type: 'square' | 'round'
  className?: string
}

export function Picture({ src, size = 'medium', type, className }: PictureProps) {
  return (
    <div className={clsx(styles.container, styles[size], styles[type], className)}>
      {src && <img src={src} alt="" className={styles.picture} />}
    </div>
  )
}
