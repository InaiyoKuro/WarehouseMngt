import React, { Suspense } from 'react';
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter, Outlet, RouterProvider, type RouteObject } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';
import CheckInPage from './pages/CheckInPage';
import AnalyticsPage from './pages/AnalyticsPage';

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
        { index: true, element: <CheckInPage /> },
        { path: "check-in", element: <CheckInPage />},
        { path: "import", element: <ImportPage />},
        { path: "export", element: <ExportPage /> },
        
        { path: "stocklist",
          element: <PrivateRoute roles={["master","manager"]}><StockListPage /></PrivateRoute>},
        { path: "expired",
          element: <PrivateRoute roles={["master","manager"]}><ExpiredPage /></PrivateRoute>},
        { path: "report",
          element: <PrivateRoute roles={["master","manager"]}><ReportPage /></PrivateRoute>},
        { path: "analytics",
          element: <PrivateRoute roles={["master"]}><AnalyticsPage /></PrivateRoute>},

    ]
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <RegisterPage />
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
      <ToastContainer position="top-right" autoClose={1000} limit={1} />
    </Suspense>
  )
}

export default App