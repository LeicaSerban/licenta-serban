import React, {useState} from 'react'
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

const Team = (props) => {
    const [teamArray, setTeamArray] = useState([])
  const array = []

  const data = props.data.map(element => {
            return {name: element.name, winsHome: element.winsHome, winsAway: element.winsAway, amt: element.amt}
  })
  const handleChange = ( _, value) => {
      if(teamArray.filter((team) => team.fullName === value.fullName).length < 1)
      setTeamArray([...teamArray, value])

  }

  array.push(props.data)
  return (
    <div style={{ display: "flex", width: "90%" }}>
       <div style={{ display: "flex", flex: "1", justifyContent: "center", alignItems: "center", width:"100%", height:"40rem" }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
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
      
      <div style={{ display: "flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
        <div style={{ fontSize: "1.2rem", fontWeight: "700", padding: "1rem" }}>Select a team</div>
        <Autocomplete
          onChange={handleChange}
          disablePortal
          id="combo-box-demo"
          options={props.data}
          getOptionLabel={(option) => (option ? option.fullName : '')}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Team" />
          )}
        />
      </div>
      
      <div style={{ display: "flex", flex: "1", justifyContent: "center", alignItems: "center", width:"100%", height:"40rem" }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
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

export default Team
