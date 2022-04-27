import React from 'react'
import './Comment.css'
function Comment(props) {
  return (
    <>
    <div className='container Comm-box1'>
        <div className='Comm-box'>
            <h4>{props.redashData.businessName}</h4>
            <p className='fw-bold'>{props.redashData.message}</p>
            <p>I really liked the place ce lot as it covered all the things I wanted, I really liked the
place ce lot as it covered all the things I wanted. I really liked the place ce lot as it
covered all the things I wanted, I really liked the place ce lot as it covered all the
things I wanted
</p>

<button type="button" class="btn btn-primary">Reply</button>
        </div>

    </div>
    </>
  )
}

export default Comment