// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Account from 'mdi-material-ui/Account'
import Book from 'mdi-material-ui/Book'
// import BookIcon from '@mui/icons-material/Book';
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

    // {
    //   title: 'User List',
    //   icon: Account,
    //   path: '/userList',
    // },
    // {
    //   title: 'Book List',
    //   icon: Book,
    //   path: '/BookList',
    // },
    {
      title: 'Vision',
      icon: Book,
      path: '/vision',
    },
    {
      title: 'Collaboration',
      icon: Book,
      path: '/collaboration',
    },
    {
      title: 'Governance',
      icon: Book,
      path: '/governance',
    },
  ]
}

export default navigation
