import { useEffect, useState } from 'react'
import axios from 'axios'
// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'

export type DataApi = {
  date: string
  value: number
  id: string
}
export type Api = {
  data: DataApi
  title: string
  id: string
}
const Dashboard = () => {
  const [Data, setData] = useState<Api[]>([])
  useEffect(() => {
    const data = async () => {
      const response = await axios.get('api/chart')
      setData(response.data)
    }
    data()
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <StatisticsCard />
        </Grid>
        {Data.map((item: Api, index: number) => (
          <Grid key={index} item xs={12} md={6} lg={6}>
            <WeeklyOverview title={item.title} data={item.data} />
          </Grid>
        ))}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
