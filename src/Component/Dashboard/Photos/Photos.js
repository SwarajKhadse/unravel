import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mainnav from "../../Mainnav";
import "./PhotosSepp";
import PhotosSepp from "./PhotosSepp";
import Footer from "../../Footer";
import axios from "axios";
import PhotoUpload from './PhotoUpload'
function Photos() {
//////////extra /////////////

















  
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
           
          // console.log(s3)
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
///////////////////////////////////////////////upload images////////////////////////////////
const [selectedFile, setSelectedFile] = useState();
const [isFilePicked, setIsFilePicked] = useState(false);

const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
  // setIsSelected(true);
};

const handleSubmission = () => {
};
console.log("fcgfhfhfhfhfhgkgkhfhf" +"    "+selectedFile)

const addPhotos = async () => {
  let reqUrl =
    "Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/upload/images?userId=kiranparbhatgupta@gmail.com";
  let body = {

    "id": "62581b3b919ef25e251601ab",
    "imagePath": "https://unravel-webapp.s3.amazonaws.com/e7701e40-c7f4-4a37-80ce-2881c4e08b36",
    "imageFileName": "th.jpg",
    "userId": "kiranparbhatgupta@gmail.com",
    "businessId": "616b2d4e7e382a3d90882ce0",
    "categoryOfUrl": thumbnailURL,
    "createdDate": "2022-04-14T13:01:52.052847300Z"

  }
  await axios
    .post(reqUrl, body)
    .then((res) => {
      if (res.data.isSuccess == true) {
        console.log(res.data);
      } else {
        alert("error in uploading images check the size of image");
      }
    })
    .catch((err) => {
      console.error(err);
      console.log(err);
    });
    //  useEffect(() => {
  //    addPhotos();
  //  }, []);

};

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
                    J
                  </h1>
                </div>
                <div className="col-md-6 ">
                  <h6 className="mb-0 mt-3 hello">Hello,</h6>
                  <h6 className="fw-bold user-name">Jessica Albertoz</h6>
                </div>
              </div>
              <div className="container list-cont ">
              
                   <div className="list-book mb-2 mt-3 ml-3 list-book "><span className="fw-bold ">Dashboard</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/bookmark">Business info</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/review">Reviews</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/photos">Photos</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/category">Category</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">Create Blogs</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">User Dashboard</span></div>
                  
              </div>
            </div>
            <div className="col-md-8 Book2">
              <div className="d-flex">
                <div>
                  <h2 className="fw-bold pqr ">Photos </h2>
                </div>
                {/* <div className="pqr ">
                
                  <input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
        <img src={selectedFile} alt="abc" />
			</div>
                </div> */}
              </div>
              <div className="row">
                {photos.map((data) => {
                  return (
                    <div className="col-md-4 ">
                      {/* <h1>{data.imagePath}</h1> */}
                      <PhotosSepp title={data.imagePath} />
                    </div>
                  );
                })}
                 <PhotoUpload/>
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
