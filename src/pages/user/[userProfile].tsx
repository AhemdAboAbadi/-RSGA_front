// ** React Imports
import { SyntheticEvent, useState } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'

import axios from 'axios'

import { IUsersInterfaceProps } from '@utils/interfaces'
import UserBooks from '@views/account-settings/UserBooks'
import { BookOutline } from 'mdi-material-ui'
import { API_BASE_URL } from '@utils/constant'
import 'react-datepicker/dist/react-datepicker.css'
import AccountTab from '@views/account-settings/AccountTab'

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const UserProfile = ({ userProfile }: IUsersInterfaceProps) => {
  const [tabValue, setTabValue] = useState<string>('account')

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  return (
    <Card>
      <TabContext value={tabValue}>
        <TabList
          onChange={handleChange}
          aria-label="account-settings tabs"
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value="account"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
          <Tab
            value="book"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BookOutline />
                <TabName>book</TabName>
              </Box>
            }
          />
        </TabList>
        {userProfile && (
          <TabPanel sx={{ p: 0 }} value="account">
            <AccountTab {...{ ...userProfile }} isBookDetails={false} />
          </TabPanel>
        )}
        <TabPanel sx={{ p: 0 }} value="book">
          <UserBooks userId={userProfile.id} />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default UserProfile

export const getServerSideProps = async (context: any) => {
  try {
    const userProfile = context.query.userProfile
    const response = await axios.get(`${API_BASE_URL}/users/${userProfile}`)
    return {
      props: {
        userProfile: response.data,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}
