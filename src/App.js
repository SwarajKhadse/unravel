import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Login from './Component/Dashboard/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Component/Dashboard/Signup/Signup';
import ReviewsB from './Component/Dashboard/ReviewsB/ReviewsB'
import ReviewHome from './Component/Dashboard/ReviewHome/ReviewHome';
import Bookmark from './Component/Dashboard/Bookmarks/Bookmark';
import Business from './Component/Dashboard/BusinessNew/Business';
 import Review from './Component/Dashboard/Review/Review';
import Dashboard from './Component/Dashboard/Business Dashboard/Dashboard';
import Photos from './Component/Dashboard/Photos/Photos'
import Category from './Component/Dashboard/Category/Category';
import Home from './Home';
function App(){
    

    return (
        <>  
        {/* <Home/> */}
       
        
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route index element={<Navbar/>}/>
           <Route path="/login" element={<Login/>} /> 
           <Route path="/signup" element={<Signup/>} /> 
           <Route path="/review" element={<ReviewHome/>} /> 
           <Route path="user">
                   <Route index element={<Bookmark/>}/>
                   <Route path="bookmark" element={<Bookmark/>}/>
                   <Route path="review" element={<Review/>}/>
                   <Route path="dashboard" element={<Dashboard/>}/>
                   
                  </Route>
                  <Route path="dash">
                   {/* <Route index element={<Dashboard/>}/> */}
                   <Route path="bookmark" element={<Dashboard/>}/>
                   <Route path="review" element={<ReviewsB/>}/>
                   <Route path="photos" element={<Photos/>}/>
                   <Route path="category" element={<Category/>}/>
                   
                  </Route>
     
      </Routes>
    </BrowserRouter>
       
        </>
    )
}

export default App