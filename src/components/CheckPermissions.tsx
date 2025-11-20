import { useAuth } from "../hooks/useAuth"

type Props = {
  children: React.ReactNode,
  roles: string[]
}

const CheckPermissions = ({ children, roles = [] }: Props) => {
  const { user } = useAuth()  
  const role = user?.role

  return role && roles.includes(role) ? <>{children}</> : null
}

export default CheckPermissions