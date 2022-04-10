import React, { useState } from "react";
import "./Navbar.css";
import { Link ,Routes,Route} from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Login from "./Dashboard/Login/Login";
import ReviewsB from "./Dashboard/ReviewsB/ReviewsB";
import axios from "axios";
function Navbar() {

  const [searchString, setSearchString] = useState("")
  const [searchCat, setSearchCat] = useState("")

  const btnSearchClick = () => {
    console.log("alert called")
    // const reqUrl = `Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/search`
    // const reqBody = {
    //   "searchString": {searchString},
    //   "searchLocation": {"country":"india",
    //                       "state":"",
    //                       "city":"",
    //                       "postalCode":""
    //                     }
    // }
    
    // await axios.get(reqUrl ,searchString).then( (res) => {
    //     if(res.isSuccess){
    //       //setData here           
    //     }
    // })
  }
  return (
    <>
      {/* main body */}
      <div className="back-img main-body">
        {/* nav bar start */}
        <div className="bg-img">
          <nav className="navbar navbar-expand-lg navbar-dark nav-bar">
            <div className="container-fluid">
              <a className="navbar-brand logo " href="#">
                UNRAVEL
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-compo">
                  <li className="nav-item ml-3">
                    <Link to="/" className='link-home'>Home</Link>             
                          </li>
                  <li className="nav-item">
                     <Link to="/review" className='link-home'>Reviews</Link> 
                  </li>
                  <li className="nav-item">
              
                    <Link to="/#" className='link-home'>Blogs</Link> 
                
                  </li>
                  <li className="nav-item">
                    
                     <Link to="/#" className='link-home'> Unravel for Business</Link> 
                 
                  </li>
                </ul>
                <form className="d-flex">
                  <button
                    className=" m-3  but-home"
                    type="submit"
                  >
                        <Link to="/login" className="butt">Login</Link> 
                  </button>
                  <button
                    className=" m-3  but-home"
                    type="submit"
                  >
                  <Link to="/signup" className="butt" >Sign up</Link> 
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        {/* nav bar end */}

        {/* main body */}
        <div className="main-content">
          <h1 className="heading text-center">
            Discover your Perfect Business Nearby!
          </h1>
          <h3 className="sub-heading text-center">
            Check Ratings, Read Reviews & Buy
          </h3>
          <div className="search-text-centerr">
 
           
            <input
              type="text"
              className="input-search "
              placeholder="What are you looking for"
              onChange={(e) => {setSearchString(e.target.value)}}
            />
            <input
              type="text"
              className="input-search-cat"
              placeholder="Select Category "
              onChange={(e) => {setSearchCat(e.target.value)}}
            />
            {/* <button  onSubmit={btnSearchClick} type='submit' className="butt-search">
              Search
            </button> */}
              
              <button type="button" onCLick={btnSearchClick} className="butt-search">
              Search
            </button>
         
          </div>
        </div>

        <div className="Services ">
          <div className="Services-compo">
            <div className="Services-img">
              <img
                src="./../../assets/bag.png"
                className="img-service"
                alt="shooping"
              />
            </div>
            <h4 className="head-service">Shops</h4>
          </div>
          <div className="Services-compo">
            <div className="Services-img">
              <img
                src="./../../assets/rest.png"
                className="img-service"
                alt="shooping"
              />
            </div>
            <h4 className="head-service">Home Stays</h4>
          </div>
          <div className="Services-compo">
            <div className="Services-img">
              <img
                src="./../../assets/restaurant.png"
                className="img-service"
                alt="shooping"
              />
            </div>
            <h4 className="head-service">Restaurants </h4>
          </div>
          <div className="Services-compo">
            <div className="Services-img">
              <img
                src="./../../assets/music.png"
                className="img-service"
                alt="shooping"
              />
            </div>
            <h4 className="head-service">Music</h4>
          </div>
          <div className="Services-compo  extra-border">
            <div className="Services-img">
              <img
                src="./../../assets/dots.png"
                className="img-service"
                alt="shooping"
              />
            </div>
            <h4 className="head-service">More</h4>
          </div>
        </div>
      </div>
      <Body />
      <Footer />
     
               
    </>
  );
}

export default Navbar;
