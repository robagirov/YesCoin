import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import WhiteCircle from 'shared/icon/WhiteCircle.svg?react'

import styles from './FeatureTab.module.css'

interface FeatureTabProps {
  feature: string
  to: LinkProps['to']
}

export const FeatureTab: FC<FeatureTabProps> = ({ feature, to }) => {
  return (
    <>
      <Link className={styles.wrapper} to={to}>
        <WhiteCircle />

        <span className={styles.featureTab}>{feature}</span>
      </Link>
    </>
  )
}
