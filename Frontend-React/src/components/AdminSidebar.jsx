import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../assets/css/AdminSidebar.css';
import logo from '../assets/images/job_with_out.png'

function AdminSidebar() {
  return (
    <div>
    <div className='full229'>
         
         <div class="navbar9">
            <div class="menu9">
             <ul>
                <li><Link to='/'><span className='icon9'><AiIcons.AiOutlineHome/></span>&nbsp;&nbsp;HOME</Link></li>
                <li><Link to='/about'><span className='icon9'><AiIcons.AiOutlineUser/></span>&nbsp;&nbsp;ABOUT US</Link></li>
                <li><Link to='/contactus'><span className='icon9'><BsIcons.BsFillTelephoneFill/></span>&nbsp;&nbsp;CONTACT US</Link></li>
                <li><Link to='/login'><span className='icon9'><BiIcons.BiLogIn/></span>&nbsp;&nbsp;LOGIN</Link></li>
                <li><Link to='/register'><span className='icon9'><BiIcons.BiRegistered/></span>&nbsp;&nbsp;REGISTER</Link></li>
              </ul>
           </div>
        </div>
      
        
   
        <input type='checkbox' id="check9"/>
        <label for="check">
        <div id='menubar9'><FaIcons.FaBars/></div>
        <div id='close9'><AiIcons.AiOutlineClose/></div>
        </label>
    
    
        <div className="sidebar9">
          <div className='img_slide9'>
       {/*<Link to='/'><img src={logo} height="38.2px" width="100px"></img></Link> */}
        <h3><Link to='/'>My App</Link></h3>
        </div>
            <ul>
              <li><Link to='/dashboard'><span className='icon'></span>Dashboard</Link></li>
              <li><Link to="/userdetails"><span className='icon'></span>Users</Link></li>
              <li><Link to="/jobpost"><span className='icon'></span>Post Job</Link></li>
              <li><Link to="/jobdetails"><span className='icon'></span>Jobs</Link></li>
              <li><Link to="/getapplication"><span className='icon'></span>Application</Link></li>
              <li><Link to="/login"><span className='icon'></span>Logout</Link></li> 
            </ul>
          </div>
         
    </div>

  
  
  </div>
 
  )
}

export default AdminSidebar
