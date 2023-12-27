import React, { useState } from "react";
import "../Login/Login.css";
import Cards from '../Cards/Cards';
import GoogleIcon from "@mui/icons-material/Google"  
import FacebookIcon from "@mui/icons-material/Facebook"  
//import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import {database} from '../../utils/database';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
 

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noEmail: "Please enter your email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!email) {
      // Username input is empty
      setErrorMessages({ name: "noEmail", message: errors.noEmail });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    // Search for user credentials
    const currentUser = database.find((user) => user.email === email);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

return (
  
    <div className="teret">
      <Cards>
    <div className="tedr" > 
       <h1 className="title">Logged to your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs_container">
           
            <img src={email_icon} alt="" className="emaili" /> 
            <input
            type="email"
            placeholder="Email"
            value={email}
            className="fill3"
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMsg("email")}
          {renderErrorMsg("noEmail")}
            
           <div className="pass2">
           <img src={password_icon} alt="" className="emaili" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="fill3"
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
         
          
        </div>
         <div className="checkbox-wrapper">
        <input className="fast1" type="checkbox" name="" id="login-checkbox"/> 
        <label className="fal" display="flex" justify-content="center" for="login-checkbox">Remember Me</label>
        </div>
        <input type="submit" value="Sign in" className="login_button" />
      </form>
      <div className="link_container">
        <a href="/" className="small">
          Forgot the Password?
        </a>
      </div>
        <label className="fall">or continue with</label>
        <div id="iconGroup" className="test12">
        <FacebookIcon className="facebookI" style={{ color: '#1266f1' }} />
        <GoogleIcon className="googleI" style={{ color: '#EA4335' }} />
        <AppleIcon className="appleI" style={{ color: '#000' }} />
        </div>
        <label className="fall1">Don't have an account?</label>
        <input className="login_button1" type="submit" value="Sign up" />
      </div>
      </Cards>
      </div>
    
  );
  
};


export default Login