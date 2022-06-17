// import Player from './Player'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import SelectPlayerController from './SelectPlayerController'

// const chartData = []

// const TeamController = () => {
//   const [data, setData] = useState()

//   const fetchData = (event) => {
//     axios
//       .get('http://localhost:3000/player/players')
//       .then((res) => res.data)
//       .then((data) => {
//         setData(data)
//         console.log(data)
//       })
//   }

//   if (data === undefined) {
//     fetchData()
//   }

//   const addDataChart = () => {
//     data?.forEach((element) => {
//       if (element.position === 'Forward') {
//         chartData.push({
//           fullName: element.full_name,
//           age: element.age,
//           cleanSheetsHome: element.clean_sheets_home,
//           amt: 15,
//         })
//       }
//     })

//     console.log(chartData)
//   }

//   useEffect(() => {
//     if (chartData.length === 0) {
//       addDataChart()
//     }
//   }, [data])

//   return (
//     <div>
//       {' '}
//       <Player data={chartData} /> 
//       <SelectPlayerController />
//     </div>
//   )
// }

// export default TeamController
