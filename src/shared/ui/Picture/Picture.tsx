import styles from './styles.module.scss'

interface PictureProps {
  src?: string
  size?: 'large' | 'medium' | 'small' | 'tiny'
  type: 'square' | 'round'
  className?: string
}

export function Picture({ src, size = 'medium', type, className }: PictureProps) {
  const classList = [styles.container, styles[size], styles[type], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classList}>{src && <img src={src} alt="" className={styles.picture} />}</div>
  )
}
