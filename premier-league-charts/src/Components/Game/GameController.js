
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
            id: element._id,
            dateGMT: element.date_GMT,
            attendance: element.attendance,
            referee: element.referee,
            stadiumName: element.stadium_name,
            homeTeamPossession: element.home_team_possession,
            awayTeamPossession: element.away_team_possession,
            homeTeamName: element.home_team_name,
            awayTeamName: element.away_team_name,
            homeTeamGoalCount: element.home_team_goal_count,
            awayTeamGoalCount: element.away_team_goal_count,
            homeTeamYellowCards: element.home_team_yellow_cards,
            awayTeamYellowCards: element.away_team_yellow_cards,
            homeTeamFouls: element.home_team_fouls,
            awayTeamFouls: element.away_team_fouls,
            homeTeamCornerCount: element.home_team_corner_count,
            awayTeamCornerCount: element.away_team_corner_count,
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
