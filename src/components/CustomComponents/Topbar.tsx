import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { replace, useNavigate } from 'react-router-dom';

const Topbar = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("user")
    navigate("/", { replace: true })
    window.location.reload()
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
        <IconButton onClick={handleClick} sx={{
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