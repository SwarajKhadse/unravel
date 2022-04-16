import React from 'react'
import './Mainnav.css'
import {Link} from 'react-router-dom'
function Mainnav() {
  return (
    <>
    
<nav className="navbar navbar-expand-lg navbar-dark nav-bar">
  <div className="container-fluid">
    <a className="navbar-brand1 logo1 " href="#">
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
        <li className="nav-item1 ml-3">
          <Link to="/" className='link-home1'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/review" className='link-home1'>Reviews</Link>
        </li>
        <li className="nav-item">

          <Link to="/#" className='link-home1'>Blogs</Link>

        </li>
        <li className="nav-item">

          <Link to="/#" className='link-home1'> Unravel for Business</Link>

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

    
    
    </>
  )
}

export default Mainnav










