import React, { Suspense } from 'react';
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter, Outlet, RouterProvider, type RouteObject } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

const ImportPage = React.lazy(() => import("./pages/ImportPage"))
const ExportPage = React.lazy(() => import("./pages/ExportPage"))
const StockListPage = React.lazy(() => import("./pages/StockListPage"))
const ExpiredPage = React.lazy(() => import("./pages/ExpiredPage"))
const ReportPage = React.lazy(() => import("./pages/ReportPage"))
const CheckInPage = React.lazy(() => import("./pages/CheckInPage"))
const AnalyticsPage = React.lazy(() => import("./pages/AnalyticsPage"))

const LoginPage = React.lazy(() => import("./pages/Auth/LoginPage"))
const RegisterPage = React.lazy(() => import("./pages/Auth/RegisterPage"))


const defaultRoles = ["master","manager","staff"]
const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { index: true, element: <PrivateRoute roles={defaultRoles} component={CheckInPage} /> },
        { path: "check-in", element: <PrivateRoute roles={defaultRoles} component={CheckInPage} />},
        { path: "import", element: <PrivateRoute roles={defaultRoles} component={ImportPage} />},
        { path: "export", element: <PrivateRoute roles={defaultRoles} component={ExportPage} /> },
        
        { path: "stocklist",
          element: <PrivateRoute roles={["master","manager"]} component={StockListPage} />},
        { path: "expired",
          element: <PrivateRoute roles={["master","manager"]} component={ExpiredPage} />},
        { path: "report",
          element: <PrivateRoute roles={["master","manager"]} component={ReportPage} />},
        { path: "analytics",
          element: <PrivateRoute roles={["master"]} component={AnalyticsPage} />},
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

    <AuthProvider>
      <Suspense>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={1000} limit={1} />
      </Suspense>
    </AuthProvider>
  )
}

export default App