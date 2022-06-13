import React, { useMemo, useEffect, useState } from 'react'

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
    <div className="selectPlayerContainer">
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
      <Player data={playerArray}/>
    </div>
  )
}

export default SelectPlayer
