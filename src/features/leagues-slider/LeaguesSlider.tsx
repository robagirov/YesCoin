import { useCallback, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import Newbie from '../../../assets/leagues/league-1.png'
import Player from '../../../assets/leagues/league-2.png'
import Pro from '../../../assets/leagues/league-3.png'
import Elite from '../../../assets/leagues/league-4.png'
import Legend from '../../../assets/leagues/league-5.png'
import YES from '../../../assets/leagues/league-6.png'

interface LeaguesSliderProps {
  // eslint-disable-next-line no-unused-vars
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
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLeague(entry.target.id)
        }
      })
    }, observerOptions)

    const slides = slideRefs.current

    slides.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      slides.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [setActiveLeague])

  const setSlideRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      slideRefs.current[index] = element
    },
    [],
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        {leagues.map(([league, leaguePicture], index) => (
          <div id={league} key={league} className={styles.slide} ref={setSlideRef(index)}>
            <img className={styles.picture} src={leaguePicture} alt={`League ${league}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
