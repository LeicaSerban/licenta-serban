import SelectGoalAssist from './GoalAssists/SelectGoalAssist'
import SelectCard from './Card/SelectCard'
import SelectPvp from './Pvp/SelectPvp'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'

const SelectPlayerController = () => {
  const [dataPlayer, setDataPlayer] = useState([])
  const [dataCard, setDataCard] = useState([])
  const [dataTeam, setDataTeam] = useState([])
  const [dataPvp, setDataPvp] = useState([])


  const fetchDataPlayer = () => {
    axios
      .get('http://localhost:3000/player/players')
      .then((res) => res.data)
      .then((data) => {
        const filteredPlayer = data.map((element) => {
          return {
            key: element._id,
            fullName: element.full_name,
            goalsOverall: element.goals_overall,
            assistsOverall: element.assists_overall,
            currentClub: element.current_club,
            amt: 15,
          }
        })
        setDataPlayer(filteredPlayer)
      })
  }

  const fetchDataCard = () => {
    axios
      .get('http://localhost:3000/player/players')
      .then((res) => res.data)
      .then((data) => {
        const filteredPlayer = data.map((element) => {
          return {
            key: element._id,
            fullName: element.full_name,
            yellowCardsOverall: element.yellow_cards_overall,
            redCardsOverall: element.red_cards_overall,
            currentClub: element.current_club,
            position: element.position,
            amt: 5,
          }
        })
        setDataCard(filteredPlayer)
      })
  }

  const fetchDataPvp = () => {
    axios
      .get('http://localhost:3000/player/players')
      .then((res) => res.data)
      .then((data) => {
        const filteredPlayer = data.map((element) => {
          return {
            key: element._id,
            fullName: element.full_name,
            goalsOverall: element.goals_overall,
            assistsOverall: element.assists_overall,
            cleanSheetsOverall: element.clean_sheets_overall,
            concededOverall: element.conceded_overall,
            amt: 5,
          }
        })
        
        setDataPvp(filteredPlayer)
      })
  }

  const fetchDataTeam = () => {
    axios
      .get('http://localhost:3000/team/teams')
      .then((res) => res.data)
      .then((data) => {
        const filteredTeam = data.map((element) => {
          return {
            teamName: element.common_name,
          }
        })
        setDataTeam(filteredTeam)
      })
  }

  useEffect(() => {
    fetchDataPlayer()
    fetchDataCard()
    fetchDataTeam()
    fetchDataPvp()
  }, [])

  return (
    <Fragment>
      <SelectGoalAssist dataPlayer={dataPlayer} dataTeam={dataTeam} />
      <SelectCard dataCard={dataCard} dataTeam={dataTeam} />
      <SelectPvp dataPvp={dataPvp} dataTeam={dataTeam}/>
    </Fragment>
  )
}

export default SelectPlayerController
