import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/login/Login.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import PaginasWeb from './routes/paginasWeb/PaginasWeb.jsx'
import ProtectedRoute from './routes/protectedRoute/ProtectedRoute.jsx'
import Layout from './components/Layout/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/PaginasWeb",
        element: <PaginasWeb />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
