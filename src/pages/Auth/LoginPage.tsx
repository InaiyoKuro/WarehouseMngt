import { Box, FormControl, Paper, Typography } from "@mui/material"
import TextFieldLogin from "../../components/CustomComponents/TextFieldLogin"
import ButtonLogin from "../../components/CustomComponents/ButtonLogin"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <Paper sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <FormControl sx={{ width: "350px", gap: 3 }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>Login</Typography>
          <TextFieldLogin label="Username" type="text" />
          <TextFieldLogin label="Password" type="password" />

          <ButtonLogin>Login</ButtonLogin>

          
          <Box sx={{ display: "flex", justifyContent: "space-between"}}>

            <Box sx={{ display: "flex", gap: 1 }}>
              Forgot?
              <Typography color="primary" sx={{ cursor: "pointer" }}>Reset Password</Typography>
            </Box>

            <Link to="/register">
              Register
            </Link>
          </Box>
        </FormControl>
    </Paper>
  )
}

export default LoginPage