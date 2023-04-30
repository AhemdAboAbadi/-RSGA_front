import { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import { FormControlLabel } from '@mui/material'
import Switch from '@mui/material/Switch'
import axios from 'axios'

import { IAccountTab, ITabUserProfile, IFieldsInterface, IUserProfile } from '@utils/interfaces'
import userFormData from './InputUserFields.json'
import booksFormData from './InputBooksFields.json'
import { API_BASE_URL } from '@utils/constant'
// import { IUserProfile } from '@views/tables/interface'
import { notify } from '@core/utils/helpers'
import ErrorComponent from '@core/components/ErrorComponent'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 150,
  height: 150,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}))

const AccountTab = ({ isBookDetails, ...userData }: IAccountTab | any) => {
  const [, setDisplayData] = useState<IUserProfile | any>(userData)
  const [isError, setIsError] = useState<boolean>(false)

  const field = useMemo(() => {
    return isBookDetails ? booksFormData : userFormData
  }, [isBookDetails])

  const router = useRouter()

  const toggleUserStatus = async (id: number) => {
    try {
      const userDataAfterUpdate = await axios.put(`${API_BASE_URL}/users/${id}`, {
        ...userData,
        isDisable: !userData.isDisable,
      })
      setDisplayData(userDataAfterUpdate)
      notify('info', 'Disable User Successfully')
    } catch (err: any) {
      const { status } = err.response
      if (status === 404 || status === 500) {
        router.push(`${status}`)
      }
      setIsError(true)
    }
  }

  if (isError) {
    return <ErrorComponent />
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ImgStyled src={userData?.avatar} alt="Profile IMG" />
              {!isBookDetails && (
                <Box>
                  <FormControlLabel
                    control={
                      <Switch
                        onClick={() => {
                          toggleUserStatus(userData.id)
                        }}
                        defaultChecked={userData.isDisable}
                      />
                    }
                    label="Disable User"
                  />
                </Box>
              )}
            </Box>
          </Grid>
          {field.inputs.map((input: IFieldsInterface, index: number) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  type={input.type}
                  label={input.label}
                  disabled
                  defaultValue={userData[input.name as keyof ITabUserProfile]}
                />
              </Grid>
            )
          })}
        </Grid>
      </form>
    </CardContent>
  )
}

export default AccountTab
