import clsx from 'clsx'
import styles from './styles.module.scss'

interface GlowCircleProps {
  position: 'top' | 'middle-top' | 'center' | 'bottom'
  isTriple?: boolean
  className?: string
}

export function GlowCircle({ position, isTriple, className }: GlowCircleProps) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        {
          [styles.top]: position === 'top',
          [styles.middleTop]: position === 'middle-top',
          [styles.center]: position === 'center',
          [styles.bottom]: position === 'bottom',
        },
        className,
      )}
    >
      <div className={styles.glow} />

      <div className={styles.glow} />

      {isTriple && <div className={styles.glow} />}
    </div>
  )
}
