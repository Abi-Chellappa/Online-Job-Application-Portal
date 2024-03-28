// Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import '../../assets/css/Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const formHolder = async(e) => {
    e.preventDefault();
    try
    {
      if (username.length === 0 || password.length === 0) {
        alert("Enter emailid and password")
      } else if (username.length === 0) {
        alert("Enter Emailid")
      } else if (password.length === 0) {
        alert("Enter Password");
      } 
      else 
      {
        const response = await axios.post("http://localhost:8080/auth/authenticate", { username, password });
        const { token } = response.data;
        const { role } =response.data;
        localStorage.setItem("token", token);
        sessionStorage.setItem("token",token);
  
        if (role === "ADMIN") 
        {
          navigate("/dashboard");
        } 
        else 
        {
          navigate("/");
        }
      }
  }
  catch(error)
  {
    alert("Incorrect Username and Password.");
  }

  };

  return (
    <div className='container_login'>
      <div className='form-box'>
      <h1 id="title"> Sign in</h1>
       <form onSubmit={formHolder}>
         <div className="input-group">
              <div className='input-field' id="nameField">
                <div className='icon'>
                <FaUserAlt />
                </div>
                 <input type="email12" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
              </div> 
              
              <div className='input-field'>
                <div className='icon'>
              <RiLockPasswordFill />
              </div>
               <input type="password12" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              </div> 
             {/* <p>Forget password<a href='#'> Click Here!</a></p>*/}
              <div className='btn-field'>
               <button type="submit" id="sibtn">Sign in</button>
               {/*<button type="button" id="subtn" className='disable' onClick={handleSignUpClick}>Sign up</button>*/}
              </div>
              <div className='para-field'>
                <p>Don't have an account?<span><Link to='/signup'> Sign up</Link></span></p>
              </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
