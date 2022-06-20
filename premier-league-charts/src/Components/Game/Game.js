import React, {useState, useEffect} from 'react'
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

const Game = (props) => {
  const [gamesArray, setGamesArray] = useState([])
  const [firstSelectedTeam, setFirstSelectedTeam] = useState(null)
  const [secondSelectedTeam, setSecondSelectedTeam] = useState(null)
  const [teamOptions, setTeamOptions] = useState([])

  useEffect(() => {
    setTeamOptions(props.dataTeam)
  },[props.dataTeam])
  
  // const handleChangePlayer = (_, value) => {
  //   if (
  //     gamesArray.filter((team) => team.teamName === value.teamName)
  //       .length < 1
  //   )
  //     setGamesArray([...gamesArray, value])
  // }

  const handleChangeTeam1 = (_, value) => {
    setFirstSelectedTeam(value ? value.teamName : null)
    setTeamOptions(teamOptions.filter((team) => 
      team.teamName !== value.teamName
    ))
  }

  const handleChangeTeam2 = (_, value) => {
      setSecondSelectedTeam(value ? value.teamName : null)
      setTeamOptions(teamOptions.filter((team) => 
      team.teamName !== value.teamName
    ))
  }

  const teamData = props.dataPvp?.map((element) => {
    return {
      key: element.key,
      fullName: element.fullName,
      goalsOverall: element.goalsOverall,
      assistsOverall: element.assistsOverall,
      cleanSheetsOverall: element.cleanSheetsOverall,
      concededOverall: element.concededOverall,
      amt: 5,
    }
  })

  return (
    <div style={{ display: "flex", width: "90%" }}>
      
      <div style={{ display: "flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
        <div style={{ fontSize: "1.2rem", fontWeight: "700", padding: "1rem" }}>Select teams</div>
        <Autocomplete
          onChange={handleChangeTeam1}
          disablePortal
          id="combo-box-demo"
          options={teamOptions}
          getOptionLabel={(option) => (option ? option.teamName : '')}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Home Team" />
          )}
        />
        <div style={{ fontSize: "1.2rem", fontWeight: "700", padding: "1rem" }}>vs</div>
        <Autocomplete
          onChange={handleChangeTeam2}
          disablePortal
          id="combo-box-demo"
          options={teamOptions}
          getOptionLabel={(option) => (option ? option.teamName : '')}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Away Team" />
          )}
        />
      </div>
      
      <div style={{ display: "flex", flex: "1", justifyContent: "center", alignItems: "center", width:"100%", height:"40rem" }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={null}
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
    
          <Bar dataKey="winsAway" fill="#8884d8" />
          <Bar dataKey="winsHome" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
     
    </div>
  )
}

export default Game
