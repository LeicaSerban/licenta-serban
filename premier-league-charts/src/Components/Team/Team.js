import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
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
import { getPaginationItemUtilityClass } from '@mui/material'

const Team = (props) => {
  const [winsArray, setWinsArray] = useState([])
  const [pointsGameArray, setPointsGameArray] = useState([])
  const [teamOption, setTeamOption] = useState([])

  

  const wins = props.data?.map((element) => {
    return {
      name: element.name,
      winsHome: element.winsHome,
      winsAway: element.winsAway,
      pointsPerGame: element.pointsPerGame,
      pointsPerGameHome: element.pointsPerGameHome,
      pointsPerGameAway: element.pointsPerGameAway,
      // amt: 15,
    }
  })

  useEffect(() => {
    if (wins) setTeamOption(wins)
  }, [props.data])

  const handleChangeTeam = (_, value) => {
    if (winsArray.filter((team) => team.name === value.name).length < 1) {
      setWinsArray([...winsArray, value])
    }

    if (pointsGameArray.filter((team) => team.name === value.name).length < 1)
      setPointsGameArray([...pointsGameArray, value])
  }

  const resetButton = () => {
   setWinsArray([]);
   setPointsGameArray([])
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
            data={winsArray}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 13]} />
            <Tooltip />
            <Legend />

            <Bar dataKey="winsHome" fill="#8884d8" />
            <Bar dataKey="winsAway" fill="#82ca9d" />
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
          onChange={handleChangeTeam}
          disablePortal
          id="combo-box-demo"
          options={teamOption}
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
            data={pointsGameArray}
            margin={{
              top: 5,
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

            <Bar dataKey="pointsPerGameHome" fill="#8884d8" />
            <Bar dataKey="pointsPerGameAway" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    
  )
}

export default Team
