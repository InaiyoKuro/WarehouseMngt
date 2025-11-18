import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Topbar } from '../components/CustomStyle'
import { ToastContainer } from 'react-toastify'

function MainLayout() {
  return (
    <div className='flex flex-col'>
      <Topbar>Warehouse Management</Topbar>

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

        <ToastContainer position="top-right" autoClose={2000} limit={1} />
      </div>
    </div>
  )
}

export default MainLayout