import React from 'react'
import Navbar from './Component/Navbar'
import Body from './Component/Body'
import Footer from './Component/Footer'
import AboutNavbar from './Component/about/AboutNavbar/AboutNavbar'
import './style.css'
import AboutBody from './Component/about/AboutBody/AboutBody'
import Bookmark from './Component/Dashboard/Bookmarks/Bookmark'
import Review from './Component/Dashboard/Review/Review'
import Dashboard from './Component/Dashboard/Business Dashboard/Dashboard'
import Photos from './Component/Dashboard/Photos/Photos'
import Category from './Component/Dashboard/Category/Category'
import ReviewHome from './Component/Dashboard/ReviewHome/ReviewHome'
import Login from './Component/Dashboard/Login/Login'
import Signup from './Component/Dashboard/Signup/Signup'
function Home() {
  return (
    <>
    <Navbar/>
    <Body/>
    <Footer/>
    <AboutNavbar/>
    <AboutBody/>
    <Bookmark/>
    <Review/>
    <Dashboard  />
    <Photos/>
    <Category/>
   
    <Login/>
    <Signup/>
    <ReviewHome/>
    </>
  )
}

export default Home