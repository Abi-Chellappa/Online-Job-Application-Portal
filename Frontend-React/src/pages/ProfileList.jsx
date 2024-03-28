import React from 'react';
import '../assets/css/Profile.css';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const PopupProfile = ({ profile, onClose }) => {
  // Default profile values
  const defaultProfile = {
    name: 'Abi Chellappa',
    email: 'abichellu@gmail.com',
    phone: '9487693168', // Added phone number
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-HzcpRPBuhVohi3pOkjnGmbWhk_Ctq7TlF3dgFvS1w&s',
    appliedJobs: [
      { title: 'Software Engineer', company: 'Zoho' },
      { title: 'Web Developer', company: 'Accenture' },
      { title: 'App Developer', company: 'Google' }
    ]
  };

  // Merge default profile with provided profile, if any
  const mergedProfile = { ...defaultProfile, ...profile };

  return (
    <div>
      <UserHeader />
      <div className="popup-container1">
        <div className="popup1">
          <div className="profile-header1">
            <img src={mergedProfile.image} alt="User" className="profile-image1" />
            <h2>{mergedProfile.name}</h2>
            <p>Email: {mergedProfile.email}</p>
            <p>Phone: {mergedProfile.phone}</p> {/* Added phone number */}
            <p>No. of Jobs Applied: {mergedProfile.appliedJobs.length}</p>
          </div>
          <div className="profile-details1">
            <h3>Applied Jobs:</h3>
            <ul>
              {mergedProfile.appliedJobs.map((job, index) => (
                <li key={index}>
                  <strong>{job.title}</strong> at {job.company}
                </li>
              ))}
            </ul>
          </div>
          <button className="close-btn1" onClick={onClose}><Link to='/'>Close</Link></button>
        </div>
      </div>
    </div>
  );
};

export default PopupProfile;
