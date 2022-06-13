import SelectPlayer from './SelectPlayer'
import axios from 'axios'
import { useMemo, useState, useEffect } from 'react'



const SelectPlayerController = () => {
  const [data, setData] = useState([])

  const fetchData = () => {
    axios
      .get('http://localhost:3000/player/players')
      .then((res) => res.data)
      .then((data) => {
        const filteredData = data
          .filter((player) => player.current_club === 'Liverpool')
          .map((element) => {
            return {
              fullName: element.full_name,
              age: element.age,
              cleanSheetsHome: element.clean_sheets_home,
              amt: 15,
            }
          })
        setData(filteredData)
      })
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <SelectPlayer data={data} />
    </div>
  )
}

export default SelectPlayerController
