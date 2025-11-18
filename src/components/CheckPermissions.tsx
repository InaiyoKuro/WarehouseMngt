
type Props = {
  children: React.ReactNode,
  roles: string[]
}

const CheckPermissions = ({ children, roles = [] }: Props) => {
  const user = localStorage.getItem("user")
  const role = JSON.parse(user ?? "{}").role

  return role && roles.includes(role) ? <>{children}</> : null
}

export default CheckPermissions