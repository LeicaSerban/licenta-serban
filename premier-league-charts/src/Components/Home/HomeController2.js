import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import Home2 from './Home2'

const HomeController = () => {
  const [data, setData] = useState([])

  const fetchData = () => {
    axios
      .get('http://localhost:3000/league/Premier%20League')
      .then((res) => res.data)
      .then((data) => {
        
      
        setData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Fragment>
      <Home2 data={data} />
    </Fragment>
  )
}

export default HomeController
