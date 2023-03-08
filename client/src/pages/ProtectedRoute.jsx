import { Navigate } from 'react-router-dom'

// (1a) extract
const ProtectedRoute = ({ children, user }) => {
  // (1b) if not login > redirect back to /
  if (!user) {
    return <Navigate to='/' />
  }

  return children // (1c)
}

export default ProtectedRoute
