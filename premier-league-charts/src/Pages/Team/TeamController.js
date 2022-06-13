import Team from './Team'
import axios from 'axios'
import { useState, useEffect } from 'react'


const chartData = []

const TeamController = () => {
  const [data, setData] = useState()
  //   const [chartData, setChartData] = useState([])

  const fetchData = () => {
    axios
      .get('http://localhost:3000/team/teams')
      .then((res) => res.data)
      .then((data) => {
        setData(data)
        console.log(data)
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
    console.log(chartData)
  }

  useEffect(() => {
    if (chartData.length === 0) {
      addDataChart()
    }
  }, [data])

  return (
    <div>
      {' '}
      <Team data={chartData} />{' '}
    </div>
  )
}

export default TeamController
