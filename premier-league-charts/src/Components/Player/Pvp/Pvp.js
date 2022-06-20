import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'



const Pvp = (props) => {
  const pvps = props.dataPvp?.map((element) => {
    return {
      key: element.key,
      fullName: element.fullName,
      goalsOverall: element.goalsOverall,
      assistsOverall: element.assistsOverall,
      cleanSheetsOverall: element.cleanSheetsOverall,
      concededOverall: element.concededOverall,
      amt: 5,
    }
  })

  

  const myChart = [
    {
      subject: 'Goals',
      A: pvps[0]?.goalsOverall,
      B: pvps[1]?.goalsOverall,
      fullMark: 40,
    },
    {
      subject: 'Conceded',
      A: pvps[0]?.concededOverall,
      B: pvps[1]?.concededOverall,
      fullMark: 40,
    },
    {
      subject: 'Clean Sheets',
      A: pvps[0]?.cleanSheetsOverall,
      B: pvps[1]?.cleanSheetsOverall,
      fullMark: 40,
    },
    {
      subject: 'Assists',
      A: pvps[0]?.assistsOverall,
      B: pvps[1]?.assistsOverall,
      fullMark: 40,
    },
    
  ]
  

  return (
    <div style={{ width: '100%', height: '40rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={myChart}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Pvp
