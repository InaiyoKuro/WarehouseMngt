import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import Topbar from '../components/CustomComponents/Topbar'
import { isAuthenticated } from '../utils/CheckAuth'
import { useEffect } from 'react'

function MainLayout() {

  if(!isAuthenticated()){
    return <Navigate to="/login" />
  }

  useEffect(() => {
    const user = localStorage.getItem("user")
    // if(user){
    const role = JSON.parse(user ?? "{}").role
    console.log(role)
    // }
  },[])

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