import React from "react";
import "./Navbar.css";
function Navbar() {
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
                <li className="nav-item d-flex m-3">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active m-3" href="#">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active m-3" href="#">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active m-3" href="#">
                    Unravel for Business
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button
                  className="btn btn-outline-success  m-3 butt-login"
                  type="submit"
                >
                  Login
                </button>
                <button
                  className="btn btn-outline-success m-3 butt-signup"
                  type="submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
{/* nav bar end */}

{/* main body */}
        <div className="main-content">
          <h1 className="heading">Discover your Perfect Business Nearby!</h1>
          <h3 className="sub-heading">Check Ratings, Read Reviews & Buy</h3>
          <div className="search">
            <input
              type="text"
              className="input-search"
              placeholder="what are you looking for "
            />
            <input
              type="text"
              className="input-search-cat"
              placeholder="Search category "
            />
            <button type="button" className="butt-search">
              Search
            </button>
          </div>
         

          </div>


       
        <div className="Services">
            <div className="Services-compo">
             <img src="./../../assets/bag.png" className="img-service" alt="shooping" />
             <h4 className="head-service">Shops</h4>
            </div> 
            <div className="Services-compo">
             <img src="./../../assets/rest.png" className="img-service" alt="shooping" />
             <h4 className="head-service">Home Stays</h4>
            </div> 
            <div className="Services-compo">
             <img src="./../../assets/restaurant.png" className="img-service" alt="shooping" />
             <h4 className="head-service">Restaurants </h4>
            </div> 
            <div className="Services-compo">
             <img src="./../../assets/music.png" className="img-service" alt="shooping" />
             <h4 className="head-service">Music</h4>
            </div> 
            <div className="Services-compo  extra-border">
             <img src="./../../assets/dots.png" className="img-service" alt="shooping" />
             <h4 className="head-service">More</h4>
            </div> 
      </div>
       </div>
    </>
  );
}

export default Navbar;
