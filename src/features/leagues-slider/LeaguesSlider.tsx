import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './styles.module.scss'
import Newbie from '../../../assets/leagues/league-1.png'
import Player from '../../../assets/leagues/league-2.png'
import Pro from '../../../assets/leagues/league-3.png'
import Elite from '../../../assets/leagues/league-4.png'
import Legend from '../../../assets/leagues/league-5.png'
import YES from '../../../assets/leagues/league-6.png'

interface LeaguesSliderProps {
  setActiveLeague: (league: string) => void
}

const leagues = [
  ['Newbie', Newbie],
  ['Player', Player],
  ['Pro', Pro],
  ['Elite', Elite],
  ['Legend', Legend],
  ['YES', YES],
]

export function LeaguesSlider({ setActiveLeague }: LeaguesSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const onSelect = useCallback(() => {
    if (!emblaApi) return

    const selectedIndex = emblaApi.selectedScrollSnap()

    setActiveLeague(leagues[selectedIndex][0])
  }, [emblaApi, setActiveLeague])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={styles.wrapper} ref={emblaRef}>
      <div className={styles.embla}>
        {leagues.map(([league, leaguePicture], index) => (
          <div className={styles.slide} key={league}>
            <img className={styles.picture} src={leaguePicture} alt={`League ${league}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
