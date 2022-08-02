import React, { useState, useEffect, Fragment } from 'react'
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

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Game = (props) => {
  const [gamesArray, setGamesArray] = useState([])
  const [firstSelectedTeam, setFirstSelectedTeam] = useState(null)
  const [secondSelectedTeam, setSecondSelectedTeam] = useState(null)

  const [teamOptions, setTeamOptions] = useState([])
  const [matches, setMatchesArray] = useState([])
  const [awayArray, setAwayArray] = useState([])

  useEffect(() => {
    setTeamOptions(props.dataTeam)
  }, [props.dataTeam])

  const handleChangeHome = (_, value) => {
    setFirstSelectedTeam(value ? value.teamName : null)
    setTeamOptions(
      props.dataTeam.filter((team) => team.teamName !== value?.teamName)
    )
    const homeData = props.dataGame
      ?.filter((homeTeam) => homeTeam.homeTeamName === value?.teamName)
      .filter(
        (homeTeam) =>
          !secondSelectedTeam || homeTeam.awayTeamName === secondSelectedTeam
      )
    setMatchesArray(homeData)
  }

  const handleChangeAway = (_, value) => {
    setSecondSelectedTeam(value ? value.teamName : null)
    setTeamOptions(
      props.dataTeam.filter((team) => team.teamName !== value?.teamName)
    )
    const awayData = props.dataGame
      ?.filter((awayTeam) => awayTeam.awayTeamName === value?.teamName)
      .filter(
        (awayTeam) =>
          !firstSelectedTeam || awayTeam.homeTeamName === firstSelectedTeam
      )

    setMatchesArray(awayData)
    
  }

  // const homeData = props.dataGame?.map((element) => {
  //   return {
  //     key: element.key,
  //     fullName: element.fullName,
  //     goalsOverall: element.goalsOverall,
  //     assistsOverall: element.assistsOverall,
  //     cleanSheetsOverall: element.cleanSheetsOverall,
  //     concededOverall: element.concededOverall,
  //     amt: 5,
  //   }
  // })

  return (
    <Fragment>
      <div style={{ display: 'flex', width: '90%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{ fontSize: '1.2rem', fontWeight: '700', padding: '1rem' }}
          >
            Select teams
          </div>
          <Autocomplete
            onChange={handleChangeHome}
            disablePortal
            id="combo-box-demo"
            options={teamOptions}
            getOptionLabel={(option) => (option ? option.teamName : '')}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Home Team" />
            )}
          />
          <div
            style={{ fontSize: '1.2rem', fontWeight: '700', padding: '1rem' }}
          >
            vs
          </div>
          <Autocomplete
            onChange={handleChangeAway}
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
              data={matches}
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

              <Bar dataKey="homeTeamGoalCount" fill="#8884d8" />
              <Bar dataKey="awayTeamGoalCount" fill="#82ca9d" />
              <Bar dataKey="homeTeamYellowCards" fill="#0066ff" />
              <Bar dataKey="awayTeamYellowCards" fill="#8000ff" />
              <Bar dataKey="homeTeamFouls" fill="#ff00bf" />
              <Bar dataKey="awayTeamFouls" fill="#ff0040" />
              <Bar dataKey="homeTeamCornerCount" fill="#269900" />
              <Bar dataKey="awayTeamCornerCount" fill="#cc6600" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>dateGMT</TableCell>
            <TableCell align="right">referee</TableCell>
            <TableCell align="right">stadiumName</TableCell>
            <TableCell align="right">Home Possession</TableCell>
            <TableCell align="right">Away Possession</TableCell>
            <TableCell align="right">Home Team</TableCell>
            <TableCell align="right">Away Team</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((team) => (
            <TableRow
              key={team.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {team.dateGMT}
              </TableCell>
              <TableCell align="right">{team.referee}</TableCell>
              <TableCell align="right">{team.stadiumName}</TableCell>
              <TableCell align="right">{team.homeTeamPossession + `%`}</TableCell>
              <TableCell align="right">{team.awayTeamPossession + `%`}</TableCell>
              <TableCell align="right">{team.homeTeamName}</TableCell>
              <TableCell align="right">{team.awayTeamName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </Fragment>
  )
}

export default Game
