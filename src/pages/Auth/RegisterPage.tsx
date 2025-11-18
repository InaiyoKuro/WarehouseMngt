import { Box, FormControl, Paper, Typography } from "@mui/material"
import TextFieldLogin from "../../components/CustomComponents/TextFieldLogin"
import ButtonLogin from "../../components/CustomComponents/ButtonLogin"
import { useState } from "react"

type UserProps = {
  email: string;
  username: string;
  password: string;
  rePassword: string
}

const RegisterPage = () => {
  const [user, setUser] = useState<UserProps>({
    email: "",
    username: "",
    password: "",
    rePassword: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = () => {
    console.log(user)
  }

  return (
    <Paper sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <FormControl sx={{ width: "350px", gap: 3 }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Register
          </Typography>

          <TextFieldLogin name="email" label="Email" type="email" onChange={handleChange}/>
          <TextFieldLogin name="username" label="Username" type="text" onChange={handleChange}/>
          <TextFieldLogin name="password" label="Password" type="password" onChange={handleChange}/>
          <TextFieldLogin name="rePassword" label="Repeat Password" type="password" onChange={handleChange}/>

          <ButtonLogin onClick={handleSubmit}>Register</ButtonLogin>

          
          <Box sx={{ display: "flex", justifyContent: "space-between"}}>

            <Box sx={{ display: "flex", gap: 1 }}>
              Forgot?
              <Typography color="primary" sx={{ cursor: "pointer" }}>Reset Password</Typography>
            </Box>

            <Typography color="primary" sx={{ cursor: "pointer" }}>
              Login
            </Typography>
          </Box>
        </FormControl>
    </Paper>
  )
}

export default RegisterPage