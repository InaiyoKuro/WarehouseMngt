import { Box, FormControl, Paper, Typography } from "@mui/material"
import TextFieldLogin from "../../components/CustomComponents/TextFieldLogin"
import ButtonLogin from "../../components/CustomComponents/ButtonLogin"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { isAuthenticated } from "../../utils/CheckAuth"

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

  const navigate = useNavigate()

  useEffect(() => {
    if(isAuthenticated()){
      navigate("/")
    }
  }, [])

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  const handleSubmit = async() => {
    const toastId = "toastId"
    if(!user.email || !user.username || !user.password || !user.rePassword){
      console.log("a")
      toast.error("Vui lòng nhập đầy đủ thông tin", { toastId })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(user.email)){
      toast.error("Email không hợp lệ", { toastId })
      return
    }

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if(!usernameRegex.test(user.username)){
      toast.error("Username không hợp lệ", { toastId })
      return
    }

    if(user.password.length < 6){
      toast.error("Đặt mật khẩu dài hơn đi", { toastId })

    }

    if(user.password !== user.rePassword){
      toast.error("Password không khớp", { toastId })
      return
    }
    
    try{
      const data = {
        email: user.email,
        username: user.username,
        password: user.password,
      }

      const res = await api.post("/api/auth/register", data)
      if(res.status === 200){
        toast.success("Đăng ký thành công", { toastId })
        navigate("/login")
        return
      }
    }catch(e){
      console.error(e)
      toast.error("Lỗi server", { toastId })
    }
    
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

            <Link to="/login">
              <Typography color="primary">Login</Typography>
            </Link>
          </Box>
        </FormControl>
    </Paper>
  )
}

export default RegisterPage