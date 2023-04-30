// ** React Imports
import { ReactElement, useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import BookOpenVariant from 'mdi-material-ui/BookOpenVariant'
import SwapHorizontalBold from 'mdi-material-ui/SwapHorizontalBold'
import SwapHorizontalVariant from 'mdi-material-ui/SwapHorizontalVariant'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import axios from 'axios'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const Icons = [
  <BookOpenVariant sx={{ fontSize: '1.75rem' }} />,
  <AccountOutline sx={{ fontSize: '1.75rem' }} />,
  <SwapHorizontalBold sx={{ fontSize: '1.75rem' }} />,
  <SwapHorizontalVariant sx={{ fontSize: '1.75rem' }} />,
]

type DataApi = {
  total: number
  title: string
  id: string
}
const renderStats = () => {
  const [statistics, setStatistics] = useState<DataApi[]>([])
  useEffect(() => {
    const data = async () => {
      const response = await axios.get('api/statistics')
      setStatistics(response.data)
    }
    data()
  }, [])

  return statistics.map((item: DataApi, index: number) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `primary.main`,
          }}
        >
          {Icons[index]}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.total}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = () => {
  return (
    <Card>
      <CardHeader
        title="Statistics"
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary', mr: 1 }}>
              Total 48.5% growth
            </Box>
            this week
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important',
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
