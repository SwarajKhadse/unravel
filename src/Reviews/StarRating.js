import React ,{useState} from 'react'
import './StarRating.css'
function StarRating(props) {
    const [rating, setRating] = useState(props.rating);
    const [hover, setHover] = useState(0);
    const [newIndex, setIndex]=useState(0);
    var starValue=0;
  return (
    <>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        starValue=index;
        // setIndex(index)
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            
          >
            <span className="star">&#9733;</span>
            
          </button>
        );
        
      })}
      
      <div><span className='rate-text'>{rating }/5</span></div>
    </div>
    </>
  )
}

export default StarRating