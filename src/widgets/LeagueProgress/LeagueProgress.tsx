import { memo, useState } from 'react'
import { LeaguesSlider } from 'features/leagues-slider'
import { LeaguePoints } from 'shared/ui/LeaguePoints'
import { Typography } from 'shared/ui/Typography'
import { leaguesPoints } from './model/mock.ts'

interface LeagueProgressProps {
  pointCount: number
}

const LeagueProgress = memo(({ pointCount }: LeagueProgressProps) => {
  const [activeLeague, setActiveLeague] = useState<string | null>('Newbie')

  return (
    <>
      <LeaguesSlider setActiveLeague={setActiveLeague} />

      <Typography variant="h2" align="center">
        {activeLeague} LVL
      </Typography>

      <LeaguePoints
        remain={pointCount}
        maxEnergy={leaguesPoints[activeLeague as keyof typeof leaguesPoints]}
      />
    </>
  )
})

export { LeagueProgress }
