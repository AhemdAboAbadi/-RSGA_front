import { UserCredentials } from 'src/@types/auth'

const staticData = { email: 'admin@admin.com', password: 'admin' }

const isCredentialMatched = ({ email, password }: UserCredentials) => {
  return email === staticData.email && password === staticData.password
}

export { isCredentialMatched }
