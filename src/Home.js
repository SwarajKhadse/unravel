import React from 'react'
import Navbar from './Component/Navbar'
import Body from './Component/Body'
import Footer from './Component/Footer'
import AboutNavbar from './Component/about/AboutNavbar/AboutNavbar'
import './style.css'
import AboutBody from './Component/about/AboutBody/AboutBody'

function Home() {
  return (
    <>
    <Navbar/>
    <Body/>
    <Footer/>
    <AboutNavbar/>
    <AboutBody/>
    </>
  )
}

export default Home