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

const Card = (props) => {
  const cards = props.dataCard?.map((element) => {
    return {
      name: element.fullName,
      yellowCardsOverall: element.yellowCardsOverall,
      redCardsOverall: element.redCardsOverall,
      currentClub: element.currentClub,
      amt: 5,
    }
  })

  return (
    <div style={{ width: '100%', height: '40rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cards}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="yellowCardsOverall"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="redCardsOverall" stroke="#82ca9d" />
          <Line type="monotone" dataKey="currentClub" stroke="#FFA500" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Card
