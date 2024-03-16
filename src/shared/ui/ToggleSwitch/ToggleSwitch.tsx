import clsx from 'clsx'
import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface ToggleSwitchProps {
  options: string[]
  activeIndex: number
  // eslint-disable-next-line no-unused-vars
  setActiveIndex: (active: number) => void
  className?: string
}

export function ToggleSwitch({
  options,
  className,
  activeIndex,
  setActiveIndex,
}: ToggleSwitchProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <div
        className={clsx(styles.slide, {
          [styles.left]: activeIndex === 0,
          [styles.right]: activeIndex === 1,
        })}
      />

      {options.map((option, index) => (
        <button
          type="button"
          key={option}
          className={styles.button}
          onClick={() => setActiveIndex(index)}
        >
          <Typography variant="h5" align="center">
            {option}
          </Typography>
        </button>
      ))}
    </div>
  )
}
