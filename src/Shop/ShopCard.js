import React from 'react'
import "./shopCard.css"
export default function ShopCard(props) {
console.log('these is props0 ' + props.headerUrl[0])
console.log('these is props1 ' + props.headerUrl[1])
let headerUrl_number_0 = props.headerUrl[0];



  return (
    <div className='card m-3 card-main'>
      <div className='card-body'   style={{
      backgroundImage: `url(${headerUrl_number_0})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:"100% 100%"
      
    }}>
        
        <div className='img-rev'>
        
        <h4 className='card-title'>{props.title}</h4>
        </div>
      </div>
      
    </div>
  
  
  )
}