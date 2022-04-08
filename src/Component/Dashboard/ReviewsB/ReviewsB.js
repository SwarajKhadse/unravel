import React from 'react'
import './ReviewsB.css'
import Comment from './Comment.js'
function ReviewsB() {
  return (
    <>
           <div className="Bookmark">
        <div className="back-color"> </div>
        <div className="container ">
          <div className="row main-cont"> 
             <div className="col-md-4 Book1">
                 <div className="container row pqr">
                     
                    <div className=" col-md-4 user-logo">
                       <h1 className="text-center mt-2 pt-1 fw-bold user-initial">J</h1>
                    </div>
                    <div className="col-md-6 ">
                    <h6 className="mb-0 mt-3 hello">Hello,</h6>
                    <h6 className="fw-bold user-name">Jessica Albertoz</h6>
                    </div>
                    
                 </div>
                 <div  className="container list-cont ">
                   <div className="list-book mb-2 mt-3 ml-3 list-book "><span className="fw-bold ">Dashboard</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">Business info</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">Reviews</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">Photos</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">Category</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">Create Blogs</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">User Dashboard</span></div>
                   </div>
             </div>
             <div className="col-md-8 Book2">
                   <div>
                         <h2 className="fw-bold mt-3 pqr">Reviews</h2>
                         <div className='mt-3 mb-3'>
                        <Comment/>
                        </div>
                        <div className='mt-3 mb-3'>
                        <Comment/>
                        </div>  
                   </div>

             </div>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default ReviewsB