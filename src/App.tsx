import './App.css'
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter, Outlet, RouterProvider, type RouteObject } from 'react-router-dom'
import Home from './components/Home'
import ImportPage from './pages/ImportPage'
import ExportPage from './pages/ExportPage'

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Home/>,
        children: [
          { path: "import", element: <ImportPage /> },
          { path: "export", element: <ExportPage /> },
        ]
      }
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