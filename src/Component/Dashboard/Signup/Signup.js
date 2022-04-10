import React, { useState } from "react";
import axios from "axios";
import { toast,errorToast } from "react-toast";
import "./Signup.css";
import { useNavigate ,Link  } from "react-router-dom";
import Login from "../Login/Login";
function Signup() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");

  const navigate = useNavigate ();

  const signUp = async() => {
    // console.log("userData " , name ,lastname ,email ,password , conpassword)
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    
    if (password === conpassword) {
      
      const reqBody = {
        emailId: email,
        gender: "Prefer not to say",
        firstName: name,
        lastName: lastname,
        dob: "1975-06-15",
        phone: "7217616667",
        iconUrl: "",
        password: conpassword,
      };

      const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/user`;

      await axios.post(reqUrl ,reqBody).then((res) =>{ 
        console.log(res);
        if(res.data.isSuccess == true){
          console.log(res , "res")
          alert("User Registered successFully")
          navigate(`/login`)
        }else{
          alert(res.data.message);
          navigate(`/login`)
        }
      }).then( (err) => {
        toast.error(err)
        console.log(err)
      })

    }
  };

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
            <button type="submit" className="log-face">
              Register with Facebook{" "}
            </button>
            <button type="submit" className="log-face log-goog">
              Register with Google{" "}
            </button>

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
            <form action="#" method="get">
              {/* form started */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="log-mail fw-bold"
                placeholder="Name"
                name="name"
                id="UserName"
              />
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="log-mail fw-bold"
                placeholder="Last Name"
                name="lastname"
                id="UserLastName"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="log-mail fw-bold"
                placeholder="Email"
                name="email"
                id="UserEmail"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="log-mail fw-bold"
                placeholder="Password "
                name="pass"
                id="userPass"
              />
              <input
                type="password"
                value={conpassword}
                onChange={(e) => setConPassword(e.target.value)}
                className="log-mail fw-bold"
                placeholder=" Confirm Password "
                name="confpass"
                id="userConfPass"
              />
              <div className="row">
                <div className="col-6">
                  <input
                    type="checkbox"
                    className="log-check"
                    name="ckeck"
                    id="userCheck"
                  />
                  <span className="fw-bold log-rem">Remember me</span>
                </div>
                <div className="col-6 log-forget ">
                  <a href="#" className="log-for">
                    Forget Password?
                  </a>
                </div>
              </div>

              <button type="button" onClick={signUp} className="log-log">
                 {/* <Link to="/login" className="butt">Register Now!</Link>  */}
                 
Register Now              </button>
              <div className="log-new1">
                <span className="log-new">Already have an account </span>
                <a href="#" className="fw-bold ">
                  {" "}
                  <Link to="/login" >Login</Link> 
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-7 log-img"></div>
      </div>
    </>
  );
}

export default Signup;
