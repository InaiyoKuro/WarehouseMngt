import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

type Props = {
  component: React.ComponentType<any>;
  roles?: string[]
}

const PrivateRoute = ({ component: Component, roles = [] }: Props) => {
  const { user } = useAuth()
  console.log(user)

  const role = user?.role || ""

  if(roles.length > 0 && !roles.includes(role)){
    return <Navigate to="/" replace />
  }

  return <Component />
}

export default PrivateRoute