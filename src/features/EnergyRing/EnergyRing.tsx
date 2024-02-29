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
        d="M148 3C67.9187 3 3 67.9187 3 148C3 228.081 67.9187 293 148 293C228.081 293 293 228.081 293 148C293 92.5529 261.878 44.3748 216.15 19.9809"
        stroke="#00FF66"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
