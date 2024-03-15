import styles from './styles.module.scss'
import League1 from '../../../assets/leagues/league-1.png'
import League2 from '../../../assets/leagues/league-2.png'
import League3 from '../../../assets/leagues/league-3.png'
import League4 from '../../../assets/leagues/league-4.png'

export function LeagueProgress() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide} id="slide-1">
        <img className={styles.icon} src={League1} alt="" />
      </div>
      <div className={styles.slide} id="slide-2">
        <img className={styles.icon} src={League2} alt="" />
      </div>
      <div className={styles.slide} id="slide-3">
        <img className={styles.icon} src={League3} alt="" />
      </div>
      <div className={styles.slide} id="slide-4">
        <img className={styles.icon} src={League4} alt="" />
      </div>
    </div>
  )
}
