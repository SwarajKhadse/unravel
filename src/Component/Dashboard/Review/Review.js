import React from 'react'
import './Review.css'
import Rating from '../Bookmarks/Rating'
import AboutReview from '../../about/AboutBody/AboutReviews/AboutReview'
import ReviewCard from './../../../Reviews/ReviewCard'
function Review() {
  return (
  //  <>
  //   <div className="Bookmark">
  //       <div className="back-color"> </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  //       <div className="container ">
  //         <div className="row main-cont"> 
  //            <div className="col-3 Book1">
  //                <div className="container row pqr">
                                                                                                                                
  //                   <div className=" col-4 user-logo">
          
  //                      <h1 className="text-center mt-2 pt-1 fw-bold user-initial">J</h1>
  //                   </div>
  //                   <div className="col-6 ">
  //                   <h6 className="mb-0 mt-3 hello">Hello,</h6>
  //                   <h6 className="fw-bold user-name">Jessica Albertoz</h6>
  //                   </div>
                    
                    
                  
  //                <div  className="container list-cont ">
  //                  <div className="list-book mb-3 mt-3 ml-3 list-book "><span className="fw-bold ">Bookmarks</span></div>
  //                  <div className="list-book mb-3 ml-3 list-book "><span className="fw-bold ">Reviews</span></div>
  //                  <div className="list-book ml-3 list-book book-dash"><span className="fw-bold ">Business Dashboard</span></div>
  //                  </div>
  //            </div>
  //            <div className="col-9 Book2">
  //                  <div>
  //                        <h2 className="fw-bold pqr ">Reviews</h2>
  //                  </div>
  //                  <div className="d-flex Book-Rev">

  //                  <div className='Review-card'><AboutReview /></div>
  //                  </div>
                  
  //            </div>
  //         </div>
  //       </div>
  //     </div>
    
  //     </div>
      // </>
   
   
      <>
        <>
      <div className="Bookmark">
        <div className="back-color"> </div>
        <div className="container ">
          <div className="row main-cont"> 
             <div className="col-md-4 Book1">
                 <div className="container row pqr">
                     
                    <div className=" col-md-3 user-logo">
                       <h1 className="text-center mt-2 pt-1 fw-bold user-initial">J</h1>
                    </div>
                    <div className="col-md-6 ">
                    <h6 className="mb-0 mt-3 hello">Hello,</h6>
                    <h6 className="fw-bold user-name">Jessica Albertoz</h6>
                    </div>
                    
                 </div>
                 <div  className="container list-cont ">
                   <div className="list-book mb-3 mt-3 ml-3 list-book "><span className="fw-bold ">Bookmarks</span></div>
                   <div className="list-book mb-3 ml-3 list-book "><span className="fw-bold ">Reviews</span></div>
                   <div className="list-book ml-3 list-book book-dash"><span className="fw-bold ">Business Dashboard</span></div>
                   </div>
             </div>
             <div className="col-md-8 Book2">
             <div>
                    <h2 className="fw-bold pqr ">Reviews</h2>
              </div>
               <div className="d-flex Book-Rev">

               <div className='Review-card'><AboutReview /></div>
               </div>
        




             </div>
          </div>
        </div>
      </div>
    </>
      
      </>
  )
}

export default Review