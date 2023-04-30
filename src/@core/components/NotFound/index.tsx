import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { COLORS } from '@utils/constant'
import { INotFoundProps } from '@utils/interfaces'

const notFound = ({ imageUrl, title }: INotFoundProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        alignSelf: 'center',
        height: '50vh',
        width: '100%',
      }}
    >
      <Image src={imageUrl} alt={title} height={350} width={350} />
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: COLORS.grey,
        }}
        variant="h3"
      >
        {title}
      </Typography>
    </Box>
  )
}

export default notFound
