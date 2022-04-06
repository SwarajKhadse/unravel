import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <>
        <div className="row mt-3 ">
      
      <div className="col-md-5 log-form">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <h1 className="fw-bold">UNRAVEL</h1>
          </div>
          <div className="col-md-8 mt-2">
          <span className="log-bus">for Businesses</span>
          </div>
          </div>
         <button type="submit" className="log-face">Register with Facebook </button>
         <button type="submit" className="log-face log-goog">Register with Google </button>
          
          <div className="row mt-3">
                <div className="col-5">
                   <hr />
                </div>
                <div className="col-2">
                   <span className="fw-bold log-or">Or</span>
                </div>
                <div className="col-5 ">
                   <hr />
                </div>
          </div>
            <form action="#" method='get'>
               {/* form started */}
                 <input type="text"  className="log-mail fw-bold"  placeholder='Name' name="name" id="UserName" />
                 <input type="text"  className="log-mail fw-bold"  placeholder='Last Name' name="lastname" id="UserLastName" />
                 <input type="email" className="log-mail fw-bold" placeholder='Email' name="email" id="UserEmail" />
                 <input type="password" className="log-mail fw-bold"  placeholder='Password ' name="pass" id="userPass" />
                 <input type="password" className="log-mail fw-bold"  placeholder=' Confirm Password ' name="confpass" id="userConfPass" />
                  <div className="row">
                    <div className="col-6">
                 <input type="checkbox" className='log-check' name="ckeck" id="userCheck" />
                 <span className="fw-bold log-rem">Remember me</span>
                </div>
                <div className="col-6 log-forget ">
                 <a href="#" className="log-for">Forget Password?</a>
                 </div>
                 </div>

                 <button type="submit" className="log-log">Register Now!</button>
                 <div className="log-new1">
                 <span className="log-new">Already have an account </span>
                 <a href="#" className="fw-bold "> Sign in!</a>
                 </div>
                 </form>
        </div>
      </div>
    <div className="col-md-7 log-img"></div>
  </div>
    </>
  )
}

export default Signup