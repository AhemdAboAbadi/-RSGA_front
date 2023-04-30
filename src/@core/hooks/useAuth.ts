import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth'
//

// ----------------------------------------------------------------------

const useAuth = () => {
  const context = useContext(AuthContext)
  useEffect(() => {
    if (!context) throw new Error('Auth context must be use inside AuthProvider')
  }, [context])
  return context
}

export default useAuth
