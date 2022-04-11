import React ,{useState} from "react";
import "./Business.css";
function Business() {
  const [cat,setCat] = useState("")
  
  return (
    
    <>
      <div className="row mt-3">
        <div className="col-md-7">
          <div className="container">
          <h2>Add Your Business</h2>
          <label for="bussName">Business Name</label>
              <input
                type="text"
                className="form-control"
                id="bussName"
                placeholder="your business name"
              />
           
            <label for="bussDetail ">Enter about your business</label>
              <input
                type="text"
                className="form-control"
                id="bussDetail"
                placeholder="small description about your business"
              />
            
            <div className="form-group">
              <label for="bussEmail ">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="bussEmail"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label for="bussAdd1">Address 1</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd1"
                placeholder="Enter your adress"
              />
            </div>
            <div className="form-group">
              <label for="bussAdd2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd2"
                placeholder="Enter your other adress "
              />
            </div>
            <div className="row d-flex">
              <div className="col-5">
                <div className="form-group">
                  <label for="exampleFormControlInput1 fw-bold">City</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your city "
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label for="bussState">State</label>
                  <input
                    type="email"
                    className="form-control"
                    id="bussState"
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
                    placeholder=" "
                  />
                <label for="exampleFormControlInput1 fw-bold">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="(555) 555 5555 "
                />
              </div>
              <div className="form-group">
                <label for="bussWeb">Web Adress</label>
                <input
                  type="text"
                  className="form-control"
                  id="bussWeb"
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
                placeholder="example@gmail.com"
              />
            </div>

              <div className="input-group w-100 mb-3 mt-3">
                Select your Category
                
                <select className="custom-select w-100 mt-2"  onChange={(e) => {setCat(e.target.value)}}>
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
                  <input type="file" name="banner" className="mt-3 " id="banner" />
                  </div>
                  <div>
                  <label htmlFor="banner">upload  image 1   </label> 
                  <input type="file" name="img1" className="mt-3 " id="img1" />
                  </div>
                  <div>
                  <label htmlFor="banner">upload  image 2 </label> 
                  <input type="file" name="img2" className="mt-3 " id="img2" />
                  </div>
              </div>  
            </div>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </>
  );
}

export default Business;
