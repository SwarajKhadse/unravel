import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toast";
import {Link ,useNavigate } from 'react-router-dom'
import Signup from "../Signup/Signup";
import "./Login.css";
import GoogleLogin from 'react-google-login';
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")   
  const navigate = useNavigate ();
  const loginClick = async() => {

    let reqUrl = `https://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/user/${email}/signin`
    await axios.post(reqUrl , {"password":password})
      .then( ( res) => {
        if(res.data.isSuccess == true){
          console.log(res);
          alert("login successful !!")
          navigate("/user/dashboard")
        }else{
          alert("Invalid Credentials !!")
        }
      })
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="row ">
      
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
           <button type="submit" className="log-face">Login with Facebook </button>
           <GoogleLogin className="log-face log-goog"
    clientId="AIzaSyDS2JvR4nsJkstTEyYxjR56xhgrUeq3Xbc.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
            
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
                   <input type="email" className="log-mail fw-bold" placeholder=' Email' name="email" id="UserEmail" onChange={(e) => {setEmail(e.target.value)}} />
                   <input type="password" className="log-mail fw-bold"  placeholder='Password ' name="pass" id="userPass" onChange={(e) => {setPassword(e.target.value)}} />
                    <div className="row">
                      <div className="col-6">
                   <input type="checkbox" className='log-check' name="ckeck" id="userCheck" />
                   <span className="fw-bold log-rem">Remember me</span>
                  </div>
                  <div className="col-6 log-forget ">
                   <a href="#" className="log-for">Forget Password?</a>
                   </div>
                   </div>

                   <button onClick={loginClick} className="log-log">
                    Login to Viewmo 
                     </button>
                   <div className="log-new1">
                   <span className="log-new">New to unravel </span>
                   <Link to="/login" className='fw-bold' >Sign up!</Link> 
                   </div>
                   </form>
          </div>
        </div>
      <div className="col-md-7 log-img"></div>
    </div>
  );
}

export default Login;
