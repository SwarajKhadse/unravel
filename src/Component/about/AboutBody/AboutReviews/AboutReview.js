import React from "react";
import Rate from "./Rate";

export default function AboutReview() {
  return (
    <div className="container p-3 " style={{ marginTop: "100px" }}>
      <h2 className="text-center  ">Reviews</h2>
      <br />
      <div className="review-card row">
            <div className="col-12">
              <Rate />
            </div>
      </div>
       
      <div className="review-card row">
            <div className="col-12">
              <Rate />
            </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
