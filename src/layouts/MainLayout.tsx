import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-bold text-center'>Warehouse Management</h1>
      <div className='flex flex-row'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout