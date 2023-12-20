import React from "react"
import Navbar from "../components/Navbar"
import BottomNav from "../components/BootomNav"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
      <>
          <Navbar/>
          <Outlet/>
          <BottomNav/>
      </>
    )
  }
  
  export default Layout