// ** React Imports
import { useState, ChangeEvent, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import CardHeader from '@mui/material/CardHeader'
import Magnify from 'mdi-material-ui/Magnify'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import axios from 'axios'

import { compareSearchValue } from '@utils/filterInputData'
import {
  ITableStickyHeaderComponentProps,
  IUserProfile,
  IUserColumn,
  IBookColumn,
} from '@utils/interfaces'

import { ROWS_PRE_PAGE_OPTIONS, API_BASE_URL, ROUTES } from '@utils/constant'
import NotFound from '@core/components/NotFound'
import Spinner from '@core/components/Spinner'
import Box from '@mui/material/Box'

const TableStickyHeader = ({
  arrayToSearch,
  columns,
  endpointForFetch,
  pageDetails,
  errorMsg,
  errorImg,
  title,
}: ITableStickyHeaderComponentProps) => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(ROWS_PRE_PAGE_OPTIONS[0])
  const [allData, setAllData] = useState([])
  const [displayedData, setDisplayedData] = useState<IUserProfile[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    const searchValueWithOutSpaces = searchValue.trim() // remove spaces

    const resultFilter = allData.filter((data: IUserProfile) =>
      compareSearchValue(searchValueWithOutSpaces, data, arrayToSearch)
    )
    setDisplayedData(resultFilter)
  }

  const handelGetData = useCallback(async () => {
    await axios
      .get(`${API_BASE_URL}/${endpointForFetch}`)
      .then((res) => {
        setAllData(res.data)
        setDisplayedData(res.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        router.push(ROUTES.notFound)
      })
  }, [endpointForFetch, router])

  useEffect(() => {
    handelGetData()
  }, [handelGetData])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          padding: '5px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }} />
        <TextField
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          onChange={searchInputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Magnify fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <TableContainer sx={{ height: '70vh' }}>
        {!isLoading ? (
          displayedData.length > 0 ? (
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column: IBookColumn | IUserColumn) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: IUserProfile) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        onClick={() => {
                          router.push(`${pageDetails}/${row.id}`)
                        }}
                      >
                        {columns.map((column: IBookColumn | IUserColumn) => {
                          const value = row[column.id as keyof IUserProfile]
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          ) : (
            <NotFound imageUrl={errorImg} title={errorMsg} />
          )
        ) : (
          <Spinner size="xxl" />
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={ROWS_PRE_PAGE_OPTIONS}
        component="div"
        count={allData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
