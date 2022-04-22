import React, { useState, useEffect } from "react";
import Mainnav from "../../Mainnav";
import "./PhotosSep";
import PhotosSep from "./PhotosSep";
import Footer from "../../Footer";
import axios from "axios";
function Photos() {
  // const arry = [1,0,3,2]
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos();
  }, []);
  const getPhotos = async () => {
    var userId = 1;
    const reqUrl =
      "http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/imagesBusiness?businessId=616b2d4e7e382a3d90882ce0";

    await axios
      .get(reqUrl)
      .then((res) => {
        // console.log(res)
        if (res.data.isSuccess == true) {
          console.log(res.data.imagePath, "res.data");
          setPhotos(res.data.data);
          let s1=res.imagePath;
          let s2=res.imageFileName;
          let s3
          s3=s1+s2;
          console.log(s3)
          // al1e1rt("User Registered successFully")
        } else {
          alert(res.data.message);
        }
      })
      .then((err) => {
        // toast.error(err)
        console.log(err);
      });
  };

  //  useEffect(() => {
  //    getBuisnessData();
  //  }, []);
  console.log(photos);
  return (
    <>
      <div className="Bookmark">
        <Mainnav />
        <div className="back-color"> </div>
        <div className="container ">
          <div className="row main-cont">
            <div className="col-md-4 Book1">
              <div className="container row pqr">
                <div className=" col-md-4 user-logo">
                  <h1 className="text-center mt-2 pt-1 fw-bold user-initial">
                    M
                  </h1>
                </div>
                <div className="col-md-6 ">
                  <h6 className="mb-0 mt-3 hello">Hello,</h6>
                  <h6 className="fw-bold user-name">Jessica Albertoz</h6>
                </div>
              </div>
              <div className="container list-cont ">
                <div className="list-book mb-2 mt-3 ml-3 list-book ">
                  <span className="fw-bold ">Dashboard</span>
                </div>
                <div className="list-book mb-2 ml-3 list-book ">
                  <span className="fw-bold ">Business info</span>
                </div>
                <div className="list-book mb-2 ml-3 list-book ">
                  <span className="fw-bold ">Reviews</span>
                </div>
                <div className="list-book mb-2 ml-3 list-book ">
                  <span className="fw-bold ">Photos</span>
                </div>
                <div className="list-book mb-2 ml-3 list-book ">
                  <span className="fw-bold ">Category</span>
                </div>
                <div className="list-book mb-2 ml-3 list-book ">
                  <span className="fw-bold ">Create Blogs</span>
                </div>
                <div className="list-book mb-2 ml-3 list-book ">
                  <span className="fw-bold ">User Dashboard</span>
                </div>
              </div>
            </div>
            <div className="col-md-8 Book2">
              <div className="d-flex">
                <div>
                  <h2 className="fw-bold pqr ">Photos </h2>
                </div>
                <div className="pqr ">
                  <button type="button" class="btn btn-warning ">
                    Delete Photo
                  </button>
                  <button type="button" class="btn btn-info ">
                    Add Photos
                  </button>
                </div>
              </div>
              <div className="row">
                {photos.map((data) => {
                  return (
                    <div className="col-md-4 ">
                      {/* <h1>{data.imagePath}</h1> */}
                      <PhotosSep title={data.imagePath} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Photos;
