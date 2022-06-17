import Game from './Game'
import axios from 'axios'
import { useState, useEffect } from 'react'


const chartData = []

const GameController = () => {
  const [data, setData] = useState()
  //   const [chartData, setChartData] = useState([])

  const fetchData = () => {
    axios
      .get('http://localhost:3000/team/teams')
      .then((res) => res.data)
      .then((data) => {
        setData(data)
        
      })
  }

  if (data === undefined) {
    fetchData()
  }

  const addDataChart = () => {
    data?.forEach((element) => {
      chartData.push({
        name: element.team_name,
        winsHome: element.wins_home,
        winsAway: element.wins_away,
        amt: 15,
      })
    })
   
  }

  useEffect(() => {
    if (chartData.length === 0) {
      addDataChart()
    }
  }, [data])

  return (
      <Game data={chartData} />
  )
}

export default GameController
