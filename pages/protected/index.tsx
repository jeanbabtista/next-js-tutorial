import { useSession } from 'next-auth/react'
import NextError from 'next/error'

const ProtectedRoute = () => {
  const { data: session, status } = useSession()

  switch (status) {
    case 'loading':
      return <p>Loading...</p>
    case 'unauthenticated':
      return <p>You are not logged in.</p>
    case 'authenticated':
      return <p>Welcome, {session.user?.name}</p>
    default:
      return <NextError statusCode={404} />
  }
}

export default ProtectedRoute
