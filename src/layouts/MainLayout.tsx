import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-bold text-center py-[12px] max-h-[50px]'>Warehouse Management</h1>
      <div className='flex flex-row h-[calc(100vh-50px)] gap-2'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout