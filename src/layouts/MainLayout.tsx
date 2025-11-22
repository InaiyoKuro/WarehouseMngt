import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Topbar from '../components/CustomComponents/Topbar'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'

function MainLayout() {
  const navigate = useNavigate()
  const { isLogin } = useAuth()
  
  useEffect(() => {
    if(!isLogin){
      navigate("/login")
    }
  }, [])

  return (
    <div className='flex flex-col'>
      <Topbar />

      <div className='flex flex-row h-[calc(100vh-50px)]'>
        <Sidebar />
        
        <Box sx={{
          display: "flex",
          // background: "green",
          width: "100%",
          color: "white",
          justifyContent: "center",
          padding: "14px",
        }}>
          <Outlet />
        </Box>

      </div>
    </div>
  )
}

export default MainLayout