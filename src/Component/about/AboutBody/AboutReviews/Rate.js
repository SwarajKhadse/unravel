import StarRating from '../../../../Reviews/StarRating'
import AboutReview from './AboutReview'
function Rate(props) {
  return (
    <>
        <div className='card m-3 card-main1'>
           <div className='card1-body'>
            <div className='first-row mt-3 rev-card'>
              <div style={{paddingRight: "40px"}} className='user-log'>
                <img  src='' className='user-img' />
               
                </div>
                <div>
                  <StarRating rating={props.reviewData.ratingStar}/>
                </div>
            </div>

            <div className='container text-left'>
              <br />
              <b>{props.reviewData.firstName + " " +props.reviewData.lastName}</b> reviewed <br/>
              <span className='exp'> <b></b></span> 
              <p>{props.reviewData.message}
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