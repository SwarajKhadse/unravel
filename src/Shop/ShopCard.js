import React from 'react'
import "./shopCard.css"
export default function ShopCard(props) {

  return (
    <div className='card m-3 card-main'>
      <div className='card-body' style={{
        backgroundImage: `url(${props.thumbnailUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:"100% 100%"
      }}>
        <h5 className='card-title'>{props.title}</h5>
      </div>

    </div>
  )
}
