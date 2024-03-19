import styles from './GradientCircle.module.css'

interface GradientCircleProps {
  size: number
  color: string
}

export function GradientCircle({ size, color }: GradientCircleProps) {
  const innerCircleStyle = {
    background: color,
    width: size,
    height: size,
  }
  return <div className={styles.circle} style={innerCircleStyle} />
}
