import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { ISpinnerProps, ISpinnerSize } from '@utils/interfaces'
import { SPINNER_SIZE } from '@utils/constant'

const Spinner = ({ size }: ISpinnerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
      }}
    >
      <CircularProgress size={SPINNER_SIZE[size as keyof ISpinnerSize]} />
    </Box>
  )
}

export default Spinner
