import StarRating from '../../../../Reviews/StarRating'

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
<p>Published : 26 February 2022</p>
            </div> 
                    

            <br />
    </div>
</div>
</>
  )
}

export default Rate