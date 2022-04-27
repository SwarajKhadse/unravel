import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './ReviewsB.css'
import Comment from './Comment.js'
import Mainnav from '../../Mainnav'
import Footer from '../../Footer'
import axios from 'axios'
function ReviewsB() {
  const [redashData, setRedashData] = useState([]);
  const getRedashData = async () => {
    const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/review/user/hasmarita@gmail.com`;
    await axios
      .get(reqUrl)
      .then((res) => {
        if (res.data.isSuccess == true) {
          console.log(res.data, "res.data.re");
          // alert("User Registered successFully")
          setRedashData(res.data.data);
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
    getRedashData();
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
                         <h2 className="fw-bold mt-3 pqr">Reviews</h2>
                         <div className='mt-3 mb-3'>
                         {
                    redashData.map((data) => {
                          return (
                            <div className='col-md-12'>
                              <Comment redashData={data}/>
                            </div>
                          )
                        })
}
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

export default ReviewsB