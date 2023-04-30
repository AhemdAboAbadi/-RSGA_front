import React from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// ** Demo Components Imports
import TableStickyHeader from '@views/tables/TableStickyHeader'
import { BookColumns } from '@views/tables/BookColumns'

const BookList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableStickyHeader
            arrayToSearch={['owner', 'name', 'author']}
            columns={BookColumns}
            endpointForFetch={'books'}
            pageDetails={'bookDetails'}
            errorMsg={'No Books Found'}
            errorImg={'/images/noBook.png'}
            title={'Book List'}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default BookList
