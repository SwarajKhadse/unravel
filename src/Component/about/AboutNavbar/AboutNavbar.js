import React from 'react'
import './AboutNavbar.css'
import StarRating from './../../../Reviews/StarRating'
function AboutNavbar() {
  return (
    <>
    <div className='back-image'>
    <div className='back-div'>
      <h1 className='text-main '>
        Phill Tea Shop
      
      <h4 className='text-sub'>
        <div className='ml-3'>
      <StarRating/>
      </div>
      <div className='mt-1'>
      <span className='fw-bold ml-1 rev-text'> Reviews</span>
      </div>
      </h4>
      </h1>
       </div>
    </div>
   
    </>
    
    )
}

export default AboutNavbar