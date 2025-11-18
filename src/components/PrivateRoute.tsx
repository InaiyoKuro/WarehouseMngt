import { type JSX } from 'react'
import { isAuthenticated } from '../utils/CheckAuth'
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

const PrivateRoute: React.FC<Props> = ({ children }) => {

  if(!isAuthenticated()){
    return <Navigate to="/login" />
  }

  return children
}

export default PrivateRoute