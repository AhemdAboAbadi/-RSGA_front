const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const API_BASE_URL = NEXT_PUBLIC_API_BASE_URL

const ROWS_PRE_PAGE_OPTIONS = [20, 40, 80]

const COLORS = {
  grey: '#2f2f2f',
  greyLight: '#e0e0e0',
  greyLighter: '#fafafa',
}
const SPINNER_SIZE = {
  xs: '25',
  sm: '35',
  md: '45',
  lg: '65',
  xl: '75',
  xxl: '85',
}
const ROUTES = {
  home: '/',
  notFound: '/404',
  serverError: '/500',
  userList: '/userList',
  users: '/user/',
  bookDetails: '/bookDetails',
}
export { API_BASE_URL, ROWS_PRE_PAGE_OPTIONS, COLORS, SPINNER_SIZE, ROUTES }
