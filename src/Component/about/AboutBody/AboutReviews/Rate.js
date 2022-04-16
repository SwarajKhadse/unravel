import StarRating from '../../../../Reviews/StarRating'
import AboutReview from './AboutReview'
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
                  <StarRating rating={props.reviewData.ratingStar}/>
                </div>
            </div>

            <div className='container text-left'>
              <br />
              <b>{props.reviewData.businessName}</b> review <br/>
              <span className='exp'> <b>"{props.reviewData.message}"</b></span> <br/> <br />
              <p>I really liked the place ce lot as it
covered all the things I wanted
</p>
<p>Published :  {props.reviewData.createdDate}</p>
            </div> 
                    

            <br />
    </div>
</div>
</>
  )
}

export default Rate