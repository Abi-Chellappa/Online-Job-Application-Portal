import React from 'react'
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
function Footer() {
  return (
    <div className='footfull'>
    <footer>
   
        <div className='footer-col'>
          <h4>Quick Links</h4>
          <ul>
              <li><Link to='#'><span className='fp'>Privacy policy</span></Link></li>
              <li><Link to='#'><span className='fp'>Terms and Condition</span></Link></li>
              <li><Link to='#'><span className='fp'>Feed Back</span></Link></li>
              <li><Link to='#'><span className='fp'>FAQ</span></Link></li>
             
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Project</h4>
          <ul>
              <li><Link to='#'>Companies</Link></li>
              <li><Link to='#'>Salaries</Link></li>
              <li><Link to='#'>Location</Link></li>
              <li><Link to='#'>Jobs </Link></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Company</h4>
          <ul>
              <li><Link to='#'>About Us</Link></li>
              <li><Link to='#'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Follow Us</h4>
          <div className='sociellink'>
             <Link to='https://www.facebook.com/profile.php?id=100093687843994'><span className='sicon'><AiIcons.AiFillFacebook/></span></Link>
             <Link to='https://www.instagram.com/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
             <Link to='https://www.linkedin.com/in/abi-chellappa-193837256/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
             <Link to='https://twitter.com/'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
