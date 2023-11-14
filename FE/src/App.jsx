import React from 'react'
import { Routes, Route } from 'react-router-dom'
import path from './utils/path'
import { PublicLayout, Home, AboutUs, OurAgents, Properties, Search } from './pages/public'

function App() {

  return (
    <div className=''>
      <Routes>
          <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
              <Route path={path.HOME} element={<Home />}/>
              <Route path={path.ABOUTUS} element={<AboutUs />}/>
              <Route path={path.OURAGENTS} element={<OurAgents />}/>
              <Route path={path.PROPERTIES} element={<Properties />}/>
              <Route path={path.SEARCH} element={<Search />}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
