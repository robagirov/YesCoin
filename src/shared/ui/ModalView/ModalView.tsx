import clsx from 'clsx'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

interface ModalViewProps {
  isOpen: boolean
  className?: string
  children: ReactNode
}

export const ModalView = ({ className, children, isOpen }: ModalViewProps) =>
  createPortal(
    <div className={clsx(styles.dialog, { [styles.open]: isOpen }, className)}>{children}</div>,
    document.getElementById('portal')!,
  )
