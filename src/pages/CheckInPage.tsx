import { Paper } from "@mui/material"
import { useAuth } from "../hooks/useAuth"

const CheckInPage = () => {

  const { user } = useAuth()
  console.log(user)

  return (
    <Paper>CheckInPage</Paper>
  )
}

export default CheckInPage