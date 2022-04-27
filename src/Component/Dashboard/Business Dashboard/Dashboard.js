import React ,{useState ,useEffect} from 'react'
import './Dashboard.css'
import { Link ,Routes,Route} from "react-router-dom";
import axios from 'axios';
import Mainnav from '../../Mainnav';
import Footer from '../../Footer';
function Dashboard() {
const [businessData,setBuisnessData] = useState([])
   
    const getBuisnessData = async () => {
      const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/616b2d4e7e382a3d90882beb`;
      await axios
        .get(reqUrl)
        .then((res) => {
          if (res.data.isSuccess == true) {
            console.log(res);
            console.log(res.data, "res.data.buisness");
            console.log(res.data.data, "res.data.data");
            setBuisnessData(res.data.data);
          
           console.log("kagaz"+businessData)
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
      
    }, [])
    
  return (
   <>
         <div className="Bookmark">
           <Mainnav/>
        <div className="back-color"> </div>
        <div className="container ">
          <div className="row main-cont"> 
             <div className="col-md-4 Book1">
                 <div className="container row pqr">
                     
                    <div className=" col-md-4 user-logo">
                       <img src={businessData.thumbnailUrl} alt="name" className='user-image'/>
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
                      <h5>{businessData.name}</h5>
                      <p className='token'>Address Line 1</p>
                      <h5>{businessData.address}</h5>
                      {/* <p className='token'>Address Line 2</p>
                      <h5>7 street, 26 lane</h5> */}
                      <p className='token'>City</p>
                      <h5>New Delhi</h5>
                        <div className='pin'>
                           <div>
                      <p className='token'>Pincode</p>
                      <h5>000000</h5>
                      </div>
                      <div className='country'>
                      <p className='token'>{businessData.serviceLocation}</p>
                      <h5>India</h5>
                      </div>
                      </div>
                      <p className='token mt-3'>Select Amenities</p>


                     <div className='row'>
                        <div className='col-md-4'>
                              <ul className='list1'>
                                 <li className='list1-cont'>
                                   <input type="checkbox" name="check1" id="check1" />
                                 Offer Delivery
                                 </li>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Outdoor seating
                                 </li>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Less Noise Area
                                 </li>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 All staff wears mask
                                 </li>
                              </ul>
                        </div>
                        <div className='col-md-4'>
                              <ul className='list1'>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Awesome for working
                                 </li>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Parking facility available
                                 </li>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Masks required
                                 </li>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Offers Takeout

                                 </li>
                              </ul>
                        </div>
                        <div className='col-md-4'>
                              <ul className='list1'>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Staff vaccinated with covid-19 vaccine

                                 </li>
                                 <li className='list1-cont'>
                                 <input type="checkbox" name="check1" id="check1" />
                                 Vaccination proof required

                                 </li>
                                 
                              </ul>
                        </div>
                     </div>                      
                   </div>
             </div>
          </div>
        </div>
      <Footer/>
      </div>
   
   </>
  )
}

export default Dashboard
  //  const getReviewsData = async () =>            {
  //     const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/review/user/khadseswaraj@gmail.com`;
  
  //     await axios
  //       .get(reqUrl)
  //       .then((res) => {
  //         if (res.data.isSuccess == true) {
  //           console.log(res);
  //           console.log(res.data, "res.data");
  //           console.log(res.data.data, "res.data.data");
  //           // alert("User Registered successFully")
  //         } else {
  //           alert(res.data.message);
  //         }
  //       })
  //       .then((err) => {
  //         // toast.error(err)
  //         console.log(err);
  //       });
  //   };
