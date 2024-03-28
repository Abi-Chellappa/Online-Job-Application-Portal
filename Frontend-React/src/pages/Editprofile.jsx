import React, { useState } from 'react';
import '../assets/css/edit.css';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const EditProfile = ({ profile, onClose }) => {
  // Default profile values
  const defaultProfile = {
    name: 'Abi Chellappa',
    email: 'abichellu@gmail.com',
    phone: '9487693168', // Added phone number
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-HzcpRPBuhVohi3pOkjnGmbWhk_Ctq7TlF3dgFvS1w&s'
  };

  // State to manage edited profile values
  const [editedProfile, setEditedProfile] = useState({ ...defaultProfile, ...profile });

  // Handler to update edited profile data
  const handleEditProfile = (field, value) => {
    setEditedProfile(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  return (
    <div>
      <UserHeader />
      <div className="popup-container2">
        <div className="popup2">
          <div className="profile-header2">
            <img src={editedProfile.image} alt="User" className="profile-image2" />
            <h2>{editedProfile.name}</h2>
            <p>
              <strong>Username:</strong>{' '}
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) => handleEditProfile('name', e.target.value)}
              />
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <input
                type="text"
                value={editedProfile.email}
                onChange={(e) => handleEditProfile('email', e.target.value)}
              />
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <input
                type="text"
                value={editedProfile.phone}
                onChange={(e) => handleEditProfile('phone', e.target.value)}
              />
            </p>
          </div>
          <button className="close-btn2" onClick={onClose}><Link to='/'>Submit</Link></button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
