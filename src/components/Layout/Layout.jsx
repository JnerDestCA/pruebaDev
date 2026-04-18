import Navbar from '../Navbar/Navbar.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div class="w-full h-screen">
        <div class="flex">
          <Sidebar />
          <div class="flex-1">
            <Navbar />
            <div class="">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout