import React from 'react'
import "./reviewCard.css"
import StarRating from './StarRating'
export default function ShopCard(props) {
  return (
    <div className='card m-3 card-main'>
        <div className='card1-body'>
            <div className='first-row mt-2'>
              <div style={{paddingRight: "40px"}}>
                <img  src='./assets/background.jpg' className='user-img' />
                </div>
                <div>
                  <StarRating/>
                </div>
            </div>

            <div className='container text-left'>
              <br />
              <b>Jhon Doe</b> review <br/>
              <span className='exp'> <b>"Great Experience"</b></span> <br/> <br />
              <p>I really liked the place ce lot as it
covered all the things I wanted
</p>
            </div> 

            <div className='abc m-2'>
              <p className='date'>Published : 26 February 2022</p>
              
              <button type="button" class="btn btn-primary xyz read-butt">Read Reviews</button>
            </div>
            <br />
        </div>
    </div>
  )
}
