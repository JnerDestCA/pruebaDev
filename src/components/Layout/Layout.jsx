import Navbar from '../Navbar/Navbar.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  )
}

export default Layout