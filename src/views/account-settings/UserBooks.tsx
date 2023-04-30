/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

import axios from 'axios'
import { API_BASE_URL, COLORS, ROUTES } from '@utils/constant'
import { IUserBookId, IUserBook } from '@utils/interfaces'
import Spinner from '@core/components/Spinner'
import NotFound from '@core/components/NotFound'

const UserBooks = ({ userId }: IUserBookId) => {
  const [bookData, setBookData] = useState<IUserBook[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/Books`)
        setBookData(response.data)
        setIsLoading(false)
      } catch {
        router.push(ROUTES.notFound)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [userId])

  const handelClickBookDetail = (bookId: string) => {
    router.push(`/${ROUTES.bookDetails}/${bookId}`)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          {isLoading ? (
            <Spinner size="xl" />
          ) : bookData.length > 0 ? (
            bookData.map((book: IUserBook) => (
              <Grid item xs={12} sm={6} md={4} key={book.id.toString()}>
                <Box
                  onClick={() => handelClickBookDetail(book.id.toString())}
                  style={{
                    cursor: 'pointer',
                    border: `1px solid ${COLORS.greyLight}`,
                    borderRadius: '5px',
                    padding: '10px',
                    margin: '10px',
                    backgroundColor: COLORS.greyLighter,
                  }}
                >
                  <Box>
                    <img
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '5px',
                      }}
                      src={book.picture}
                      alt={book.name}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2">{book.author}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          ) : (
            <NotFound imageUrl="/images/noBook.png" title="No Books" />
          )}
        </Grid>
      </form>
    </CardContent>
  )
}

export default UserBooks
