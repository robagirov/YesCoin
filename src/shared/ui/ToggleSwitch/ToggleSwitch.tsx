import clsx from 'clsx'
import styles from './styles.module.scss'

interface ToggleSwitchProps {
  options: string[]
  activeIndex: number
  setActiveIndex: (active: number) => void
  className?: string
}

export const ToggleSwitch = ({ options, className, activeIndex, setActiveIndex }: ToggleSwitchProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div
        className={clsx(styles.slide, {
          [styles.left]: activeIndex === 0,
          [styles.right]: activeIndex === 1,
        })}
      />

      {options.map((option, index) => (
        <button key={index} className={styles.button} onClick={() => setActiveIndex(index)}>
          {option}
        </button>
      ))}
    </div>
  )
}
