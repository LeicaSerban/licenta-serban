// import React, { useEffect, useState } from 'react'

// import TextField from '@mui/material/TextField'
// import Autocomplete from '@mui/material/Autocomplete'
// import GameSelect from './GameSelect'

// const SelectGame = (props) => {
 
  
//   return (
//     <div
//       className="selectPlayerContainer"
//       style={{ display: 'flex', width: '80%' }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           flexDirection: 'column',
//         }}
//       >
//         <div style={{ fontSize: '1.2rem', fontWeight: '700', padding: '1rem' }}>
//           Add a player
//         </div>
//         <Autocomplete
//           onChange={handleChangePlayer}
//           disablePortal
//           id="combo-box-demo"
//           options={playerOption}
//           getOptionLabel={(option) => (option ? option.fullName : '')}
//           sx={{ width: 300 }}
//           renderInput={(params) => (
//             <TextField {...params} label="Select Player" />
//           )}
//         />
//         <div style={{ fontSize: '1.2rem', fontWeight: '700', padding: '1rem' }}>
//           Select a team
//         </div>
//         <Autocomplete
//           onChange={handleChangeTeam}
//           disablePortal
//           id="combo-box-demo"
//           options={props.dataTeam}
//           getOptionLabel={(option) => (option ? option?.teamName : '')}
//           sx={{ width: 300 }}
//           renderInput={(params) => (
//             <TextField {...params} label="Select Team" />
//           )}
//         />
//       </div>
//       <div
//         style={{
//           display: 'flex',
//           flex: '1',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Pvp dataPvp={pvpArray} />
//       </div>
//     </div>
//   )
// }

// export default SelectGame
