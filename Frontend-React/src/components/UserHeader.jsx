import React, { useState } from 'react';
import '../assets/css/UserHeader.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/job_logos.png';
import logout from '../assets/images/Logout.png';
import user from '../assets/images/user.png';
import help from '../assets/images/help.png';
import edit from '../assets/images/edit.png';

function UserHeader() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav>
      <img src={logo} height="81.2px" width="91px" alt="Logo" />
      <div className='menu'>
        <ul>
          <li><Link to='/#'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/job'>&nbsp;&nbsp;Jobs</Link></li>
          <li><Link to='/payment'>premium</Link></li>
          <li><Link to='/login'>&nbsp;&nbsp;&nbsp;Logout</Link></li>
        </ul>
      </div>
      <div className='auth'>
        <p><Link to='/login'>Login</Link></p>
        <div className='signupbtn'>
          <button><Link to='/signup'>Register</Link></button>
        </div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-HzcpRPBuhVohi3pOkjnGmbWhk_Ctq7TlF3dgFvS1w&s"
        className="user-pic"
        onClick={toggleMenu}
        height="39px"
        width="39px"
        alt="User Profile"
      />
      {isSubMenuOpen && (
        <div className='sub-menu-wrap'>
          <div className='sub-menu' id="subMenu">
            <div className='user-info'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-HzcpRPBuhVohi3pOkjnGmbWhk_Ctq7TlF3dgFvS1w&s" height="39px" width="39px" alt="User Profile" />
              <h2>Abi Chellappa</h2>
            </div>
            <hr />
            <Link to='/profile' className='sub-menu-link'>
              <img src={user} alt="View Profile" />
              <p>View Profile</p>
              <span>&gt;</span>
            </Link>
            <Link to='/editprofile' className='sub-menu-link'>
              <img src={edit} alt="View Profile" />
              <p>Edit Profile</p>
              <span>&gt;</span>
            </Link>
            <Link to='#' className='sub-menu-link'>
              <img src={help} alt="Help & Support" />
              <p>Help & Support</p>
              <span>&gt;</span>
            </Link>
            <Link to='/login' className='sub-menu-link'>
              <img src={logout} alt="Logout" />
              <p>Logout</p>
              <span>&gt;</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default UserHeader;
