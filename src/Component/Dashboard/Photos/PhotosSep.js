import React from 'react'
import Photos from './Photos'
import './PhotosSep.css'
function PhotosSep({title  }) {
  console.log('these is img from phtotosep ' , title)


  return (
    <>

  <img src="https://unravel-webapp.s3.amazonaws.com/3761ce79-7501-46cb-840d-8cfccfd10678/th.jpg" className='img-maha' />
  {/* <h1>{id}</h1>
  <div className='group-img'>
  <div className='card-body'
        style={{
        backgroundImage: `url(${title})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:"100% 100%"
      }}></div>
  
  </div> */}
  
    
    </>
  )
}

export default PhotosSep