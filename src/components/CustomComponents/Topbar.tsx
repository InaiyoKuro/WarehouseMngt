import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../hooks/useAuth';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const { setUser } = useAuth()  
    const navigate = useNavigate()


  const handleLogout = () => {
    Cookies.remove("accessToken")
    Cookies.remove("refreshToken")
    Cookies.remove("userId")

    setUser(null)
    navigate("/login")
  }
  return (
    <Box sx={{
      display: "flex",
      backgroundColor: "#008cd4",
      padding: "10px 0",
      alignItems: 'center',
      justifyContent: "center"
    }}>

      <Typography sx={{
        fontSize: "20px",
        fontWeight: "bold",
        color: "white", }} 
      >Warehouse Management</Typography>

      <Tooltip title="Logout">
        <IconButton onClick={handleLogout} sx={{
          position: "absolute",
          top: 5,
          right: 0,
          color: "white"
        }}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default Topbar