import { Outlet } from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'

function AppLayout() {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  )
}

export default AppLayout
