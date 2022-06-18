
import axios from 'axios'
import { useState, useEffect } from 'react'
import Game from './Game'


const GameController = () => {
  const [data, setData] = useState()
  const [dataTeam, setDataTeam] = useState()
  //   const [chartData, setChartData] = useState([])

  const fetchDataTeam = () => {
    axios
      .get('http://localhost:3000/team/teams')
      .then((res) => res.data)
      .then((data) => {
        const filteredTeam = data.map((element) => {
          return {
            teamName: element.common_name,
          }
        })
        
        setDataTeam(filteredTeam)
      })
  }

  const fetchDataGame = () => {
    
    axios
      .get('http://localhost:3000/match/matches')
      .then((res) => res.data)
      .then((data) => {
        const filteredTeam = data.map((element) => {
          return {
            dateGMT: element.date_GMT,
            attendance: element.attendance,
            homeTeamName: element.home_team_name,
            awayTeamName: element.away_team_name,
            referee: element.referee,
            homeTeamGoalCount: element.home_team_goal_count,
            awayTeamGoalCount: element.away_team_goal_count,
            totalGoalCount: element.total_goal_count,
            homeTeamGoalCountHalfTime: element.home_team_goal_count_half_time,
            amt: 15,
          }
        })
        setData(filteredTeam)
      })
  }

  useEffect(() => {
    fetchDataGame()
    fetchDataTeam()
  }, [])

  return <Game dataGame={data} dataTeam={dataTeam} />
}

export default GameController
