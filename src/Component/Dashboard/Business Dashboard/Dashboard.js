import React from 'react'
import './Dashboard.css'
import { Link ,Routes,Route} from "react-router-dom";
function Dashboard() {
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
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/bookmark">Business info</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/review">Reviews</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/photos">Photos</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold "><Link to="/dash/category">Category</Link></span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">Create Blogs</span></div>
                   <div className="list-book mb-2 ml-3 list-book "><span className="fw-bold ">User Dashboard</span></div>
                   </div>
             </div>
             <div className="col-md-8 Book2">
                   <div>
                         <h2 className="fw-bold pqr ">Business information</h2>
                   </div>
                   <div className="d-flex Book-Rev">
                      <p className='token'>Name</p>
                      <h5>ABC Business Store</h5>
                      <p className='token'>Address Line 1</p>
                      <h5>52, 13 floor, ABC Avenue</h5>
                      <p className='token'>Address Line 2</p>
                      <h5>7 street, 26 lane</h5>
                      <p className='token'>City</p>
                      <h5>New Delhi</h5>
                        <div className='pin'>
                           <div>
                      <p className='token'>Pincode</p>
                      <h5>2xx2030</h5>
                      </div>
                      <div className='country'>
                      <p className='token'>Country</p>
                      <h5>India</h5>
                      </div>
                      </div>
                      <p className='token mt-3'>Select Amenities</p>


                     <div className='row'>
                        <div className='col-md-4'>
                              <ul className='list1'>
                                 <li className='list1-cont'>
                                 Offer Delivery
                                 </li>
                                 <li className='list1-cont'>
                                 Outdoor seating
                                 </li>
                                 <li className='list1-cont'>
                                 Less Noise Area
                                 </li>
                                 <li className='list1-cont'>
                                 All staff wears mask
                                 </li>
                              </ul>
                        </div>
                        <div className='col-md-4'>
                              <ul className='list1'>
                                 <li className='list1-cont'>
                                 Awesome for working
                                 </li>
                                 <li className='list1-cont'>
                                 Parking facility available
                                 </li>
                                 <li className='list1-cont'>
                                 Masks required
                                 </li>
                                 <li className='list1-cont'>
                                 Offers Takeout

                                 </li>
                              </ul>
                        </div>
                        <div className='col-md-4'>
                              <ul className='list1'>
                                 <li className='list1-cont'>
                                 Staff vaccinated with covid-19 vaccine

                                 </li>
                                 <li className='list1-cont'>
                                 Vaccination proof required

                                 </li>
                                 
                              </ul>
                        </div>
                     </div>                      
                   </div>
             </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default Dashboard