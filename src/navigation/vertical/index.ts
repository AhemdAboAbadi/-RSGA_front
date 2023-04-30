// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Account from 'mdi-material-ui/Account'
import Book from 'mdi-material-ui/Book'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/',
    },

    {
      sectionTitle: 'user',
    },

    {
      title: 'User List',
      icon: Account,
      path: '/userList',
    },
    {
      title: 'Book List',
      icon: Book,
      path: '/BookList',
    },
  ]
}

export default navigation
