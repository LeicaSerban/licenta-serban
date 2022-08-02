import React, { useEffect, useState } from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'

const GoalAssist = (props) => {
  const goalAssists = props.dataPlayer?.map((element) => {
    return {
      name: element.fullName,
      goalsOverall: element.goalsOverall,
      assistsOverall: element.assistsOverall,
      currentClub: element.currentClub,
      amt: element.amt,
    }
  })


  return (
    <div style={{ width: '100%', height: '40rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={goalAssists}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis type="number" domain={[0, 15]}/>
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="goalsOverall"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="assistsOverall" stroke="#82ca9d" />
          <Line type="monotone" dataKey="currentClub" stroke="#FFA500" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GoalAssist
