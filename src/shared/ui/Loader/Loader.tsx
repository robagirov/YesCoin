import styles from './styles.module.scss'

type Props = {
  size?: number
}

export function Loader({ size = 40 }: Props) {
  const BorderWidth = size / 14

  return (
    <div
      className={styles.block}
      style={{
        width: size,
        height: size,
        borderWidth: BorderWidth,
      }}
    />
  )
}
