import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface Props {
  energyLeft: number
  totalEnergy: number
}

export function EnergyRing({ totalEnergy, energyLeft }: Props) {
  const circleRef = useRef<SVGPathElement>(null)
  const [circumference, setCircumference] = useState(0)

  useEffect(() => {
    if (!circleRef.current) {
      return
    }

    const length = circleRef.current.getTotalLength()
    setCircumference(length)
    circleRef.current.style.strokeDasharray = `${length}`
    circleRef.current.style.strokeDashoffset = `${length}`
  }, [])

  useEffect(() => {
    if (!circleRef.current || !circumference) {
      return
    }

    const energyPercentage = energyLeft / totalEnergy
    const offset = circumference * (1 - energyPercentage)
    circleRef.current.style.strokeDashoffset = `${offset}`
  }, [energyLeft, totalEnergy, circumference])

  return (
    <svg
      className={styles.circle}
      viewBox="0 0 296 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={circleRef}
        className={styles.path}
        d="M148 3 a 145 145 0 1 0 0.00001 0"
        stroke="#00FF66"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
