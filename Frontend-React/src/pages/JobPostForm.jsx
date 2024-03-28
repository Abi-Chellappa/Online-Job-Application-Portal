import React, { useState } from 'react';
import '../assets/css/JobPost.css';
import AdminSidebar from '../components/AdminSidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const JobPostForm = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [dept,setDept] = useState('');
  const [location, setLocation] = useState('');
  const [responsiblity, setResponsiblity] = useState('');
  const [qualification, setQualification] = useState('');
  const[jobimage,setJobimage]=useState('');
  const navigate = useNavigate();

  const store={title,company, dept, location, responsiblity, qualification,jobimage};
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or display it
    //console.log('Submitted Data:', { title,company, dept, location, responsiblity, qualification });
    if(title.length===0 || company.length===0 || dept.length===0 || location.length===0 || responsiblity.length===0 || qualification.length===0 || jobimage.length===0)
    {
      alert("Enter all the field");
    }
    else
    {
      try 
      {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        await axios.post(`http://localhost:8080/job/postJob`, store, config);
        navigate('/'); // Assuming navigate is imported correctly
      } catch (error) {
        console.error("Error posting job:", error);
      }
    }
  };

  return (
    <div>
        <AdminSidebar/>

        <div className='post_header'><br/><br/><br/>
        
            <div className='post_h'>
            <h2>Job Post</h2>
            </div>
    <div className="job-post-form-container">
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobRole">Job Title:</label>
          <input
            type="text"
            id="jobRole"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobRole">Company:</label>
          <input
            type="text"
            id="jobCompany"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Department:</label>
          <input
            type="text"
            id="company"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Location:</label>
          <input
            type="text"
            id="salary"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="shift">Responsibility:</label>
          <textarea
            type="text"
            id="shift"
            value={responsiblity}
            onChange={(e) => setResponsiblity(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="education">Qualification:</label>
          <textarea
            type="text"
            id="education"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="education">Jobimage URL:</label>
          <input
            type="text"
            id="education"
            value={jobimage}
            onChange={(e) => setJobimage(e.target.value)}
            required
            />
        </div>
        <button className='post_but' type="submit">Submit</button>
      </form>
    </div>
    </div>
            </div>
  );
};

export default JobPostForm;
