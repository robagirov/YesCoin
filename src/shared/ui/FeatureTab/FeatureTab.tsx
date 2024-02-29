import { Link, type LinkProps } from 'react-router-dom'
import WhiteCircle from 'shared/icon/WhiteCircle.svg?react'

import styles from './FeatureTab.module.css'

interface FeatureTabProps {
  feature: string
  to: LinkProps['to']
}

export function FeatureTab({ feature, to }: FeatureTabProps) {
  return (
    <Link className={styles.wrapper} to={to}>
      <WhiteCircle />

      <span className={styles.featureTab}>{feature}</span>
    </Link>
  )
}
