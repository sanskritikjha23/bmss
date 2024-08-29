import React from "react";
import './signup.css';
import usersicon from "../Assets/usersicon.png";
import emailicon from "../Assets/emailicon.png";
import passwordicon from "../Assets/passwordicon.png";
function Signup(){
    return(
        
           <div className="container">
           <div className="header">
           <div className="text">Register</div>
           <div className="underline"></div>
           </div>
           <div className="inputs">
            <div className="input"></div>
            <img src={usersicon} alt="Usericon"/>
            <input type="text" placeholder="Name"/>
           </div>
           
           <div className="inputs">
            <div className="input"></div>
            <img src={emailicon} alt="Emailicon"/>
            <input type="email" placeholder="Email Id"/>
           </div>

           <div className="inputs">
            <div className="input"></div>
            <img src={passwordicon} alt="Password"/>
            <input type="password" placeholder="Password"/>
           </div>
           <div className="forgot-password">Forgot Password? <span>Click here!</span></div>

           <div className="submit-container">
            <div className="submit">Register</div>
            <div className="submit">Login</div>
           </div>
           </div>
        
    );
    };
export default Signup;