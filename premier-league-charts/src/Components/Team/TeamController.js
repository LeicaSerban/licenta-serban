import Team from './Team'
import axios from 'axios'
import { useState, useEffect } from 'react'

const TeamController = () => {
  const [data, setData] = useState()

  const fetchData = () => {
    axios
      .get('http://localhost:3000/team/teams')
      .then((res) => res.data)
      .then((data) => {
        const filteredTeam = data.map((element) => {
          return {
            name: element.team_name,
            winsHome: element.wins_home,
            winsAway: element.wins_away,
            pointsPerGame: element.points_per_game,
            pointsPerGameHome: element.points_per_game_home,
            pointsPerGameAway: element.points_per_game_away,
            amt: 15,
          }
        })
        
        setData(filteredTeam)
        
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <Team data={data} />
}

export default TeamController
