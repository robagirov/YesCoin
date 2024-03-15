import React from 'react'
import styles from './styles.module.scss'

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'

export interface TypographyProps {
  variant: TypographyVariant
  className?: string
  children: React.ReactNode
  align?: 'left' | 'center' | 'right' | 'justify'
  color?: 'white' | 'gray' | 'silver' | 'purple' | 'gold' | 'red'
}

export function Typography({
  variant,
  className,
  children,
  align = 'left',
  color = 'white',
}: TypographyProps) {
  const classList = [
    className,
    styles.basic,
    styles[variant],
    styles[`align-${align}`],
    styles[`color-${color}`],
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classList}>{children}</div>
}
