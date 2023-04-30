import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { useRouter } from 'next/router'
import { ROUTES } from '@utils/constant'

const ErrorComponent = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1">Oops! Something wrong happened. Please try again later. </Typography>
      <Button variant="contained" color="primary" onClick={() => router.push(ROUTES.home)}>
        Go to Home
      </Button>
    </Box>
  )
}

export default ErrorComponent
