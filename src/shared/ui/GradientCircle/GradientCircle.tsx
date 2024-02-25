import React from 'react'
import styles from './GradientCircle.module.css'

interface GradientCircleProps {
  size: number
  color: string
}

export const GradientCircle: React.FC<GradientCircleProps> = ({ size, color }) => {
  const innerCircleStyle = {
    background: color,
    width: size,
    height: size,
  }
  return <div className={styles.circle} style={innerCircleStyle} />
}
