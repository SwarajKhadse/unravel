
import React from 'react'
import StarRating from '../../../Reviews/StarRating'
import Review from './Review'
function Rate(props) {
  return (
    <>
        <div className='card m-3 card-main'>
           <div className='card1-body'>
            <div className='first-row mt-3 rev-card'>
              <div style={{paddingRight: "40px"}}>
                <img  src='./assets/background.jpg' className='user-img' />
                </div>
                <div>
                  <StarRating rating={props.rebookData.ratingStar}/>
                </div>
            </div>

            <div className='container text-left'>
              <br />
              <b>{props.rebookData.businessName}</b> review <br/>
              <span className='exp'> <b>"{props.rebookData.message}"</b></span> <br/> <br />
              <p>I really liked the place ce lot as it
                    covered all the things I wanted
                  </p>
                 <p>Published : {props.rebookData.createdDate}</p>
            </div> 
                    

            <br />
    </div>
</div>
</>
  )
}

export default Rate