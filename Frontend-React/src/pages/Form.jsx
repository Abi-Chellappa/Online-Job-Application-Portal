import React, { useState } from 'react';
import '../assets/css/Form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    resume: '',
    coverLetter: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form data
    console.log(formData);
    // Redirect to the success page
    navigate("/sucess");
    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      resume: '',
    });
  };

  return (
    <div className="job-application-form">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phonenumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Form;
