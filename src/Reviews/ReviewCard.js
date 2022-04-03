import React from 'react'
import "./reviewCard.css"
export default function ShopCard(props) {
  return (
    <div className='card m-3 card-main'>
        <div className='card1-body'>
            <div className='first-row mt-2'>
                <img  src='./assets/background.jpg' className='user-img' />
                <div className='row'>⭐⭐⭐⭐⭐ 4.5/5</div>
            </div>

            <div className='container text-left'>
              <br />
              <b>Jhon Doe</b> review <br/>
              <span> <b>"Great Experience"</b></span> <br/>
              <p>I really liked the place ce lot as it
covered all the things I wanted
</p>
            </div>

            <div className='d-flex  m-2'>
              <br />
              <p className='date'>Published : 26 February 2022</p>
              
              <button type="button" class="btn btn-primary read-butt">Read Reviews</button>
            </div>
        </div>
    </div>
  )
}
