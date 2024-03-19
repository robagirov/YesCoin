import { Link, LinkProps } from 'react-router-dom'
import styles from './RouterLink.module.css'

interface RouterLinkProps extends LinkProps {
  text: string
}

export function RouterLink({ to, text }: RouterLinkProps) {
  return (
    <Link to={to} className={styles.routerLink}>
      {text}
    </Link>
  )
}
