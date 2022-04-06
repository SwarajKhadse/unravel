import React from 'react'
import './PhotosSep'
import PhotosSep from './PhotosSep'
function Photos() {
   // const arry = [1,0,3,2]
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
                   <div className="list-book mb-3 mt-3 ml-3 list-book "><span className="fw-bold ">Bookmarks</span></div>
                   <div className="list-book mb-3 ml-3 list-book "><span className="fw-bold ">Reviews</span></div>
                   <div className="list-book ml-3 list-book book-dash"><span className="fw-bold ">Business Dashboard</span></div>
                   
                   </div>
             </div>
             <div className="col-md-8 Book2">
                   <div>
                         <h2 className="fw-bold pqr ">Photos </h2>
                   </div>

                <div className="row">
                     <div className="col-md-3 photo-col">
                        <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>
                        
                     </div>
                     <div className="col-md-3">
                     <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>
                     </div>
                     <div className="col-md-3">
                     <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>

                     </div>
                     <div className="col-md-3">
                     <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>
                        <div className='mb-3'><PhotosSep/></div>

                     </div>
                  </div> 
                  
             </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Photos