import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

import '../../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [role, setRole] = useState('');
  const details={username,email,password,mobileno,role}
  const formHolder = async(e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (username.length === 0 || email.length === 0 || password.length === 0 || mobileno.length === 0 || role.length==0) {
      alert("Enter all the fields");
    }
    else if (!regex.test(email)) {
      alert("Enter a valid Email Address");
    }
    else if (password.length < 8) {
      alert("Enter at least 8 characters in password");
    }
    else {
      try {
        await axios.post(`http://localhost:8080/auth/register`, details);
        if(role==="ADMIN")
        {
          navigate("/dashboard");
        }
        else
        {
        navigate('/');
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error appropriately, e.g., show error message to user
      }
    }
  }

  return (
    <div className='container_signup'>
      <div className='form-box2'>
        <h1 id="title2"> Sign Up</h1>  
        <form onSubmit={formHolder}>
          <div className="input-group2">
            <div className='input-field2' id="nameField2">
              <div className='icon2'>
                <FaUserAlt />
              </div>
              <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className='input-field2' id="nameField2">
              <div className='icon2'>
                <MdEmail />
              </div>
              <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='input-field2'>
              <div className='icon2'>
                <RiLockPasswordFill />
              </div>
              <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='input-field2'>
              <div className='icon2'>
              <FaPhoneAlt/>
              </div>
              <input type="tel" placeholder='Enter Mobile No' value={mobileno} onChange={(e) => setMobileno(e.target.value)} />
            </div>

            <div className='input-field2'>
              <div className='icon2'>
              <FaUserAlt />
              </div>
              <select value={role} onChange={(e) => setRole(e.target.value)} >
                <option value="">Select a role</option>
                <option value="USER">User</option>
  <option value="ADMIN">Admin</option>
</select>

            </div>

            <div className='btn-field2'>
              <button type="submit" id="subtn2">Sign up</button>
              {/*<button type="button" id="sibtn2" className='disable2' onClick={handleSignUpClick}>Sign in</button>*/}
            </div>
            <div className='para-field2'>
                <p>Allready have an account?<span><Link to='/login'> Sign in</Link></span></p>
              </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;
