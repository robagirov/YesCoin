import { Typography } from 'shared/ui/Typography'
import styles from './styles.module.scss'

interface SwitchBarProps {
  options: string[]
  activeIndex: number
  setActiveIndex: (active: number) => void
}

export function SwitchBar({ options, activeIndex, setActiveIndex }: SwitchBarProps) {
  return (
    <div className={styles.root}>
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

      <div
        className={styles.line}
        style={{
          width: `${100 / options.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  )
}
