import { Navigate } from 'react-router-dom'

type Props = {
  children: React.ReactNode;
  roles?: string[]
}

const PrivateRoute = ({ children, roles = [] }: Props) => {

  const user = localStorage.getItem("user")
  const role = JSON.parse(user ?? "{}")?.role

  console.log(role)

  if(roles.length > 0 && !roles.includes(role)){
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default PrivateRoute