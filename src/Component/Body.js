import React from "react";
import Fields from "../Fields";
import Reviews from "../Reviews/Reviews";
import ShopCard from "../Shop/ShopCard";
import './body.css'
function Body() {
  const firstRow = [
    "Clothing store ADC",
    "Vegetable store ADC",
    "Coffee store ADC",
  ];
  const secondRow = ["FastFood store ADC", "Cloth store ADC", "Food store ADC"];
  return (
    <div>
      <div   style={{ backgroundColor: "#ccd1d9" }}>
        <br /><br /><br /> <br /><br /><br /><br />
        <div className="container">
        <h1 className="text-center sub-text ">Find the Best Businesses in Town</h1>
        <h4 className="text-center sub-text" >Famous shops</h4>
        <div className="row">
          {firstRow.map((title) => {
            return (
              <div className="col-md-4">
                <ShopCard title={title} />
              </div>
            );
          })}
          
        </div>

        <div className="row">
          {secondRow.map((title) => {
            return (
              <div className="col-md-4">
                <ShopCard title={title} />
              </div>
            );
          })}
          </div>
        </div>
<br /><br /><br />
      </div>
      <Reviews />
      <Fields />
    </div>
  );
}

export default Body;
