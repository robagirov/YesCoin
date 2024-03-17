import { Typography } from 'shared/ui/Typography'
import Lottie from 'react-lottie'
import animationData from '../../../../assets/lotties/cat-no-friends.json'
import styles from './styles.module.scss'

interface BlankListStubProps {
  label: string
}

export function BlankListStub({ label }: BlankListStubProps) {
  return (
    <div className={styles.empty}>
      <Typography variant="h5">{label}</Typography>

      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        style={{ width: '20vh', height: '20vh' }}
      />
    </div>
  )
}
