import React, { useState ,useEffect} from "react";
import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Login from "./Dashboard/Login/Login";
import ReviewsB from "./Dashboard/ReviewsB/ReviewsB";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Navbar() {

  const [searchString, setSearchString] = useState("")
  const [searchCat, setSearchCat] = useState("")
  const btnSearchClick = async () => {
    alert("button CLicked")
    const reqUrl = `Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/search`
    const reqBody = {
      "searchString": { searchString },
      "searchLocation": {
        "country": "india",
        "state": "",
        "city": "",
        "postalCode": ""
      }
    }

    await axios.get(reqUrl, searchString).then((res) => {
      if (res.isSuccess) {
        //setData here           
      }
    })
  }
/////////////////////////////////////////////////search bar tag/////////////////////////////
let navigate = useNavigate();
const [name, setName] = useState("");
const [location, setLocation] = useState('');
const [det, setDet] = useState();
const [loc, setLoc] = useState();
const [hidden, setHidden] = useState(true)
const [hidden2, setHidden2] = useState(true)

const bChange = async(event) => {
  setName(event.target.value)
  await fetch("https://finalexam.online/onlinebusiness/autocomplete?inputString="+event.target.value)
  .then(response => response.json())
  .then(data => {
    setDet(data.data)
  })

}

const lChange = async(event) => {
  setLocation(event.target.value)
  await fetch("https://api.geoapify.com/v1/geocode/autocomplete?text="+location+"&format=json&apiKey=aa564381aeaf4623b4277541de175243")
  .then(response => response.json())
  .then(data => {
    setLoc(data.results)
  })

}

useEffect(async() => {
  await fetch("https://finalexam.online/onlinebusiness/autocomplete?inputString="+name)
  .then(response => response.json())
  .then(data => {
    setDet(data.data)
  })

  await fetch("https://api.geoapify.com/v1/geocode/autocomplete?text="+location+"&format=json&apiKey=aa564381aeaf4623b4277541de175243")
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    setLoc(data.results)
  })

},[name])

const auto = () => {
  hidden ?  document.getElementById("nlist").classList.remove("hidden") : document.getElementById("nlist").classList.add("hidden");
  setHidden(!hidden);
}

const auto2 = () => {
  hidden2 ?  document.getElementById("nlist2").classList.remove("hidden") : document.getElementById("nlist2").classList.add("hidden");
  setHidden2(!hidden2);
}
//////////////////////////////////////////////////////////////////////////serach bar tag//////////////////



  return (
    <>
      {/* main body */}
      <div className="back-img main-body">
      {/* <img src='/assets/Home-image.jpg' className="bacv-img" alt="" /> */}
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
{/* search bar */}
{/* <div className='relative flex bg-white w-4/6 rounded-lg items-center justify-between' style={{'z-index': 1}}>
            <input
            id="name"
              className='rounded-sm px-3 w-3/6 py-3 rounded-l-md'
              placeholder='Search paintings,books,'
              value={name}
              onChange={bChange}
              onFocus={auto}
              onClick={() => {bChange() ; auto();}}
            />
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.89697 14.818L0.739973 20.975C0.628805 21.0814 0.540017 21.2089 0.47882 21.3501C0.417624 21.4913 0.385254 21.6433 0.383611 21.7971C0.381968 21.951 0.411085 22.1036 0.469253 22.2461C0.527421 22.3885 0.613467 22.5179 0.722337 22.6267C0.831207 22.7354 0.960707 22.8213 1.10323 22.8793C1.24576 22.9373 1.39843 22.9662 1.55229 22.9644C1.70615 22.9625 1.8581 22.93 1.9992 22.8686C2.1403 22.8072 2.26772 22.7183 2.37397 22.607L8.53097 16.45C10.3717 17.8757 12.6863 18.5466 15.0041 18.3263C17.3219 18.1059 19.4687 17.0109 21.0078 15.2639C22.5469 13.5169 23.3626 11.2492 23.289 8.92214C23.2155 6.59507 22.2582 4.38341 20.6119 2.73709C18.9656 1.09078 16.7539 0.133477 14.4268 0.0599324C12.0998 -0.0136123 9.83206 0.802125 8.08508 2.3412C6.33809 3.88027 5.24305 6.02707 5.02271 8.34486C4.80237 10.6626 5.47328 12.9773 6.89897 14.818H6.89697ZM14.135 16.078C12.7769 16.0776 11.4494 15.6745 10.3204 14.9197C9.19141 14.1649 8.31156 13.0923 7.79212 11.8375C7.27268 10.5827 7.13697 9.20203 7.40216 7.87009C7.66736 6.53816 8.32153 5.31476 9.28198 4.35459C10.2424 3.39443 11.466 2.74061 12.798 2.47581C14.13 2.211 15.5107 2.34711 16.7653 2.86691C18.02 3.38672 19.0923 4.26688 19.8468 5.39611C20.6013 6.52534 21.004 7.85293 21.004 9.211C21.004 10.113 20.8263 11.0061 20.4811 11.8394C20.1358 12.6726 19.6298 13.4297 18.992 14.0674C18.3541 14.7051 17.5968 15.2109 16.7635 15.5559C15.9301 15.9008 15.0369 16.0783 14.135 16.078V16.078Z" fill="#999999"/>
</svg>

            <div id="nlist" className="absolute left-0 top-12 bg-white px-10 rounded py-1 hidden" style={{"z-index": 500}}>
              {det && det.map(item => {
                return(<h1 onClick={()=> (setName(item))}>{item}</h1>)
              })}
            </div>
            <div className='relative w-2/5'>
            <input
            id="location"
              className='rounded-sm px-2 py-3 w-full'
              placeholder='Location'
              value={location}
              onChange={lChange}
              onFocus={auto2}
              onClick={() => {lChange() ; auto2();}}
            />
              <div id="nlist2" className="absolute top-12 bg-white px-10 rounded py-1 hidden" style={{"z-index": 500}}>
              {loc && loc.map(item => {
                return(<h1 onClick={()=> (setLocation(item.city))}>{item.city}</h1>)
              })}
            </div>
            </div>
            
            <div className='text-white bg-[#051D4D] py-3 rounded-r-md px-6 text-center self-end w-1/5'>
              <a onClick={() => navigate(`all-business/${name}/${location !=  "" ? location : "empty" }`)}>Search Here</a>
            </div>
          </div>
        </div> */}




          <div className="search-text-center1">
            <input
              type="text"
              className="input-search "
              placeholder="What are you looking for"
              onChange={(e) => { setSearchString(e.target.value) }}
            />
            <input
              type="text"
              className="input-search-cat"
              placeholder="Select Category "
              onChange={(e) => { setSearchCat(e.target.value) }}
            />
            <button type="button" onClick={btnSearchClick} className="butt-search">
              Search
            </button>
          </div>
        </div>
{/* search bar end */}
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
