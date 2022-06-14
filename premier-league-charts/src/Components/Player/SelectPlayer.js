import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Player from './Player'


const SelectPlayer = (props) => {
  const [playerArray, setPlayerArray] = useState([])
  const handleChange = ( _, value) => {
      if(playerArray.filter((player) => player.fullName === value.fullName).length < 1)
      setPlayerArray([...playerArray, value])

  }



  return (
    <div className="selectPlayerContainer"style={{ display: "flex", width:"80%" }}>
      <div style={{ display: "flex", alignItems:"center", flexDirection:"column"}}>
        <div style={{ fontSize: "1.2rem", fontWeight: "700", padding: "1rem" }}>Add a player</div>
        <Autocomplete
          onChange={handleChange}
          disablePortal
          id="combo-box-demo"
          options={props.data}
          getOptionLabel={(option) => (option ? option.fullName : '')}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Player" />
          )}
        />
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
      <div style={{ display: "flex", flex:"1", justifyContent: "center", alignItems:"center"}}>
        <Player data={playerArray}/>
      </div>
    </div>
  )
}

export default SelectPlayer
