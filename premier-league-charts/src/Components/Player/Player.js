import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
import styles from './Player.module.css'

const Player = (props) => {
  const array = []

  const data = props.data?.map((element) => {
    return {
      name: element.fullName,
      age: element.age,
      cleanSheetsHome: element.cleanSheetsHome,
      amt: element.amt,
    }
  })

  array.push(props.data)
  return (
    <div style={{width:"100%", height:"40rem"}}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="age"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="cleanSheetsHome" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Player
