import Team from './Team'
import ShotPossess from './ShotPossess'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'

const TeamController = () => {
  const [allData, setAllData] = useState()
  const [dataShot, setDataShot] = useState()

  const fetchData = () => {
    axios
      .get('http://localhost:3000/team/teams')
      .then((res) => res.data)
      .then((data) => {
        const filteredTeam = data.map((element) => {
          return {
            //first chart
            name: element.team_name,
            winsHome: element.wins_home,
            winsAway: element.wins_away,
            pointsPerGame: element.points_per_game,
            pointsPerGameHome: element.points_per_game_home,
            pointsPerGameAway: element.points_per_game_away,
            // 2nd chart
            shotsHome: element.shots_home,
            shotsAway: element.shots_away,
            shotsOnTarget: element.shots_on_target,
            averagePossession: element.average_possession,
            amt: 15,
          }
        })

        setAllData(filteredTeam)
      
      })
      
  }


  useEffect(() => {
    fetchData()
   
  }, [])

  return (
    <Fragment>
      <Team data={allData} />
      <ShotPossess dataShot={allData}/>
    </Fragment>
  )
}

export default TeamController
