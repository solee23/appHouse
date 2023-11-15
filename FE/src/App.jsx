import React from 'react'
import { Routes, Route } from 'react-router-dom'
import path from './utils/path'
import { PublicLayout, Home, AboutUs, OurAgents, Properties, Search } from './pages/public'
import { Modal } from './components'
import { useAppStore } from './store/useAppStore'

function App() {
  const {isShowModal, contentModal} = useAppStore()
  console.log({isShowModal, contentModal});
  return (
    <>
     { isShowModal && <Modal/>}
      <Routes>
          <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
              <Route path={path.HOME} element={<Home />}/>
              <Route path={path.ABOUTUS} element={<AboutUs />}/>
              <Route path={path.OURAGENTS} element={<OurAgents />}/>
              <Route path={path.PROPERTIES} element={<Properties />}/>
              <Route path={path.SEARCH} element={<Search />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
