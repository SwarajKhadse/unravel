import React, { useState, useEffect,Component} from "react";

import "./Business.css";
import axios from "axios";
import Bookmark from "./../Bookmarks/Bookmark";
import Dashboard from "../Business Dashboard/Dashboard";
import Add from "./Add";
import { render } from "react-dom";
import Select from 'react-select'
import makeAnimated from "react-select/animated";

function Business() {
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  // const [loc, setLoc] = useState()
  const [num, setNum] = useState();
  const [web, setWeb] = useState();
  const [email, setEmail] = useState();
  const [category, setCategory] = useState([]);
  let newArray;
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const animatedComponents = makeAnimated();
  const colorOptions = [
    { value: "Red", label: "Red" },
    { value: "Green", label: "Green" },
    { value: "Blue", label: "Blue" },
    { value: "Pink", label: "Pink" }
  ];
newArray = category.concat();
newArray = [...category, category];


const [selectedFlavors, setSelectedFlavors] = useState([]);

const handleSelect = function(selectedItems) {
    const flavors = [];
    for (let i=0; i<selectedItems.length; i++) {
        flavors.push(selectedItems[i].value);
    }

    setSelectedFlavors(flavors);
}
console.log('these is selected flowers' + selectedFlavors)
console.log("the value of category selected is" + isMultioptions)
  // var valSel = new Array();

  // function setCategory(sel) {
    
  //     category.push(objSel.value);
  // }
  // const [banner, setBanner] = useState([])
  // const [img1, setImg1] = useState([])
  // const [img2, setImg2] = useState([])

  // const [add, setAdd] = useState([]);
  const [count, setCount] = useState(0);
  const registerMeNew = async () => {
    let reqUrl =
      "http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness";

    console.log("===>>>>>>>", num, add1, name);

    let body = {
      categories: [newArray],
      instagram: "suganda.co",
      address: add1, // string array 
      name: name,
      contact: num,
      serviceLocation: [state],
      website: "suganda.co/",
      userId: email,
      createdDate: "2021-10-15T17:17:40.366Z",
      modifiedBy: "2021-12-27T06:18:23.413895Z",
      ratingSum: 15,

      reviewCount: 4,
      headerUrl: [
        "https://unraveldisplayimage.s3.ap-south-1.amazonaws.com/suganda.co1.jpg",
        "https://unraveldisplayimage.s3.ap-south-1.amazonaws.com/suganda.co2.jpg",
      ],
      thumbnailUrl:
        "https://unravelthumbnail.s3.ap-south-1.amazonaws.com/suganda.co.jpg",
      ratingAverage: 3,
      explore: false,
    };
    console.log("i am here...");
    console.log(count, "count");
    await axios
      .post(reqUrl, body)
      .then((res) => {
        if (res.data.isSuccess == true) {
          console.log(res.data);
          alert("Registered successfully !!");
          {
            <Bookmark bookmark={res.data} />;
          }
          navigate("/user/dashboard");
        } else {
          alert("Unable to register !!");
        }
      })
      .catch((err) => {
        console.error(err);
        console.log(err);
      });

  };

  console.log("address",  add1);
  console.log("these is category", category);
  return (
    <>
      {/* <Dashboard data/> */}
      <div className="row mt-3">
        <div className="col-md-7">
          <div className="container">
            <h2>Add Your Business</h2>

            <label for="bussName">Business Name</label>
            <input
              type="text"
              className="form-control"
              id="bussName"
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="your business name"
            />

            {/* <label for="bussDetail ">Enter about your business</label>
            <input
              type="text"
              className="form-control"
              id="bussDetail"
              onChange={(event) => {
                setDetail(event.target.value);
              }}
              placeholder="small description about your business"
            /> */}

            <div className="form-group"></div>
            <div className="form-group">
              <label for="bussAdd1">Address 1</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd1"
                onChange={(event) => {
                  setAdd1(event.target.value);
                }}
                placeholder="Enter your adress"
              />
               <label for="bussAdd1">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd1"
                onChange={(event) => {
                  setAdd2(event.target.value);
                }}
                placeholder="Enter your another adress"
              />
            </div>
            {/* <button
              type="button"
              onClick={() => {
                setAdd([...add, add1]);
              }}
              class="btn btn-primary"
            >
              Add
            </button> */}
             <button
              type="button"
              onClick={() => {
                setCount(count + 1);
              }}
              className="btn btn-primary" 
            >
              <span className="abcd">  Add another address</span>
            
            </button>

            <button
              type="button"
              onClick={() => {
                setCount(count - 1);
              }}
              className="btn  btn-1 btn-danger"
            >
              Remove
            </button>
           
            <div className="row d-flex">
              <div className="col-5">
                <div className="form-group">
                  <label for=" bussCity">City</label>
                  <input
                    type="email"
                    className="form-control"
                    id=" bussCity"
                    onChange={(event) => {
                      setCity(event.target.value);
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
                      setState(event.target.value);
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
                      setZip(event.target.value);
                    }}
                    placeholder="00000"
                  />
                </div>
              </div>  


            {[...Array(count)].map((i) => {
              return (
                <>

                
                  <div className="form-group d-flex row  ">
                    <div className="col-5">
                    <label for="bussAdd1" className="mr-3">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bussCity"
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                      placeholder="Enter your city"
                    />
                    </div>
                    <div className="col-4">
                     <label for="bussAdd1">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bussState"
                      onChange={(event) => {
                        setState(event.target.value);
                      }}
                      placeholder="Enter your state"
                    />
                    </div>
                    <div className="col-3">
                     <label for="bussAdd1">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bussZip"
                      onChange={(event) => {
                        setZip(event.target.value);
                      }}
                      placeholder=" 00000"
                    />
                    </div>
                  </div>
                  
                  {/* <button
                    type="button"
                    onClick={() => {
                      setAdd([...add, add1]);
                    }}
                    class="btn btn-primary"
                  >
                    Add
                  </button> */}
                </>
              );
            })}
            {/* <div className="form-group">
              <label for="bussAdd2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd2"
                onChange={(event) => {
                  setAdd2(event.target.value);
                }}
                placeholder="Enter your other adress "
              />
            </div>
            <button onClick={setTimeout}>add</button>
 */}


              <div className="form-group">
                {/* <label for="bussLoc">Enter Google map location link</label>
                <input
                  type="text"
                  className="form-control"
                  id="bussLoc"
                  onChange={(event) => {
                    setLoc(event.target.value)
                  }}
                  placeholder=" "
                /> */}
                <label for="bussNum">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="buss.Num"
                  onChange={(event) => {
                    setNum(event.target.value);
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
                    setWeb(event.target.value);
                  }}
                  placeholder="https://www.companyadress.com"
                />
              </div>

              <div className="form-group">
                <label for="bussEmail ">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="bussEmail"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="example@gmail.com"
                />
              </div>
              <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={[colorOptions[4], colorOptions[5]]}
                  isMultioptions={colorOptions}
               
                />

              <div className="input-group w-100 mb-3 mt-3">
                Select your Category
                <Select options={options} />

                {/* <select multiple={true} value={selectedFlavors} onChange={(e)=> {handleSelect(e.target.selectedOptions)}}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select> */}
                {/* <select
                  className="custom-select w-100 mt-2"
                  multiple={true}
                  onChange={(e) => {
                    setCategory(...category ,e.target.value);
                  }}
                >
                  <option value='bakery' selected>Bakery</option>
                  <option value="clothing">Clothing</option>
                  <option value="skinCare">Skin Care</option>
                  <option value="footware">Footwear</option>
                  <option value="health">Health</option>
                  <option value="access">Accessories</option>
                  <option value="giftsAndMore">Gifts & More</option>
                </select>
               */}
                {/* <div>
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
                </div> */}
              </div>
              <button
                type="button"
                className="btn btn-primary btn2"
                onClick={registerMeNew}
              >
                Register
              </button>
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
