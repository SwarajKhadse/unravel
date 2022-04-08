import React from "react";
import "./Bookmark.css";
import Rating from "./Rating";
import { Link ,Routes,Route} from "react-router-dom";
function Bookmark() {
  return (
    <>
      <div className="Bookmark">
        <div className="back-color"> </div>
        <div className="container ">
          <div className="row main-cont"> 
             <div className="col-md-3 Book1">
                 <div className="container row pqr top-padding">
                    <div className=" col-4 user-logo">
                       <h1 className="text-center mt-2 pt-1 fw-bold user-initial">J</h1>
                    </div>
                    <div className="col-md-6 ">
                    <h6 className="mb-0 mt-3 hello">Hello,</h6>
                    <h6 className="fw-bold user-name">Jessica Albertoz </h6>
                    </div>
                    
                 </div>
                 <div  className="container list-cont ">
                   <div className="list-book mb-3 mt-3 ml-3  list-book "><span className="fw-bold "><Link to="/user/bookmark">Bookmarks</Link></span></div>
                   <div className="list-book mb-3 ml-3 list-book "><span className="fw-bold "><Link to="/user/review">Reviews</Link> </span></div>
                   <div className="list-book ml-3 list-book book-dash"><span className="fw-bold "><Link to="/user/dashboard">Business Dashboard</Link></span></div>
                   </div>
             </div>
             <div className="col-md-9 Book2 top-margin  ">
                   <div>
                         <h2 className="fw-bold  text-center xyz ">Bookmarks</h2>
                   </div>
                   <div className="d-flex Book-Rev text-center">
                   <div className="mt-3"><Rating/></div>
                   <div className="mt-3"><Rating/></div>
                   <div className="mt-3"><Rating/></div>
                   <div className="mt-3"><Rating/></div>
                   
                   </div>
             </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </div>
    </>
  );
}

export default Bookmark;
