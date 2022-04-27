import React from 'react'
import "./shopCard.css"
export default function ShopCard(props) {

  return (
    <div className='card m-3 card-main'>
      <div className='card-body'   style={{
      backgroundImage: `url(${props.headerUrl})`,
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
