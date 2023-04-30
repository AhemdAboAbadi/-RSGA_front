import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { ActionMap, AuthContextType, AuthState, AuthUser, UserCredentials } from 'src/@types/auth'
import { notify } from '../utils/helpers'
import { isCredentialMatched } from '../utils/auth'
import { cookies, removeCookie, setCookie } from '../utils/jwt'

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER',
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean
    user: AuthUser
  }
  [Types.Login]: {
    user: AuthUser
  }
  [Types.Logout]: undefined
}

export type JWTActions = ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>]

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      }
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }

    default:
      return state
  }
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

// ---------------------------------------------------------------------
type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(JWTReducer, initialState)
  const router = useRouter()

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = cookies.get('accessToken')

        if (accessToken) {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user: null,
            },
          })
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          })
        }
      } catch (err) {
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        })
      }
    }
    initialize()
  }, [])

  const login = async (email: string, password: string) => {
    const credentials: UserCredentials = {
      email,
      password,
    }
    const user = isCredentialMatched(credentials)

    if (user) {
      setCookie(credentials)
      notify('success', 'Login is successful')
      router.push('/')
      dispatch({
        type: Types.Login,
        payload: {
          user: credentials,
        },
      })
    } else {
      notify('error', 'Invalid email or password')
    }
    return
  }

  const logout = async () => {
    router.push('/pages/login')
    removeCookie('accessToken')
    dispatch({ type: Types.Logout })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
