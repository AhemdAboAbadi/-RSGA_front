import { UserCredentials } from 'src/@types/auth'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const setCookie = (accessToken: UserCredentials) => {
  cookies.set('accessToken', accessToken)
}

const removeCookie = (key: string) => {
  cookies.remove(key)
}
export { setCookie, removeCookie, cookies }
