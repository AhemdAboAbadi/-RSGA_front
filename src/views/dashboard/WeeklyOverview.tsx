// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { DataApi } from 'src/pages'

const WeeklyOverview = (props: DataApi[] | any) => {
  const { data, title } = props
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { autoSelected: 'zoom' },
      stacked: false,
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
    },
    plotOptions: {
      area: { fillTo: 'origin' },
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper],
    },

    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main],

    xaxis: {
      categories: data?.map((item: any) => item.day) || [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      tickPlacement: 'between',
    },
    yaxis: {
      labels: {
        offsetX: -10,
        formatter: (value) => (value / 1).toFixed(0),
      },
    },
    noData: {
      text: 'No data found',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
    },
  }

  return (
    <Card>
      <CardHeader
        title={`Daily New ${title}`}
        titleTypographyProps={{
          sx: {
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important',
          },
        }}
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts
          type="area"
          height={250}
          options={options}
          series={[
            {
              data: data?.map((item: any) => item.value) || [],
            },
          ]}
        />
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
