import './App.css'
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter, Outlet, RouterProvider, type RouteObject } from 'react-router-dom'
import ImportPage from './pages/ImportPage'
import ExportPage from './pages/ExportPage'
import 'boxicons/css/boxicons.min.css';
import StockListPage from './pages/StockListPage'
import ExpiredPage from './pages/ExpiredPage'
import ReportPage from './pages/ReportPage'

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [ 
        { index: true, element: <ImportPage /> },
        { path: "import", element: <ImportPage /> },
        { path: "export", element: <ExportPage /> },
        { path: "stocklist", element: <StockListPage /> },
        { path: "expired", element: <ExpiredPage /> },
        { path: "report", element: <ReportPage /> },
    ]
  }
]

const router = createBrowserRouter([
  {
    element: (
      <Outlet />
    ),
    children: appRoutes
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App