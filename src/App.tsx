import React, { Suspense } from 'react';
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter, Outlet, RouterProvider, type RouteObject } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';

// import ImportPage from './pages/ImportPage'
// import ExportPage from './pages/ExportPage'
// import StockListPage from './pages/StockListPage'
// import ExpiredPage from './pages/ExpiredPage'
// import ReportPage from './pages/ReportPage'

const ImportPage = React.lazy(() => import("./pages/ImportPage"))
const ExportPage = React.lazy(() => import("./pages/ExportPage"))
const StockListPage = React.lazy(() => import("./pages/StockListPage"))
const ExpiredPage = React.lazy(() => import("./pages/ExpiredPage"))
const ReportPage = React.lazy(() => import("./pages/ReportPage"))

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
    element: <Outlet />,
    children: appRoutes
  }
])

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App