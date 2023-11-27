import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import path from './utils/path'
import { PublicLayout, Home, AboutUs, OurAgents, Properties, Search } from './pages/public'
import { Modal } from './components'
import { useAppStore } from './store/useAppStore'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useUserStore } from './store/useUserStore'

function App() {
  const { isShowModal } = useAppStore()
  const { getDetail, current, token } = useUserStore()
  useEffect(() => {
    getDetail()
  },[token])
  
  console.log(current);

  return (
    // 123123
    <>
      {isShowModal && <Modal />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUTUS} element={<AboutUs />} />
          <Route path={path.OURAGENTS} element={<OurAgents />} />
          <Route path={path.PROPERTIES} element={<Properties />} />
          <Route path={path.SEARCH} element={<Search />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
