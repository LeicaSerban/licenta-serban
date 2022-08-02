import React, { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const Team = (props) => {
  const [possessArray, setPossessArray] = useState([])
  const [shotArray, setShotArray] = useState([])
  const [shotOption, setShotOption] = useState([])
  

  const shots = props.dataShot?.map((element) => {
    return {
      name: element.name,
      shotsHome: element.shotsHome,
      shotsAway: element.shotsAway,
      shotsOnTarget: element.shotsOnTarget,
      averagePossession: element.averagePossession,
      amt: 15,
    }
  })

  useEffect(() => {
    if (shots) setShotOption(shots)
   
  }, [ props.dataShot])

  

  const handleChangeShot = (_, value) => {
    if (shotArray.filter((team) => team.name === value.name).length < 1) {
      setShotArray([...shotArray, value])
    }

    if (possessArray.filter((team) => team.name === value.name).length < 1)
      setPossessArray([...possessArray, value])
  }

  const resetButton = () => {
   setShotArray([]);
   setPossessArray([])
  }

  return (
    <div style={{ display: 'flex', width: '90%' }}>
      <div
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '40rem',
        }}
      >
         <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={possessArray}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="shotsHome" stackId="a" fill="#8884d8" />
          <Bar dataKey="shotsAway" stackId="a" fill="#82ca9d" />
          <Bar dataKey="shotsOnTarget" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: '1.2rem', fontWeight: '700', padding: '1rem' }}>
          Select a team
        </div>
        <Autocomplete
          onChange={handleChangeShot}
          disablePortal
          id="combo-box-demo"
          options={shotOption}
          getOptionLabel={(option) => (option ? option.name : '')}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Team" />
          )}
        />
        <div style={{ marginTop: '1rem'}}>
          <Button
            onClick={resetButton}
            variant="contained"
          >
            Reset Teams
          </Button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '40rem',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={possessArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis type="number" domain={[0, 100]}/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="averagePossession" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>

    
  )
}

export default Team
