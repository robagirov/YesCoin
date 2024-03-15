import { ROUTES } from 'shared/consts'
import { Link } from 'react-router-dom'
import { Picture } from 'shared/ui/Picture'
import { Typography } from 'shared/ui/Typography'
import Squad1 from '../../../assets/squads/squad-1.png'
import Squad2 from '../../../assets/squads/squad-2.png'
import Squad3 from '../../../assets/squads/squad-3.png'
import styles from './styles.module.scss'

export function YesCoiners() {
  return (
    <Link to={ROUTES.MAJOR_DIGITS} className={styles.coiners}>
      <div className={styles.inner}>
        <div className={styles.squads}>
          <Picture type="round" src={Squad1} size="tiny" />

          <Picture type="round" src={Squad2} size="tiny" />

          <Picture type="round" src={Squad3} size="tiny" />
        </div>

        <Typography variant="h5">32,543,654 YesCoiners</Typography>
      </div>
    </Link>
  )
}
