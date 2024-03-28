// App.js

import React, { useState } from 'react';
import '../assets/css/UserDetails.css';
import AdminSidebar from './AdminSidebar';

function UserDetails() {
  const [userData, setUserData] = useState([
    { id: 1, username: 'Abi', email: 'abi@gmail.com', job: 2 },
    { id: 2, username: 'Kabarthini',email: 'kabar@gmail.com', job: 6 },
    { id: 3, username: 'Dharshine ',email: 'dhar@gmail.com', job: 4 },
    { id: 4, username: 'Inbasri',email: 'inba@gmail.com', job: 8},
    { id: 5, username: 'Asmitha',email: 'asmi@gmail.com', job: 2 },
    { id: 6, username: 'Jamuna', email: 'jam@gmail.com', job: 1 },
    { id: 7, username: 'Dhivya', email: 'dhiv@gmail.com', job: 9 },
    { id: 8, username: 'Krithi', email: 'krithi@gmail.com', job: 3 },
    { id: 9, username: 'Lekha', email: 'lekha@gmail.com', job: 5 },
    { id: 10, username: 'Nirosh', email: 'Nirosh@gmail.com', job: 10 }
  ]);

  return (
    <div className='userdetailsfull'>
        <AdminSidebar/><br/><br/>
    <div className="App">
        <div className='dhead'>
      <h1>User Data</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>No of Job's Applied</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default UserDetails;
