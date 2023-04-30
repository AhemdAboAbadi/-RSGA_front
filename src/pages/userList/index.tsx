// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// ** Demo Components Imports
import TableStickyHeader from '@views/tables/TableStickyHeader'
import { columns } from '@views/tables/Columns'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableStickyHeader
            arrayToSearch={['phone', 'email', 'name', 'username']}
            columns={columns}
            endpointForFetch={'users'}
            pageDetails={'user'}
            errorImg={'/images/noUser.png'}
            errorMsg={'No Users Found'}
            title={'User List'}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
