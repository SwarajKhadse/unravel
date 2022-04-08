import React from 'react'
import './ReviewHome.css'
import Footer from '../../Footer'
function ReviewHome() {
  return (
 <>
 <div className='row Review-H'>
  
    <div className='col-md-8'>
      <h1 className='main-text '>
      Your First Review Awaits
      </h1>
      <p className='sub-text '>
      lorem ipsum dummy text,lorem ipsum dummy text, <br/>lorem
      ipsum dummy text, lorem ipsum dummy text,
      </p>
    </div>
    <div className='col-md-4'>
        <div className='Review-H-img'>  </div>
      </div>    
{/*        
      <div className='container Rev-c'>
        <input type="search Sear-Rev" placeholder='what are you looking for'/>
        <input type="search Sear1-Rev" placeholder='Select Category' />
        <button className='butt-Rev'>Search</button>
      </div>  */}
        <div className="  main-content ">
        
          <div className="search-text-center">
            <input
              type="text"
              className="input-search "
              placeholder="What are you looking for"
            />
     
            
            <input
              type="text"
              className="input-search-cat"
              placeholder="Select Category "
            />
         
          
            <button type="button" className="butt-search">
              Search
            </button>
      

         

          </div> 
          </div>
      
          <Footer/>
          
    </div>
      

      {/* search bar */}
      

 
 </>
  )
}

export default ReviewHome