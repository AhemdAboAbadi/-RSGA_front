import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import { notify } from '../../@core/utils/helpers'
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
  width: '90%',
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

const Governance = () => {
  // const handleSave = () => {
  //   console.log('save')
  //   notify('success', 'Saved successfully')
  // }

  const handleSaveInterMemberRelations = () => {
    notify('success', 'Saved successfully Supreme Council')
  }

  const handleSaveTheGeneralSecretariat = () => {
    notify('success', 'Saved successfully handleSaveTheGeneralSecretariat')
  }

  const handleSaveMinisterialCouncil = () => {
    notify('success', 'Saved successfully Ministerial Council')
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
      <h1>Governance</h1>
      <br />

      {/*Supreme Council */}
      <ContainerInterMemberRelations>
        <TextField
          sx={{
            width: '50%',
          }}
          type={'text'}
          label={'Supreme Council'}
          value={'Supreme Council'}
          disabled
        />
        <br />
        <ContainerInterMemberRelationsSub>
          <div
            style={{
              width: '100%',
            }}
          >
            <ContainerBoxTextAreas>
              <LabelStyle>
                Supreme Council brief <strong>English</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Supreme Council brief English (this will appear in the home page)"
                style={{ width: '100%', maxHeight: '300' }}
              />
            </ContainerBoxTextAreas>

            <ContainerBoxTextAreas>
              <LabelStyle>
                Supreme Council brief <strong>Arabic</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Supreme Council brief Arabic (this will appear in the home page)"
                style={{ width: '100%', maxHeight: '300' }}
              />
            </ContainerBoxTextAreas>
          </div>
          <div
            style={{
              width: '100%',
            }}
          >
            <ContainerBoxTextAreas>
              <LabelStyle>
                Supreme Council more detailed <strong>English</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Supreme Council more detailed English (this will appear in the goverance-members page)"
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
            <ContainerBoxTextAreas>
              <LabelStyle>
                Supreme Council more detailed <strong>English</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Supreme Council more detailed English (this will appear in the goverance-members page)"
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
          </div>
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
        Save Supreme Council
      </ButtonSave>
      <Divider />

      {/*Ministerial Council */}
      <ContainerInterMemberRelations>
        <TextField
          sx={{
            width: '50%',
          }}
          type={'text'}
          label={'Ministerial Council'}
          value={'Ministerial Council'}
          disabled
        />
        <br />
        <ContainerInterMemberRelationsSub>
          <div
            style={{
              width: '100%',
            }}
          >
            <ContainerBoxTextAreas>
              <LabelStyle>
                Ministerial Council brief <strong>English</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Ministerial Council brief English (this will appear in the home page) "
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>

            <ContainerBoxTextAreas>
              <LabelStyle>
                Ministerial Council brief <strong>Arabic</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Ministerial Council brief Arabic (this will appear in the home page) "
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
          </div>

          <div
            style={{
              width: '100%',
            }}
          >
            <ContainerBoxTextAreas>
              <LabelStyle>
                Ministerial Council more detailed <strong>English</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Ministerial Council more detailed English (this will appear in the goverance-members page) "
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>

            <ContainerBoxTextAreas>
              <LabelStyle>
                Ministerial Council more detailed <strong>Arabic</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="Ministerial Council more detailed Arabic (this will appear in the goverance-members page) "
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
          </div>
        </ContainerInterMemberRelationsSub>
      </ContainerInterMemberRelations>

      <ButtonSave
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('save')

          handleSaveMinisterialCouncil()
        }}
      >
        Save Ministerial Council
      </ButtonSave>
      <Divider />

      {/*TheGeneralSecretariat */}
      <ContainerInterMemberRelations>
        <TextField
          sx={{
            width: '50%',
          }}
          type={'text'}
          label={'TheGeneralSecretariat'}
          value={'TheGeneralSecretariat'}
          disabled
        />
        <br />
        <ContainerInterMemberRelationsSub>
          <div
            style={{
              width: '100%',
            }}
          >
            <ContainerBoxTextAreas>
              <LabelStyle>
                TheGeneralSecretariat brief <strong>English</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="TheGeneralSecretariat brief English (this will appear in the home page) "
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
            <ContainerBoxTextAreas>
              <LabelStyle>
                TheGeneralSecretariat brief <strong>Arabic</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="TheGeneralSecretariat brief Arabic (this will appear in the home page) "
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
          </div>

          <div
            style={{
              width: '100%',
            }}
          >
            <ContainerBoxTextAreas>
              <LabelStyle>
                TheGeneralSecretariat more detailed <strong>English</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="TheGeneralSecretariat more detailed English (this will appear in the goverance-members page)"
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
            <ContainerBoxTextAreas>
              <LabelStyle>
                TheGeneralSecretariat more detailed <strong>Arabic</strong>
              </LabelStyle>
              <TextareaAutosizeStyled
                aria-label="minimum height"
                minRows={15}
                placeholder="TheGeneralSecretariat more detailed Arabic (this will appear in the goverance-members page)"
                style={{ width: '100%' }}
              />
            </ContainerBoxTextAreas>
          </div>
        </ContainerInterMemberRelationsSub>
      </ContainerInterMemberRelations>

      <ButtonSave
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('save')

          handleSaveTheGeneralSecretariat()
        }}
      >
        Save TheGeneralSecretariat
      </ButtonSave>
    </div>
  )
}

export default Governance
