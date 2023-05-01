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
  padding: '0.5rem',
}))

const ContainerInterMemberRelations = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
}))

const ContainerInterMemberRelationsSub = styled(Box)(({ theme }) => ({
  // backgroundColor: 'red',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
}))

const ContainerBoxTextAreas = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '1rem',
  width: '49%',
}))

const Divider = styled('hr')(({ theme }) => ({
  marginTop: '3rem',
  marginBottom: '3rem',
  width: '100%',
  height: '1px',
  backgroundColor: '#ccc',
}))

const LabelStyle = styled('label')(({ theme }) => ({
  fontSize: '1rem',
  // fontWeight: 'bold',
  marginBottom: '0.5rem',
}))

const Vision = () => {
  // const handleSave = () => {
  //   console.log('save')
  //   notify('success', 'Saved successfully')
  // }

  const handleSaveInterMemberRelations = () => {
    notify('success', 'Saved successfully Inter-member-relations')
  }

  const handleSaveInterMemberCooperation = () => {
    notify('success', 'Saved successfully handleSaveInterMemberCooperation')
  }

  const handleSavePartnerships = () => {
    notify('success', 'Saved successfully Partnerships')
  }

  return (
    <div>
      {/* <TextField
        sx={{
          width: '50%',
        }}
        type={'text'}
        label={'Collaboration'}
        value={'Collaboration'}
        disabled
      /> */}
      <h1>Collaboration</h1>
      <br />

      {/*Inter-member-relations */}
      <ContainerInterMemberRelations>
        <TextField
          sx={{
            width: '50%',
          }}
          type={'text'}
          label={'Inter-member-relations'}
          value={'Inter-member-relations'}
          disabled
        />
        <br />
        <ContainerInterMemberRelationsSub>
          <ContainerBoxTextAreas>
            <LabelStyle>
              Inter-member-relations brief <strong>English</strong>
            </LabelStyle>
            <TextareaAutosizeStyled
              aria-label="minimum height"
              minRows={15}
              placeholder="Inter-member-relations brief English (this will appear in the home page)"
              style={{ width: '100%', maxHeight: '300' }}
            />
          </ContainerBoxTextAreas>

          <ContainerBoxTextAreas>
            <LabelStyle>
              Inter-member-relations more detailed <strong>Arabic</strong>
            </LabelStyle>
            <TextareaAutosizeStyled
              aria-label="minimum height"
              minRows={15}
              placeholder="Inter-member-relations more detailed Arabic (this will appear in the collaboration page)"
              style={{ width: '100%' }}
            />
          </ContainerBoxTextAreas>
        </ContainerInterMemberRelationsSub>
      </ContainerInterMemberRelations>

      <ButtonSave
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('save')
          handleSaveInterMemberRelations()
        }}
      >
        Save Inter-member-relations
      </ButtonSave>
      <Divider />

      {/*Partnerships */}
      <ContainerInterMemberRelations>
        <TextField
          sx={{
            width: '50%',
          }}
          type={'text'}
          label={'Partnerships'}
          value={'Partnerships'}
          disabled
        />
        <br />
        <ContainerInterMemberRelationsSub>
          <ContainerBoxTextAreas>
            <LabelStyle>
              Partnerships brief <strong>English</strong>
            </LabelStyle>
            <TextareaAutosizeStyled
              aria-label="minimum height"
              minRows={15}
              placeholder="Partnerships brief English (this will appear in the home page) "
              style={{ width: '100%' }}
            />
          </ContainerBoxTextAreas>

          <ContainerBoxTextAreas>
            <LabelStyle>
              Partnerships more detailed <strong>Arabic</strong>
            </LabelStyle>
            <TextareaAutosizeStyled
              aria-label="minimum height"
              minRows={15}
              placeholder="Partnerships more detailed Arabic (this will appear in the collaboration page) "
              style={{ width: '100%' }}
            />
          </ContainerBoxTextAreas>
        </ContainerInterMemberRelationsSub>
      </ContainerInterMemberRelations>

      <ButtonSave
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('save')

          handleSavePartnerships()
        }}
      >
        Save Partnerships
      </ButtonSave>
      <Divider />

      {/*Inter-member cooperation */}
      <ContainerInterMemberRelations>
        <TextField
          sx={{
            width: '50%',
          }}
          type={'text'}
          label={'Inter-member cooperation'}
          value={'Inter-member cooperation'}
          disabled
        />
        <br />
        <ContainerInterMemberRelationsSub>
          <ContainerBoxTextAreas>
            <LabelStyle>
              Inter-member cooperation brief <strong>English</strong>
            </LabelStyle>
            <TextareaAutosizeStyled
              aria-label="minimum height"
              minRows={15}
              placeholder="Inter-member cooperation brief English (this will appear in the home page) "
              style={{ width: '100%' }}
            />
          </ContainerBoxTextAreas>

          <ContainerBoxTextAreas>
            <LabelStyle>
              Inter-member cooperation more detailed <strong>Arabic</strong>
            </LabelStyle>
            <TextareaAutosizeStyled
              aria-label="minimum height"
              minRows={15}
              placeholder="Inter-member cooperation more detailed Arabic (this will appear in the collaboration page)"
              style={{ width: '100%' }}
            />
          </ContainerBoxTextAreas>
        </ContainerInterMemberRelationsSub>
      </ContainerInterMemberRelations>

      <ButtonSave
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('save')

          handleSaveInterMemberCooperation()
        }}
      >
        Save Inter-member cooperation
      </ButtonSave>
    </div>
  )
}

export default Vision
