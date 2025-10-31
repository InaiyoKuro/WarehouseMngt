import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Topbar } from '../components/CustomStyle'

function MainLayout() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-bold text-center py-[12px] max-h-[50px] text-white bg-[#008cd4]'>Warehouse Management</h1>
      <Topbar>Warehouse Management</Topbar>
      <div className='flex flex-row h-[calc(100vh-50px)] gap-2'>
        <Sidebar />
        <Box sx={{
          display: "flex",
          background: "black",
          width: "100%"
        }}>
          <Outlet />
        </Box>
      </div>
    </div>
  )
}

export default MainLayout