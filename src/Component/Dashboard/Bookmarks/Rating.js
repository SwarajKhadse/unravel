import React from "react";
import "./Rating.css";
import StarRating from "../../../Reviews/StarRating";

function Rating(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-3 clasName='user-logo">
          <div className="small-logo text-center ">
            <img src="./twitter.png" alt="logo" />
          </div>
        </div>

        <div className="col-md-4">
          <h4></h4>
        </div>

        <div className="col-md-5">
          <StarRating />
        </div>
      </div>
      {/* <div className='Book-mark  text-center'>
          
           <div className='abc ' >
               <h4>Edison Coffee Shop</h4>
           </div>
           <div  className='abc xyz'>
            <StarRating/>
           </div>
    </div> */}

      {/* <div className='w-100'>
      <div className="row">
        <div className="col-md-2">
          <img src="./twitter.png" alt="twitter" />
        </div>

        <div className="col-md-8">
          <h6>Edison Coffee Shop 🌟🌟🌟🌟🌟</h6>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Rating;
