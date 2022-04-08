import React from "react";
import "./Business.css";
function Business() {
  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <h2>Add Your Business</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              debitis nobis dolor quas tenetur nihil voluptatem labore,
              repudiandae ab quisquam officiis illum illo aspernatur in dolorum
              eligendi blanditiis perferendis maxime!
            </p>
            <div className="form-group">
              <label for="exampleFormControlInput1 fw-bold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your business name"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1 fw-bold">Address 1</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your adress"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1 fw-bold">Address 2</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
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
                  <label for="exampleFormControlInput1 fw-bold">State</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your State "
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label for="exampleFormControlInput1 fw-bold">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="00000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1 fw-bold">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="(555) 555 5555 "
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1 fw-bold">Web Adress</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="https://www.companyadress.com"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1 fw-bold">
                  Your Email Address
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="https://www.companyadress.com"
                />
              </div>

              <div className="input-group w-100">
                Select your Category
                <select className="custom-select w-100" id="inputGroupSelect04">
                  <option selected>Bakery</option>
                  <option value="1">Clothing</option>
                  <option value="2">Skin Care</option>
                  <option value="3">Footwear</option>
                  <option value="4">Health</option>
                  <option value="4">Accessories</option>
                  <option value="4">Gifts & More</option>
                </select>
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
