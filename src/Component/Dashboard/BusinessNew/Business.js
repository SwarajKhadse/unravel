import React, { useState, useEffect } from "react";
import "./Business.css";
import axios from "axios";

function Business() {
  const [name, setName] = useState()
  const [detail, setDetail] = useState()
  const [add1, setAdd1] = useState()
  const [add2, setAdd2] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zip, setZip] = useState()
  const [loc, setLoc] = useState()
  const [num, setNum] = useState()
  const [web, setWeb] = useState()
  const [email, setEmail] = useState()
  const [banner, setBanner] = useState([])
  const [img1, setImg1] = useState([])
  const [img2, setImg2] = useState([])


  const registerBuisness = async () => {
    let reqUrl = `https://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness`

    let body = {
      "categories": [
        "Skin Care",
        "face care",
        "self care"
      ],
      "instagram": "suganda.co",
      "address": "Hyderabad,Andhra Pradesh",
      "name": "suganda",
      "contact": "NA",
      "serviceLocation": [
        "india"
      ],
      "website": "suganda.co/",
      "createdDate": "2021-10-15T17:17:40.366Z",
      "modifiedBy": "2021-12-27T06:18:23.413895Z",
      "ratingSum": 15,
      "reviewCount": 4,
      "headerUrl": [
        "https://unraveldisplayimage.s3.ap-south-1.amazonaws.com/suganda.co1.jpg",
        "https://unraveldisplayimage.s3.ap-south-1.amazonaws.com/suganda.co2.jpg"
      ],
      "thumbnailUrl": "https://unravelthumbnail.s3.ap-south-1.amazonaws.com/suganda.co.jpg",
      "ratingAverage": 3,
      "explore": false
    }
    

    await axios.post(reqUrl ,body)
      .then((res) => {
        if (res.data.isSuccess == true) {
          console.log(res);
          alert("Registered successfully !!")
          // navigate("/user/dashboard")
        } else {
          alert("Unable to register !!")
        }
      })
      .catch((err) => {
        console.error(err);
      })

  }


  return (
    <>
      <div className="row mt-3">
        <div className="col-md-7">
          <div className="container">
            <h2>Add Your Business</h2>

            <label for="bussName" >Business Name</label>
            <input
              type="text"
              className="form-control"
              id="bussName"
              onChange={(event) => {
                setName(event.target.value)
              }}
              placeholder="your business name"
            />

            <label for="bussDetail ">Enter about your business</label>
            <input
              type="text"
              className="form-control"
              id="bussDetail"
              onChange={(event) => {
                setDetail(event.target.value)
              }}
              placeholder="small description about your business"
            />

            <div className="form-group">

            </div>
            <div className="form-group">
              <label for="bussAdd1">Address 1</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd1"
                onChange={(event) => {
                  setAdd1(event.target.value)
                }}
                placeholder="Enter your adress"
              />
            </div>
            <div className="form-group">
              <label for="bussAdd2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd2"
                onChange={(event) => {
                  setAdd2(event.target.value)
                }}
                placeholder="Enter your other adress "
              />
            </div>
            <div className="row d-flex">
              <div className="col-5">
                <div className="form-group">
                  <label for=" bussCity">City</label>
                  <input
                    type="email"
                    className="form-control"
                    id=" bussCity"
                    onChange={(event) => {
                      setCity(event.target.value)
                    }}
                    placeholder="Enter your city "
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label for="bussState">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bussState"
                    onChange={(event) => {
                      setState(event.target.value)
                    }}
                    placeholder="Enter your State "
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label for="bussZip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bussZip"
                    onChange={(event) => {
                      setZip(event.target.value)
                    }}
                    placeholder="00000"
                  />
                </div>
              </div>


              <div className="form-group">
                <label for="bussLoc">Enter Google map location link</label>
                <input
                  type="text"
                  className="form-control"
                  id="bussLoc"
                  onChange={(event) => {
                    setLoc(event.target.value)
                  }}
                  placeholder=" "
                />
                <label for="bussNum">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="buss.Num"
                  onChange={(event) => {
                    setNum(event.target.value)
                  }}
                  placeholder="(555) 555 5555 "
                />
              </div>
              <div className="form-group">
                <label for="bussWeb">Web Adress</label>
                <input
                  type="text"
                  className="form-control"
                  id="bussWeb"
                  onChange={(event) => {
                    setWeb(event.target.value)
                  }}
                  placeholder="https://www.companyadress.com"
                />
              </div>

              <div className="form-group">
                <label for="bussEmail ">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="bussEmail"
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="input-group w-100 mb-3 mt-3">
                Select your Category

                <select className="custom-select w-100 mt-2"  >
                  <option selected>Bakery</option>
                  <option value="1">Clothing</option>
                  <option value="2">Skin Care</option>
                  <option value="3">Footwear</option>
                  <option value="4">Health</option>
                  <option value="4">Accessories</option>
                  <option value="4">Gifts & More</option>
                </select>
                <div>
                  <label htmlFor="banner">upload banner image   </label>
                  <input type="file" name="banner" className="mt-3 " id="banner" onChange={(e) => { setBanner(e.target.files[0]) }} />
                </div>
                <div>
                  <label htmlFor="banner">upload  image 1   </label>
                  <input type="file" name="img1" className="mt-3 " id="img1" onChange={(e) => { setImg1(e.target.files[0]) }} />
                </div>
                <div>
                  <label htmlFor="banner">upload  image 2 </label>
                  <input type="file" name="img2" className="mt-3 " id="img2" onChange={(e) => { setImg2(e.target.files[0]) }} />
                </div>
              </div>
                <button type="button" className="btn btn-primary" onClick={registerBuisness} >Register</button>
            </div>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </>
  );
}

export default Business;

/* 
REQUEST URL: Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness
REQUEST:
 {
  "categories": [
    "Skin Care",
    "face care",
    "self care"
  ],
  "instagram": "suganda.co",
  "address": "Hyderabad,Andhra Pradesh",
  "name": "suganda",
  "contact": "NA",
  "serviceLocation": [
    "india"
  ],
  "website": "suganda.co/",
  "createdDate": "2021-10-15T17:17:40.366Z",
  "modifiedBy": "2021-12-27T06:18:23.413895Z",
  "ratingSum": 15,
  "reviewCount": 4,
  "headerUrl": [
    "https://unraveldisplayimage.s3.ap-south-1.amazonaws.com/suganda.co1.jpg",
    "https://unraveldisplayimage.s3.ap-south-1.amazonaws.com/suganda.co2.jpg"
  ],
  "thumbnailUrl": "https://unravelthumbnail.s3.ap-south-1.amazonaws.com/suganda.co.jpg",
  "ratingAverage": 3,
  "explore": false
}
REQUEST RESPONSE: 
SUCCESS
{
    "isSuccess": true,
    "message": null,
    "data": {
        "id": "6251a99782bb9035822ad7b6",
        "categories": [
            "Skin Care",
            "face care",
            "self care"
        ],
        "description": null,
        "followerCount": null,
        "instagram": "tanya.co",
        "address": "Hyderabad,Andhra Pradesh",
        "name": "ananya",
        "contact": "8860360611",
        "serviceLocation": [
            "india"
        ],
        "website": "tanya.co/",
        "createdDate": "2021-10-15T17:17:40.366Z",
        "createdBy": null,
        "modifiedDate": null,
        "modifiedBy": null,
        "ratingSum": null,
        "reviewCount": 0,
        "iconUrl": null,
        "headerUrl": null,
        "thumbnailUrl": null,
        "ratingAverage": 0,
        "explore": false,
        "instagramUrl": "https://instagram.com/tanya.co"
    }
}

FAILURE
{
    "isSuccess": false,
    "message": null,
    "data": null
}

*/