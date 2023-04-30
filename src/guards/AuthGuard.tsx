import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useAuth from 'src/@core/hooks/useAuth'
import LoadingScreen from 'src/@core/layouts/components/shared-components/LoadingScreen'
import LoginPage from 'src/pages/pages/login'
type Props = {
  children: React.ReactNode
}
export default function AuthGuard({ children }: Props) {
  const { isAuthenticated, isInitialized } = useAuth()
  const { pathname, push } = useRouter()

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation)
    }
    if (isAuthenticated) {
      setRequestedLocation(null)
    }
  }, [isAuthenticated, pathname, push, requestedLocation])

  if (!isInitialized) {
    return <LoadingScreen />
  }
  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <LoginPage />
  }
  return <>{children}</>
}
