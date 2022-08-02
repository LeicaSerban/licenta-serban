import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import Home from './Home'

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
      <Home data={data} />
    </Fragment>
  )
}

export default HomeController
