import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
import styles from './Team.module.css'

const Team = (props) => {
  const array = []

  const data = props.data.map(element => {
            return {name: element.name, winsHome: element.winsHome, winsAway: element.winsAway, amt: element.amt}
          })

  array.push(props.data)
  return (
    <div className={styles.team}>
      <ResponsiveContainer  width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
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
  )
}

export default Team
