import { Navigation, Topheader } from '@/components'
import { Outlet } from 'react-router-dom'
import React from 'react'

const PublicLayout = () => {
  return <main>
    <Topheader/>
    <Navigation/>
    <div>
        <Outlet/>
    </div>
  </main>
}

export default PublicLayout