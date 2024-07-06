import React from 'react'
import { Outlet } from 'react-router-dom'
import Haeder from '../Haeder'
import Footer from '../Footer'

const RootLayOut = () => {
  return (
    <div>
        <Haeder/>

        {/* <Outlet/>

        <Footer/> */}
    </div>
  )
}

export default RootLayOut