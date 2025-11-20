import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

type Props = {
  children: React.ReactNode;
  roles?: string[]
}

const PrivateRoute = ({ children, roles = [] }: Props) => {
  const { user } = useAuth()
  console.log(user)

  const role = user?.role || ""

  if(roles.length > 0 && !roles.includes(role)){
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default PrivateRoute