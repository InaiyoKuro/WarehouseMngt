import { Box, FormControl, Paper, Typography } from "@mui/material"
import TextFieldLogin from "../../components/CustomComponents/TextFieldLogin"
import ButtonLogin from "../../components/CustomComponents/ButtonLogin"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import Cookies from "js-cookie"
import { useAuth } from "../../hooks/useAuth"

const LoginPage = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const { isLogin } = useAuth()

  
  const navigate = useNavigate()

  useEffect(() => {
    if(isLogin) navigate("/")
  })

  const handleSubmit = async() => {
    try {
      setLoading(true)

      const toastId = "toastId"
      if(!username || !password){
        toast.error("Vui lòng điền đầy đủ thông tin", { toastId })
        return
      }

      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if(!usernameRegex.test(username)){
        toast.error("Username không hợp lệ", { toastId })
        return
      }

      const data = {
        username,
        password
      }
        
      const res = await api.post("/api/auth/login", data)
      if(res.data.status){
        toast.success("Đăng nhập thành công", { toastId })

        Cookies.set("accessToken", res.data.accessToken)
        Cookies.set("refreshToken", res.data.refreshToken)
        Cookies.set("userId", res.data.user.id)

        navigate("/")
        return
      }

      toast.error(res.data.msg, { toastId })

    } catch(e){
      console.log(e)
      toast.error("Lỗi server", { toastId: "error" })
    } finally {
      setLoading(false)
    }
  }
  return (
    <Paper sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <FormControl sx={{ width: "350px", gap: 3 }}>
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>Login</Typography>

          <TextFieldLogin onChange={(e) => setUsername(e.target.value)} label="Username" type="text" />
          <TextFieldLogin onChange={(e) => setPassword(e.target.value)} label="Password" type="password" />

          <ButtonLogin onClick={handleSubmit} loading={loading}>Login</ButtonLogin>

          
          <Box sx={{ display: "flex", justifyContent: "space-between"}}>

            <Box sx={{ display: "flex", gap: 1 }}>
              Forgot?
              <Typography color="primary" sx={{ cursor: "pointer" }}>Reset Password</Typography>
            </Box>

            <Link to="/register">
              <Typography color="primary">Register</Typography>
            </Link>
          </Box>
        </FormControl>
    </Paper>
  )
}

export default LoginPage