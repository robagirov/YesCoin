import clsx from 'clsx'
import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { createPortal } from 'react-dom'

interface ModalViewProps {
  isOpen: boolean
  className?: string
  children: ReactNode
}

export const ModalView = ({ className, children, isOpen }: ModalViewProps) => {
  return createPortal(
    <div className={clsx(styles.dialog, { [styles.open]: isOpen }, className)}>{children}</div>,
    document.getElementById('portal')!,
  )
}
