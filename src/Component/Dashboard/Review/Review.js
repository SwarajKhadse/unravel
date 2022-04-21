import React,{useState,useEffect}   from 'react'
import './Review.css'
import Ratebook from './Ratebook'
import axios from 'axios';
function Review() {
  const [rebookData, setRebookData] = useState([]);
  const getRebookData = async () => {
    const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/review/user/{userId}`;
    await axios
      .get(reqUrl)
      .then((res) => {
        if (res.data.isSuccess == true) {
          console.log(res.data, "res.data.re");
          // alert("User Registered successFully")
          setRebookData(res.data.data);
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
    getRebookData();
  }, [])
  return (
  
   
   
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

               <div className="container p-3 " style={{ marginTop: "100px" }}>
      
                    <br />
                    <div className="review-card row">
                      {
                    rebookData.map((data) => {
                          return (
                            <div className='col-md-12'>
                              <Ratebook rebookData={data}/>
                            </div>
                          )
                        })
}
      </div>
       
      
      <br />
      <br />
      <br />
    </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </>
      
      </>
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
  )
}

export default Review