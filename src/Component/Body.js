import React, { useState, useEffect } from "react";
import Fields from "../Fields";
import Reviews from "../Reviews/Reviews";
import ShopCard from "../Shop/ShopCard";
import axios from "axios";
import "./body.css";

function Body() {
  const [buisnessData , setBuisnessData] = useState([]);
  const firstRow = [
    "Clothing store ADC",
    "Vegetable store ADC",
    "Coffee store ADC",
  ];
  const secondRow = ["FastFood store ADC", "Cloth store ADC", "Food store ADC"];
 

  const getBuisnessData = async () => {
    const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/best-businesses/category`;

    await axios
      .get(reqUrl)
      .then((res) => {
        if (res.data.isSuccess == true) {
          // console.log(res);
          console.log(res.data, "ye res hai...");
          setBuisnessData(res.data.data);
          // alert("User Registered successFully")
        } else {
          alert(res.data.message);
        }
        
      })
      .then((err) => {
        // toast.error(err)
        console.log(err);
      });
  };

  console.log(buisnessData , " ye bussniness data hai..");

  

  const browseBuisnessByCat = async () => {
    const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/business/{}`;

    await axios
      .get(reqUrl)
      .then((res) => {
        if (res.data.isSuccess == true) {
          console.log(res);
          console.log(res.data, "res.data");
          // alert("User Registered successFully")
        } else {
          alert(res.data.message);
        }
      })
      .then((err) => {
        // toast.error(err)
        console.log(err);
      });
  };



  useEffect(() => {
    getBuisnessData();
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#ccd1d9" }}>
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="text-center ">
            Find the Best Businesses in Town
          </h1>
          <h4 className="text-center ">Famous shops</h4>
          <div className="row">
            {/* {firstRow.map((title) => {
              return (
                <div className="col-md-4">
                  <ShopCard title={title} />
                </div>
              );
            })} */}

            {buisnessData ? 
              buisnessData.map((data) => {
              console.log(data.thumbnailUrl);
                return (
                  <div className="col-md-4 mt-3">
                    <ShopCard title={data.name} thumbnailUrl={data.thumbnailUrl} headerUrl = {data.headerUrl} />
                  </div>
                )
              })
             : ""
            }
          </div>

          <div className="row">
            {/* {secondRow.map((title) => {
              return (
                <div className="col-md-4">
                  <ShopCard title={title} />
                </div>
              );
            })} */}
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Reviews />
      <Fields />
    </div>
  );
}

export default Body;
