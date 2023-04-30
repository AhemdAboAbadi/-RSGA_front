export interface IUserColumn {
  id: 'name' | 'createdAt' | 'phone' | 'email' | 'username'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}
export interface IBookColumn {
  id: 'name' | 'createdAt' | 'author' | 'owner' | 'credits'
  label: string
  minWidth?: number
  align?: 'right' | 'center'
  format?: (value: number) => string
}

export interface Data {
  id?: number
  name: string
  email: string
  phone: number
  createdAt: number
  username: string
}

export interface IUserProfile {
  createdAt: string
  name: string
  avatar: string
  like: number
  username: string
  blogs: number
  phone: string
  email: string
  id: number
  isDisable: boolean
}

export type ITabUserProfile = Omit<IUserProfile, 'like' | 'username' | 'blogs' | 'phone' | 'email'>

export interface IAccountTab extends ITabUserProfile {
  isBookDetails: boolean
}

export interface IUsersInterfaceProps {
  userProfile: IUserProfile
}

export interface IUserBookId {
  userId: number
}

export interface IUserBook {
  [x: string]: string | undefined
  id: string
  name: string
  author: string
  category: string
  createdAt: string
  owner: string
  credits: string
  userId: string
  avatar: string
}

export interface IUserBooksInterfaceProps {
  bookDetails: IUserBook
}

export interface ITableStickyHeaderComponentProps {
  arrayToSearch: string[]
  columns: IUserColumn[] | IBookColumn[] | any
  endpointForFetch: string
  pageDetails: string
  errorMsg: string
  errorImg: string
  title: string
}
export interface ISpinnerProps {
  size: string
}

export interface ISpinnerSize {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

export interface INotFoundProps {
  imageUrl: string
  title: string
}

export interface IFieldsInterface {
  name: string
  label: string
  type: string
  fullWidth: boolean
  disabled: boolean
}
