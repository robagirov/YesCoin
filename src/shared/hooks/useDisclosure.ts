import { useState } from 'react'

export function useDisclosure(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const onToggle = () => setIsOpen((prev) => !prev)

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  }
}
