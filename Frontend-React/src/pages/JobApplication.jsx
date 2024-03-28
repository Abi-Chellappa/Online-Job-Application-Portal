// JobApplicationForm.js

import React, { useState } from 'react';
import '../assets/css/Form.css'
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
const JobApplication = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [jobtittle, setJobtittle] = useState('');
  const [gender, setGender] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [graduateyear, setGraduateyear] = useState('');
  const [sslc, setSslc] = useState('');
  const [hsc, setHsc] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [resume, setResume] = useState('');
  const [drivelink, setDrivelink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (
      city.length === 0 ||
      fullname.length === 0 ||
      email.length === 0 ||
      gender.length === 0 ||
      dateofbirth.length === 0 ||
      address.length === 0 ||
      cgpa.length === 0
    ) {
      alert('Please fill out all required fields');
      return; // Exit early if required fields are not filled
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const formData = {
        fullname,
        email,
        phonenumber,
        jobtittle,
        gender,
        dateofbirth,
        address,
        city,
        graduateyear,
        sslc,
        hsc,
        cgpa,
        resume,
        drivelink,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      await axios.post(
        'http://localhost:8080/application/postJobapplication',
        formData,
        config
      );
      navigate('/sucess');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div>
        <UserHeader/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="job-application-form">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={fullname}  onChange={(e) => setFullname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={phonenumber}  onChange={(e) => setPhonenumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Job Tittle:</label>
          <select id="gender" name="gender" value={jobtittle}  onChange={(e) => setJobtittle(e.target.value)} required>
            <option value="">Select</option>
            <option value="Sostware_Engineer">Sostware Engineer</option>
            <option value="Data_Scientist">Data Scientist</option>
            <option value="Project_Manager">Project Manager</option>
            <option value="Product_Manager">Product Manager</option>
            <option value="Sales_Representative">Sales Representative</option>
            <option value="Marketing_Manager">Marketing_Manager</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={gender}  onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateofbirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={dateofbirth}  onChange={(e) => setDateofbirth(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={address}  onChange={(e) =>setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={city}  onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="year">Graduate Year:</label>
          <select id="year" name="year" value={graduateyear}  onChange={(e) => setGraduateyear(e.target.value)} required>
          <option value="">Select</option>
            <option value="Year_2016">2016</option>
            <option value="Year_2017">2017</option>
            <option value="Year_2018">2018</option>
            <option value="Year_2019">2019</option>
            <option value="Year_2020">2020</option>
            <option value="Year_2021">2021</option>
            <option value="Year_2022">2022</option>
            <option value="Year_2023">2023</option>
            <option value="Year_2024">2024</option>
            <option value="Year_2025">2025</option>
            <option value="Year_2026">2026</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tenthMarks">SSLC %:</label>
          <input type="text" id="tenthMarks" name="tenthMarks" value={sslc}  onChange={(e) => setSslc(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="twelfthMarks">HSC %:</label>
          <input type="text" id="twelfthMarks" name="twelfthMarks" value={hsc}  onChange={(e) => setHsc(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="collegeCGPA">College CGPA:</label>
          <input type="text" id="collegeCGPA" name="collegeCGPA" value={cgpa}  onChange={(e) => setCgpa(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" value={resume}  onChange={(e) => setResume(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="link">Resume Drive Link:</label>
          <input type="text" id="link" name="link" value={drivelink}  onChange={(e) => setDrivelink(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit">Submit Application</button>
          <button type="button"><Link to='/details'>Cancel</Link></button>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default JobApplication;
