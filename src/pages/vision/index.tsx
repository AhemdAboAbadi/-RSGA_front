import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import { notify } from '../../../src/@core/utils/helpers'
import { styled } from '@mui/material/styles'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}))

const TextareaAutosizeStyled = styled(TextareaAutosize)(({ theme }) => ({
  borderRadius: '4px',
  padding: '8px',
  width: '100%',
  fontSize: '1rem',
  lineHeight: '1.5',
  maxHeight: '300px',
  resize: 'none',
  '&:focus': {
    outline: 'none',
    border: '1px solid #ccc',
  },
}))

const TextFieldContainerStyled = styled(TextField)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '2.2rem',
  width: '90%',
  marginRight: '2rem',
}))

const ButtonSave = styled(Button)(({ theme }) => ({
  marginTop: '2rem',
  fontSize: '1rem',
  width: '10rem',
  padding: '0.5rem',
}))

const Vision = () => {
  const handleSave = () => {
    console.log('save')
    notify('success', 'Saved successfully')
  }

  return (
    <div>
      {/* <TextField
        sx={{
          width: '50%',
        }}
        type={'text'}
        label={'Authority and vision'}
        value={'Authority and vision'}
        disabled
      /> */}
      <h1>Authority and vision</h1>
      <br />
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '2.2rem',
            width: '90%',
            marginRight: '2rem',
          }}
        >
          <label htmlFor="authority">
            Authority and vision <strong>English</strong>
          </label>
          <TextareaAutosizeStyled
            aria-label="minimum height"
            minRows={15}
            placeholder="Enter your Authority and vision here English"
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '2.2rem',
            width: '90%',
            marginRight: '2rem',
          }}
        >
          <label htmlFor="authority">
            Authority and vision <strong>Arabic</strong>
          </label>
          <TextareaAutosizeStyled
            aria-label="minimum height"
            minRows={15}
            placeholder="Enter your Authority and vision here Arabic"
          />
        </div>
      </Container>

      <ButtonSave
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('save')

          handleSave()
        }}
      >
        Save
      </ButtonSave>
    </div>
  )
}

export default Vision
